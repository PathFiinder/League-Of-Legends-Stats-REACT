import React, {Component} from 'react';
import SummonerMasteryPointsSingle from './SumonerMasteryPointsSingle.js'
import '../../sass/SummonerMasteryPoints.sass'

class SummonerMasteryPoints extends Component {
    constructor(props) {
        super(props);
        this.state= {
            summonerId: "",
            masteryData: []
        }
    }

    fetchMasteryData = () => {
        fetch(`${this.props.cors}https://${this.props.region}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${this.props.summoner.id}?api_key=${this.props.apiKey}`)
        .then(resp => resp.json())
        .then(data => {
            const masteryPoints = [];
            for(let i=0;i<4;i++){
                masteryPoints.push({"champLevel": data[i].championLevel,
                                    "champPoints": data[i].championPoints,
                                    "champId": data[i].championId})
            }
            this.setState({summonerId: this.props.summoner.id, masteryData: masteryPoints})

        }) 
    }

    render(){
        if(this.props.summonerId !== "" && this.state.summonerId !== this.props.summoner.id) this.fetchMasteryData();
        const champMastery = this.state.masteryData.map(single => <SummonerMasteryPointsSingle key={single.champId} champLevel={single.champLevel} champPoints={single.champPoints} champId={single.champId} patch={this.props.patch}/>)
        
        return (
            <React.Fragment>
            {this.state.masteryData.length !== 0 ? 
                <div className="summonerData__item summonerMasteryPoints">
                    {champMastery}
                </div>
            : ""
            }
        </React.Fragment>
        )
    }
}
 
export default SummonerMasteryPoints;