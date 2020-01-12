import React, { Component } from 'react';
import SummonerHistoryGamesSingle from './SummonerHistoryGamesSingle.js'
import '../../sass/SummonerHistoryGames.sass' 


class SummonerHistoryGames extends Component {
    constructor(props) {
        super(props);
        this.state = {
            summonerId: "",
            gameHistory: []
        }
    }

    fetchHistoryGamesData = () => {
        fetch(`${this.props.cors}https://${this.props.region}.api.riotgames.com/lol/match/v4/matchlists/by-account/${this.props.summoner.accountId}?api_key=${this.props.apiKey}`)
            .then(resp => resp.json())
            .then(data => {
                //console.log(data)
                if(data.matches !== undefined){
                const history = [];
                data.matches.forEach((singleGame,index) => {
                    if(index <= 9) history.push(singleGame)
                })
                this.setState({summonerId: this.props.summoner.id, gameHistory: history})
                } else {
                    this.setState({summonerId: this.props.summoner.id, gameHistory: []})
                }
            })
    }

    render(){
        if(this.props.summoner.id !== "" && this.state.summonerId !== this.props.summoner.id) this.fetchHistoryGamesData();
        const singleGame = this.state.gameHistory.map((single,index) => <SummonerHistoryGamesSingle key={single.gameId} matchId={single.gameId} champion={single.champion} queue={single.queue} timestamp={single.timestamp} patch={this.props.patch} cors={this.props.cors} region={this.props.region} apiKey={this.props.apiKey} champNames={this.props.champNames} index={index}/>)
        return(
            <React.Fragment>
                {this.state.gameHistory.length !== 0 ? 
                <div className="summonerData__item summonerHistoryGames">
                    {singleGame}
                </div>
                : ""}
            </React.Fragment>
        )
    }
}
 
export default SummonerHistoryGames;