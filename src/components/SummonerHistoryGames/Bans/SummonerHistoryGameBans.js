import React  from 'react';
import SummonerHistoryGameBansSingle from './SummonerHistoryGameBansSingle.js'
import '../../../sass/SummonerHistoryGameBans.sass'

const SummonerHistoryGameBans = (props) => {

    const singleBans = Object.values(props.bans).map(single => <SummonerHistoryGameBansSingle key={single.championId} id={single.championId} champNames={props.champNames} patch={props.patch}/>)
    return ( 
            <div className="historyGameSingle__item historyGameSingle__item--bans">
                <h3 className="historyGameSingle__title">Bans</h3>
                <div className="historyGameSingle__bansContainer">
                    {singleBans}
                </div>
            </div>
    );
    
}
 
export default SummonerHistoryGameBans;