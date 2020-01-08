import React, { Component } from 'react';
import '../sass/SummonerRankedStats.sass'
import SummonerRankedStatsSingle from './SummonerRankedStatsSingle.js'

class SummonerRankedStats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            summonerId: "",
            rankedStats: []
        }
    }

    fetchRankedStats = () => {
        fetch(`${this.props.cors}https://${this.props.region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${this.props.summoner.id}?api_key=${this.props.apiKey}`)
            .then(resp => resp.json())
            .then(data => {
                const soloRank = [];
                data.forEach(ele => 
                    soloRank.push({"id": ele.leagueId,
                                   "queueType": ele.queueType, 
                                   "tier": ele.tier, 
                                   "rank": ele.rank, 
                                   "points:" : ele.leaguePoints,
                                   "wins": ele.wins,
                                   "losses": ele.losses})
                )
                this.setState({rankedStats: soloRank, summonerId: this.props.summoner.id})
            })      
    }

    render(){
        if(this.props.summonerId !== "" && this.state.summonerId !== this.props.summoner.id) this.fetchRankedStats();
        const singleRank =  this.state.rankedStats.map(single => <SummonerRankedStatsSingle key={single.id} rank={single}/>) 
    return (
        <React.Fragment>
            {this.state.rankedStats.length !== 0 ? 
                <div className="summonerData__item summonerRankedStats">
                {singleRank}
            </div>
            : ""
            }
        </React.Fragment>
    )
    }
}
 
export default SummonerRankedStats;