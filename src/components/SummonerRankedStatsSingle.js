import React from 'react';

const SummonerRankedStatsSingle = (props) => {
    return ( 
        <div className="summonerRankedStats__singleItem">
            <h3>{props.rank.tier}</h3>
        </div>
     );
}
 
export default SummonerRankedStatsSingle;