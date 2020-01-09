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
      fetch(`http://ddragon.leagueoflegends.com/cdn/${this.props.patch}/data/en_US/champion.json`)
        .then(resp => resp.json())
        .then(data => {
            let champName = "";
            Object.values(data.data).forEach(ele => {
                if(ele.key === String(this.props.champId)){
                    champName = ele.id
                }   
            })
            
            this.setState({nickName: champName})
        })
    }
        
    

    render(){
        return ( 
            <React.Fragment>
               { this.state.nickName !== "" ?
                <div className="summonerMasteryPoints__single">
                    <img src={`http://ddragon.leagueoflegends.com/cdn/${this.props.patch}/img/champion/${this.state.nickName}.png`} alt="Mastery level img" className="summonerMasteryPoints__image"/>
                    <img src={`/images/mastery/lvl${this.props.champLevel}.png`} alt="Mastery lvl img" className="summonerMasteryPoints__masteryLvl"/>
                    <p className="summonerMasteryPoints__champScore"><span className="summonerMasteryPoints__champScore--bold">{this.props.champPoints.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</span> pts</p>
                </div>
                : ""}
            </React.Fragment>
        );
    }
}
 
export default SummonerMasteryPoints;