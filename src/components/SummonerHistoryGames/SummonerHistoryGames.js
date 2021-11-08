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
        fetch(`${this.props.cors}https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${this.props.summoner.puuid}/ids?start=0&count=20&api_key=${this.props.apiKey}`)
            .then(resp => resp.json())
            .then(data => {
                if(data !== undefined){
                    const history = [];
                    data.forEach((singleGame,index) => {
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
        const singleGame = this.state.gameHistory.map((single,index) => <SummonerHistoryGamesSingle key={single} matchId={single} patch={this.props.patch} cors={this.props.cors} region={this.props.region} apiKey={this.props.apiKey} champNames={this.props.champNames} nick={this.props.summoner.name} icon={this.props.summoner.profileIconId}/>)
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