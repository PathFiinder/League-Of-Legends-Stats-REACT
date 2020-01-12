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


    getTeamStats = () => {
        const teamOne = [];
        const teamTwo = [];
        this.state.gameData[11].value.forEach(single => {
            if(single.teamId === 100) {
                teamOne.push({"championId": single.championId,
                              "participantId": single.participantId,
                              "spell1Id": single.spell1Id,
                              "spell2Id": single.spell2Id,
                              "stats": single.stats,
                              "teamId": single.teamId,
                              "lane": single.timeline.lane,
                              "role": single.timeline.role})
            } else if (single.teamId === 200) {
                teamTwo.push({"championId": single.championId,
                              "participantId": single.participantId,
                              "spell1Id": single.spell1Id,
                              "spell2Id": single.spell2Id,
                              "stats": single.stats,
                              "teamId": single.teamId,
                              "lane": single.timeline.lane,
                              "role": single.timeline.role})
            }
        })
        const teamOneParticipants = [];
        const teamTwoParticipants = [];

        this.state.gameData[12].value.forEach((ele,index) => {
            
            if(index+1 <= 5 ){
                teamOne.forEach(single => {
                    
                    if(single.participantId === ele.participantId){
                        teamOneParticipants.push({"nickname": ele.player.summonerName, "profileIcon": ele.player.profileIcon})
                        
                    }
                })
            } else {
                    teamTwo.forEach(single => {
                        if(single.participantId === ele.participantId){
                            teamTwoParticipants.push({"nickname": ele.player.summonerName, "profileIcon": ele.player.profileIcon})
                        }
                    })
            }
        })
        teamOne.push(teamOneParticipants) //zrobic tak jutro!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
        console.log(teamOne)
        console.log(teamTwo)
        console.log(teamOneParticipants)
        console.log(teamTwoParticipants)
    }

    getQueueName = (queueId) => {
        if(queueId === 400) return  "5v5 Draft Pick"; 
        else if(queueId === 420) return  "5v5 Ranked Solo/Duo";
        else if(queueId === 430) return "5v5 Blind Pick"; 
        else if(queueId === 440) return "5v5 Ranked Flex"; 
        else if(queueId === 450) return "ARAM"; 
      
    }    

    render(){
        if(this.props.matchId !== "" && this.state.matchId !== this.props.matchId) this.fetchGameData();
        if(this.state.gameData.length !== 0 ) this.getTeamStats();
        let queueName = "";
        let teamId1 = "";
        let teamId2 = "";
        let teamBans1 = [];
        let teamBans2 = [];
        if(this.state.gameData.length !== 0 ){
            queueName = this.state.gameData[4].value;
            teamId1 = this.state.gameData[10].value[0].teamId;
            teamId2 = this.state.gameData[10].value[1].teamId;
            teamBans1 = this.state.gameData[10].value[0].bans;
            teamBans2 = this.state.gameData[10].value[1].bans
        }


        return (  
            <React.Fragment>
                {this.state.gameData.length !== 0 ? 
                    <div className={this.props.index !== 9 ? 'summonerHistoryGames__single historyGameSingle' : 'summonerHistoryGames__single historyGameSingle historyGameSingle--last'}>
                        <h3 className="historyGameSingle__queueType">{this.getQueueName(queueName)}</h3>
                        <div className="historyGameSingle__container">
                            {teamBans1.length !== 0 ? <SummonerHistoryGameBans key={teamId1} champNames={this.props.champNames} bans={teamBans1} patch={this.props.patch} /> : ""}
                            <div className={queueName !== 450 ? `historyGameSingle__item` : `historyGameSingle__item--aram`}>A</div>
                            <div className={queueName !== 450 ? `historyGameSingle__item` : `historyGameSingle__item--aram`}>B</div>
                            {teamBans2.length !== 0 ?<SummonerHistoryGameBans key={teamId2} champNames={this.props.champNames} bans={teamBans2} patch={this.props.patch} /> : ""}
                        </div>
                    </div>
                : ""}
            </React.Fragment>
        );
    }
    
}
 
export default SummonerHistoryGamesSingle;