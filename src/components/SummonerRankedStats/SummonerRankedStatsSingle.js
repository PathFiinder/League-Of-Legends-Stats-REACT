import React from 'react';
import '../../sass/SummonerRankedStatsSingle.sass';

const SummonerRankedStatsSingle = (props) => {
    const {queueType, tier, rank, points, wins, losses} = props.rank

    const handleQueueType = (queue) => {
        if(queue === "RANKED_SOLO_5x5") return "Ranked Solo"
        else if (queue === "RANKED_FLEX_SR") return "Ranked Flex"
    }


    return ( 
        <div className="summonerRankedStats__singleItem singleItem">
            <img src={`/images/emblems/Emblem_${tier}.png`} alt="Ranked emblem" className="singleItem__rankEmblem"/>
            <div className="singleItem__container">
                <p className="singleItem__queueType">{handleQueueType(queueType)}</p>
                <h3 className="singleItem__tierRank">{tier.charAt(0) + tier.toLowerCase().slice(1) + ` ${rank}`}</h3>
                <p className="singleItem__points">{points + " LP"}</p>
                <p className="singleItem__score">{`${wins}W ${losses}L (${(wins/(wins + losses)).toFixed(2)*100})%`}</p>
            </div>
        </div>
     );
}
 
export default SummonerRankedStatsSingle;