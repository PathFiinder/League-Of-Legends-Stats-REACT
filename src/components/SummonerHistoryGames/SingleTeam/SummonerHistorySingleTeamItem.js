import React from 'react';
import '../../../sass/SummonerHistorySingleTeamItem.sass'
import SummonerHistoryItemsList from '../Items/SummonerHistoryItemsList'

const SummonerHistorySingleTeamItem = (props) => {

    const champName= () => {
        let name = "";
        props.champNames.forEach(single => {
            if(single.key === props.playerData.championId)
                name=single.name
        })
        return name
    }

    return (  
        <div className="teamData__singleItem">
            <img src={`http://ddragon.leagueoflegends.com/cdn/${props.patch}/img/champion/${champName()}.png`} alt="Champion img" className="teamData__champImg"/> 
            <p className="teamData__champLvl">{props.playerData.stats.champLevel}</p>
            <div className="teamData__spells">
                <img className="teamData__singleSpell" src={`./images/spells/${props.playerData.spell1Id}.png`} alt="Spell img"/>
                <img className="teamData__singleSpell" src={`./images/spells/${props.playerData.spell2Id}.png`} alt="Spell img"/>
            </div>
            <h3 className="teamData__playerNick">{props.playerData.nick}</h3>
            <p className="teamData__playerStats">{`${props.playerData.stats.kills} / ${props.playerData.stats.deaths} / ${props.playerData.stats.assists}`}</p>
            <div className="teamData__itemList">
                <SummonerHistoryItemsList patch={props.patch} itemList={props.playerData.stats}/>
            </div>
        </div>
    );
}
 
export default SummonerHistorySingleTeamItem;