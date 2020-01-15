import React, {Component} from 'react';
import '../../sass/SummonerIcon.sass'

class SummonerIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            summonerId: "",
            rank: []
        }
    }
  
    fetchSummonerData = () => {
            fetch(`${this.props.cors}https://${this.props.region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${this.props.summoner.id}?api_key=${this.props.apiKey}`)
            .then(resp => resp.json())
            .then(data => {
                if(data.length !== 0){
                    const soloRank = [];
                    data.forEach(ele => {
                        if(ele.queueType === "RANKED_SOLO_5x5"){
                            soloRank.push({"tier": ele.tier, "rank": ele.rank, "points": ele.leaguePoints})
                        } else {
                            soloRank.push({"tier": "UNRANKED", "rank": "", "points": ""})
                        }
                    })
                    this.setState({rank: soloRank, summonerId: this.props.summoner.id})
                } else {
                    const soloRank = [{"tier": "UNRANKED", "rank": "", "points": ""}]
                    this.setState({rank: soloRank, summonerId: this.props.summoner.id})
                }


            })      
        }

    componentDidMount(){
        this.fetchSummonerData();
    }
    
    render(){
        if(this.state.summonerId !== "" && this.state.summonerId !== this.props.summoner.id){
            this.fetchSummonerData();
        }

        return ( 
            <React.Fragment>
            {this.state.rank.length !== 0 ? 
            <div className="summonerData__item summonerIcon">
                <div className="summonerIcon__iconContainer">
                    <img src={`https://ddragon.leagueoflegends.com/cdn/${this.props.patch}/img/profileicon/${this.props.summoner.profileIconId}.png`} 
                    alt="Summoner icon"
                    className="summonerIcon__iconImage"/>
                    {this.state.rank[0].tier !== "UNRANKED" ? 
                    <img src={this.state.rank[0].tier.toLowerCase() === 'grandmaster' ? './images/rank_borders/master.png' : `./images/rank_borders/${this.state.rank[0].tier.toLowerCase()}.png`} 
                    alt="Rank border"
                    className="summonerIcon__borderImage"/> : ""}
                    <p className="summonerIcon__level">{this.props.summoner.summonerLevel}</p>
                </div>
                <div className="summonerIcon__statsContainer">
                    <h3 className="summonerIcon__nickname">{this.props.summoner.name}</h3>
                    <img src={`./images/emblems/Emblem_${this.state.rank[0].tier}.png`} alt="Summoner rank" className="summonerIcon__rankImage"/>
                    <p className="summonerIcon__stats">
                        <span className="summonerLevel__stats--bold">{this.state.rank[0].tier.toLowerCase().charAt(0).toUpperCase() + this.state.rank[0].tier.toLowerCase().slice(1) + "  "}</span> 
                        <span className="summonerLevel__stats--bold">{this.state.rank[0].rank + " | "}</span>
                        {this.state.rank[0].points + " LP"}
                    </p>
                </div>
            </div>
            : ""}
            </React.Fragment>
        );
    }
}
 
export default SummonerIcon;