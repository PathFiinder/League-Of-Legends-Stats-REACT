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
        //Waiting for APP api Key

        // fetch(`${this.props.cors}https://${this.props.region}.api.riotgames.com/tft/summoner/v1/summoners/by-name/${this.props.summonerName}?api_key=${this.props.apiKey}`)
        // .then(resp0 => resp0.json())
        // .then(data0 => {
        //     console.log(data0)
        //     if(data0.status.status_code !== 403) fetch(`${this.props.cors}https://${this.props.region}.api.riotgames.com/tft/league/v1/entries/by-summoner/${data0.id}?api_key=${this.props.apiKey}`)
        //         return;
        //     }
        // )
        // .catch(err => console.log(err))
        // .then(resp => resp !== undefined ? resp.json() : [])
        // .then(data => {
        //
        //     if(data.length !== 0){
        //         ttfData.push({"tier": data[0].tier,"rank": data[0].rank, "points": data[0].leaguePoints,"wins": data[0].wins})
        //         this.setState({summonerId: this.props.summonerId, ttfData: ttfData})
        //     } else if (data.length === 0){
        //         console.log('here')
        //         ttfData.push({"tier": "UNRANKED","rank": "", "points": 0,"wins": 0})
        //         this.setState({summonerId: this.props.summonerId, ttfData: ttfData})
        //     }
        // })
       fetch('').then(data =>  {
           ttfData.push({"tier": "UNRANKED","rank": "", "points": 0,"wins": 0})
           this.setState({summonerId: this.props.summonerId, ttfData: ttfData})
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