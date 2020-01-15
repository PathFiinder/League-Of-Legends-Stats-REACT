import React from 'react';
import '../../../sass/SummonerHistoryItemsSingle.sass'

const SummonerHistoryItemsSingle = (props) => {
    return (  
        <img src={`https://ddragon.leagueoflegends.com/cdn/${props.patch}/img/item/${props.id}.png`} alt="Item img" className="itemsList__singleItem"/>
    );
}
 
export default SummonerHistoryItemsSingle;