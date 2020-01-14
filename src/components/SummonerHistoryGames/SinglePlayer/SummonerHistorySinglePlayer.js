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


    return (
        <div className="historyGameSingle__playerInfo playerInfo">
            <img src={`http://ddragon.leagueoflegends.com/cdn/${props.patch}/img/champion/${getChampionName()}.png`} alt="Champion img" className="playerInfo__champImg"/>
            <div className="playerInfo__summonerLane">
                <img src={`/images/lane/${getSummonerLane()}.png`} alt="Lane img" className="playerInfo__laneImg"/>
                <h3 className="playerInfo__lane">{getSummonerLane()}</h3>
            </div>
            <div className="playerInfo__spells">
                <img className="playerInfo__singleSpell" src={`./images/spells/${props.playerStats[0].spell1Id}.png`} alt="Spell img"/>
                <img className="playerInfo__singleSpell" src={`./images/spells/${props.playerStats[0].spell2Id}.png`} alt="Spell img"/>
            </div>
            <p className="playerInfo__stats">{`${props.playerStats[0].stats.kills} / ${props.playerStats[0].stats.deaths} / ${props.playerStats[0].stats.assists}`}</p>
            <div className="playerInfo__itemList">
                {<SummonerHistoryItemsList patch={props.patch} itemList={props.playerStats[0].stats}/>}
            </div>
        </div>
      );
}
 
export default SummonerHistorySinglePlayer;