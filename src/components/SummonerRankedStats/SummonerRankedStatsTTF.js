import React,{Component} from 'react';

class SummonerRankedStatsTTF extends Component{
    constructor(props){
        super(props);
        this.state={
            summonerId: "",
            ttfData: []
        }
    }

    fetchRankedStats = () => {
        const ttfData = [];
        fetch(`${this.props.cors}https://${this.props.region}.api.riotgames.com/tft/league/v1/entries/by-summoner/${this.props.summonerId}?api_key=${this.props.apiKey}`)
        .then(resp => resp.json())
        .then(data => {
            if(data.length !== 0){
                ttfData.push({"tier": data[0].tier,"rank": data[0].rank, "points": data[0].leaguePoints,"wins": data[0].wins})
                this.setState({summonerId: this.props.summonerId, ttfData: ttfData})
            }
        })
    }

    render(){
        if(this.props.summonerId !== "" && this.state.summonerId !== this.props.summonerId) this.fetchRankedStats();
        return (  
            <>
            {this.state.ttfData.length !== 0 ?
                 <div className="summonerRankedStats__singleItem singleItem singleItem--last">
                 <img src={`./images/emblems/Emblem_${this.state.ttfData[0].tier}.png`} alt="Ranked emblem" className="singleItem__rankEmblem"/>
                 <div className="singleItem__container">
                     <p className="singleItem__queueType">Ranked TTF</p>
                     <h3 className="singleItem__tierRank">{this.state.ttfData[0].tier.charAt(0) + this.state.ttfData[0].tier.toLowerCase().slice(1) + ` ${this.state.ttfData[0].rank}`}</h3>
                     <p className="singleItem__points">{this.state.ttfData[0].points + " LP"}</p>
                     <p className="singleItem__win">{this.state.ttfData[0].wins} wins</p>
                 </div>
             </div>
            : ""}
            </>
        );
    }
}
 
export default SummonerRankedStatsTTF;