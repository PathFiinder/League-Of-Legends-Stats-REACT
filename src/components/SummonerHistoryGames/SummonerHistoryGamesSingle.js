import React, {Component} from 'react';
import SummonerHistoryGameBans from './Bans/SummonerHistoryGameBans.js'
import '../../sass/SummonerHistoryGamesSingle.sass' 

class SummonerHistoryGamesSingle extends Component{
    constructor(props){
        super(props);
        this.state={
            matchId: "",
            gameData: []
        }
    }


    fetchGameData = () => {
        fetch(`${this.props.cors}https://${this.props.region}.api.riotgames.com/lol/match/v4/matches/${this.props.matchId}?api_key=${this.props.apiKey}`)
            .then(response => response.json())
            .then(data => {
                const gameData = [];
                Object.entries(data).forEach(([key,value]) => gameData.push({"name": key,"value": value}))
                this.setState({matchId: this.props.matchId, gameData: gameData})
            })
        
    }

    render(){
        if(this.props.matchId !== "" && this.state.matchId !== this.props.matchId) this.fetchGameData();

        let teamId1 = "";
        let teamId2 = "";
        let teamBans1 = [];
        let teamBans2 = [];
        if(this.state.gameData.length !== 0 ){
            teamId1 = this.state.gameData[10].value[0].teamId;
            teamId2 = this.state.gameData[10].value[1].teamId;
            teamBans1 = this.state.gameData[10].value[0].bans;
            teamBans2 = this.state.gameData[10].value[1].bans
        }

        return (  
            <React.Fragment>
                {this.state.gameData.length !== 0 ? 
                <>
                <h2>typ</h2>
                    <div className={this.props.index !== 9 ? 'summonerHistoryGames__single historyGameSingle' : 'summonerHistoryGames__single historyGameSingle historyGameSingle--last'}>
                        {teamBans1.length !== 0 ? <SummonerHistoryGameBans key={teamId1} champNames={this.props.champNames} bans={teamBans1} patch={this.props.patch} /> : ""}
                        <div className="historyGameSingle__item">A</div>
                        <div className="historyGameSingle__item">B</div>
                        {teamBans2.length !== 0 ?<SummonerHistoryGameBans key={teamId2} champNames={this.props.champNames} bans={teamBans2} patch={this.props.patch} /> : ""}
                    </div>
                </>
                : ""}
            </React.Fragment>
        );
    }
    
}
 
export default SummonerHistoryGamesSingle;