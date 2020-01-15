import React from 'react';
import '../../../sass/SummonerHistorySinglePlayer.sass'
import SummonerHistoryItemsList from '../Items/SummonerHistoryItemsList.js'

const SummonerHistorySinglePlayer = (props) => {
   

    const getChampionName = () => {
        let champName = ""
        props.champNames.forEach(single => {
            if(single.key === props.champion) champName=single.name
        })
        return champName
    }

    const getSummonerLane = () => {
        if(props.playerStats.length !== 0 ){
            const lane = props.playerStats[0].timeline.lane;
            const role = props.playerStats[0].timeline.role;
            if(role === "SOLO" || role === "DUO" || role === "NONE"){
                if(lane === "BOTTOM") return "CARRY"
                else return lane
            }
            else 
                return role.slice(4,role.length)

        }
    }

    const lane = getSummonerLane()
    return (
        <div className="historyGameSingle__playerInfo playerInfo">
            <img src={`http://ddragon.leagueoflegends.com/cdn/${props.patch}/img/champion/${getChampionName()}.png`} alt="Champion img" className="playerInfo__champImg"/>
            {props.queue !== 450 ? 
            <div className="playerInfo__summonerLane">
                <img src={lane === "NONE" ? `/images/lane/TOP.png` : `/images/lane/${lane}.png`} alt="Lane img" className="playerInfo__laneImg"/>
                <h3 className="playerInfo__lane">{lane === "NONE" ? "TOP" : lane}</h3>
            </div>
            : " "}
            <div className="playerInfo__spells">
                <img className="playerInfo__singleSpell" src={`./images/spells/${props.playerStats[0].spell1Id}.png`} alt="Spell img"/>
                <img className="playerInfo__singleSpell" src={`./images/spells/${props.playerStats[0].spell2Id}.png`} alt="Spell img"/>
            </div>
            <div className="playerInfo__perks">
                <img src={`https://opgg-static.akamaized.net/images/lol/perk/${props.playerStats[0].stats.perk0}.png`} alt="singlePerk" className="playerInfo__singlePerk"/>
                <img src={`https://opgg-static.akamaized.net/images/lol/perkStyle/${props.playerStats[0].stats.perkSubStyle}.png`} alt="singlePerk" className="playerInfo__singlePerk"/>
            </div>
            <p className="playerInfo__stats">{`${props.playerStats[0].stats.kills} / ${props.playerStats[0].stats.deaths} / ${props.playerStats[0].stats.assists}`}</p>
            <p className="playerInfo__goldCS"><span className="playerInfo__goldCS--bold">{props.playerStats[0].stats.goldEarned}</span>{` gold / `}<span className="playerInfo__goldCS--bold">{props.playerStats[0].stats.totalMinionsKilled}</span>{` CS`}</p>
            <p className="playerInfo__dmgDealt">Damage <br/><span className="playerInfo__dmgDealt--bold">{props.playerStats[0].stats.totalDamageDealtToChampions}</span></p>
            <p className="playerInfo__wards">Wards placed: <span className="playerInfo__wards--bold">{props.playerStats[0].stats.wardsPlaced}</span></p>
            <div className="playerInfo__itemList"> 
                {<SummonerHistoryItemsList patch={props.patch} itemList={props.playerStats[0].stats}/>}
            </div>
        </div>
      );
}
 
export default SummonerHistorySinglePlayer;