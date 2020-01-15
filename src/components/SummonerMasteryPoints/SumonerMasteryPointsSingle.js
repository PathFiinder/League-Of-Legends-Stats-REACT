import React,{Component} from 'react';
import '../../sass/SummonerMasteryPointsSingle.sass'

class SummonerMasteryPoints extends Component {
    constructor(props) {
        super(props);
        this.state= {
            nickName: ""
        }
    }

    componentDidMount() {
        let champName = ""
        this.props.champNames.forEach(single => {
            if(single.key === this.props.champId) champName=single.name
        })
            
    this.setState({nickName: champName})
        
    }
        
    

    render(){
        return ( 
            <React.Fragment>
               { this.state.nickName !== "" ?
                <div className="summonerMasteryPoints__single">
                    <img src={`https://ddragon.leagueoflegends.com/cdn/${this.props.patch}/img/champion/${this.state.nickName}.png`} alt="Mastery level img" className="summonerMasteryPoints__image"/>
                    <img src={`./images/mastery/lvl${this.props.champLevel}.png`} alt="Mastery lvl img" className="summonerMasteryPoints__masteryLvl"/>
                    <p className="summonerMasteryPoints__champScore"><span className="summonerMasteryPoints__champScore--bold">{this.props.champPoints.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</span> pts</p>
                </div>
                : ""}
            </React.Fragment>
        );
    }
}
 
export default SummonerMasteryPoints;