import React, {Component} from 'react';
import '../sass/SummonerIcon.sass'

class SummonerIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rank: []
        }
    }
  
    componentDidMount(){
        fetch(`${this.props.cors}https://${this.props.region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${this.props.summoner.id}?api_key=${this.props.apiKey}`)
            .then(resp => resp.json())
            .then(data => {
                const soloRank = [];
                data.forEach(ele => {
                    if(ele.queueType === "RANKED_SOLO_5x5"){
                        soloRank.push({"tier": ele.tier, "rank": ele.rank, "points": ele.leaguePoints})
                    }
                })
                this.setState({rank: soloRank})
            })
    };

    render(){
        return ( 
            <div className="summonerData__item summonerIcon">
                <div className="summonerIcon__iconContainer">
                    <img src="" alt="Summoner icon"/>
                </div>
            </div>
        );
    }
}
 
export default SummonerIcon;