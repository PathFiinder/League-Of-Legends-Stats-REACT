import React, {Component} from 'react';
import SummonerHistoryGameBansSingle from './SummonerHistoryGameBansSingle.js'
import '../../../sass/SummonerHistoryGameBans.sass'

class SummonerHistoryGameBans extends Component {

    constructor(props){
        super(props);
        this.state= {
            gameId: ""
        }
    }

    render(){
        const singleBans = Object.values(this.props.bans).map(single => <SummonerHistoryGameBansSingle key={single.championId} id={single.championId} champNames={this.props.champNames} patch={this.props.patch}/>)
        return ( 
            <div className="historyGameSingle__item historyGameSingle__item--bans">
                <h3 className="historyGameSingle__title">Bans</h3>
                <div className="historyGameSingle__bansContainer">
                    {singleBans}
                </div>
            </div>
        );
    }
}
 
export default SummonerHistoryGameBans;