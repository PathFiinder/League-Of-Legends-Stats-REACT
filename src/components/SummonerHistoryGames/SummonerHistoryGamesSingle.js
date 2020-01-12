import React, {Component} from 'react';


import '../../sass/SummonerHistoryGamesSingle.sass' 

class SummonerHistoryGamesSingle extends Component{
    constructor(props){
        super(props);
        this.state={
            matchId: "",
            gameData: [],
            teamOneData: [],
            teamTwoData: []
        }
    }


    fetchGameData = () => {
        fetch(`${this.props.cors}https://${this.props.region}.api.riotgames.com/lol/match/v4/matches/${this.props.matchId}?api_key=${this.props.apiKey}`)
            .then(response => response.json())
            .then(data => {
                const gameData = [];
                Object.entries(data).forEach(([key,value]) => gameData.push({"name": key,"value": value}))
                this.setState({matchId: this.props.matchId, gameData: gameData})
                return gameData;
            })
            .then(gameData => {
                const teamOne = [];
                const teamTwo = [];
                gameData[11].value.forEach(single => {
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

                gameData[12].value.forEach((ele,index) => {
                    
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
                teamOne.push(teamOneParticipants) 
                teamTwo.push(teamTwoParticipants);

                this.setState({teamOneData: teamOne,teamTwoData: teamTwo})
            })
        
    }


    getQueueName = (queueId) => {
        if(queueId === 400) return  "Draft Pick"; 
        else if(queueId === 420) return  "Ranked Solo/Duo";
        else if(queueId === 430) return "Blind Pick"; 
        else if(queueId === 440) return "Ranked Flex"; 
        else if(queueId === 450) return "ARAM"; 
      
    }    

     getGameDuration = (nrOfSecond) => {
        const pad = function (num, size) {
            return ('000' + num).slice(size * -1);
        };
        const time = parseFloat(nrOfSecond).toFixed(3);
        const hours = Math.floor(time / 60 / 60);
        const minutes = Math.floor(time / 60) % 60;
        const seconds = Math.floor(time - minutes * 60);
        if (hours !== 0) {
            return pad(hours, 2) + 'h ' + pad(minutes, 2) + 'm ' + pad(seconds, 2) + 's';
        } else {
            return pad(minutes, 2) + 'm ' + pad(seconds, 2) + 's';
        }

    }

    render(){
        if(this.props.matchId !== "" && this.state.matchId !== this.props.matchId) this.fetchGameData();

        return (  
            <React.Fragment>
                {this.state.gameData.length !== 0 ? 
                    <div className="summonerHistoryGames__single historyGameSingle">
                        <div className="historyGameSingle__gameInfo"> 
                            <h3 className="historyGameSingle__queueType">{this.getQueueName(this.state.gameData[4].value)}</h3>
                            <p className="historyGameSingle__gameDuration">{this.getGameDuration(this.state.gameData[3].value)}</p>
                        </div>
                        <div className="historyGameSingle__playerInfo playerInfo">
                        {//profileIcon + nick itp
                        }
                        </div>
                    </div>
                : ""}
            </React.Fragment>
        );
    }
    
}
 
export default SummonerHistoryGamesSingle;