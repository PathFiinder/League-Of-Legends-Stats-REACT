import React from 'react';
import '../../../sass/SummonerHistoryGameBansSingle.sass'

const SummonerHistoryGameBansSingle = (props) => {

    const champName= () => {
        let name = "";
        props.champNames.forEach(single => {
            if(single.key === props.id)
                name=single.name
        })
        return name
    }

    return ( 
        
        <img src={`http://ddragon.leagueoflegends.com/cdn/${props.patch}/img/champion/${champName()}.png`} alt="Champion img"className="historyGameSingle__champImg"/>
        
     );
}
 
export default SummonerHistoryGameBansSingle;