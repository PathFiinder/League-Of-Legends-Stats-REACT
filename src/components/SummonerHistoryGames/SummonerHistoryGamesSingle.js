import React, {Component} from 'react';


import '../../sass/SummonerHistoryGamesSingle.sass' 

class SummonerHistoryGamesSingle extends Component{
    constructor(props){
        super(props);
        this.state={
            matchId: "",
            gameData: [],
            teamOneData: [],
            teamTwoData: [],
            playerStats: [],
            teamOneStats: [],
            teamTwoStats: [],
            win: ""
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
                return gameData;
            })
            .then(gameData => {
                let summonerId = ""
                let teamId = ""
                const playerStats = [];
                const teamOneStats = [];
                const teamTwoStats = [];
                let win = "";
                gameData[12].value.forEach(ele => {
                    if(ele.player.summonerName === this.props.nick) {
                        summonerId = ele.participantId
                    }
                })
                gameData[11].value.forEach(single => {
                    if(single.participantId === summonerId) {
                        teamId = single.teamId
                        playerStats.push(single)
                    }
                })
                gameData[10].value.forEach(el => {
                    if(teamId === el.teamId) win = el.win;
                    if(el.teamId === 100) teamOneStats.push(el)
                    else if (el.teamId === 200) teamTwoStats.push(el)
                })
                
                this.setState({playerStats: playerStats, teamOneStats: teamOneStats, teamTwoStats: teamTwoStats,win: win})

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
        if (hours !== 0) {
            return pad(hours, 2) + ' hours ' + pad(minutes, 2) + ' minutes ';
        } else {
            return pad(minutes, 2) + ' minutes ';
        }

    }

    getMainSummonerData = () => {
        let summonerId = ""
        let teamId = ""
        const playerStats = [];
        const teamOneStats = [];
        const teamTwoStats = [];
        let win = "";
        if(this.state.gameData.length !== 0) {
            this.state.gameData[12].value.forEach(ele => {
                if(ele.player.summonerName === this.props.nick) {
                    summonerId = ele.participantId
                }
            })
            this.state.gameData[11].value.forEach(single => {
                if(single.participantId === summonerId) {
                    teamId = single.teamId
                    playerStats.push(single)
                }
            })
            this.state.gameData[10].value.forEach(el => {
                if(teamId === el.teamId) win = el.win;
                if(el.teamId === 100) teamOneStats.push(el)
                else if (el.teamId === 200) teamTwoStats.push(el)
            })
        }
        return {win,playerStats,teamOneStats,teamTwoStats}
    }

    getChampionName = () => {
        let champName = ""
        this.props.champNames.forEach(single => {
            if(single.key === this.props.champion) champName=single.name
        })
        return champName
    }

    getSummonerLane = () => {
        if(this.state.playerStats.length !== 0 ){
            const lane = this.state.playerStats[0].timeline.lane;
            if(lane === "BOTTOM")
                return this.state.playerStats[0].timeline.role.slice(4,this.state.playerStats[0].timeline.role.length)
            else 
                return lane

        }
    }
    render(){
        if(this.props.matchId !== "" && this.state.matchId !== this.props.matchId) this.fetchGameData();
        
        return (  
            <React.Fragment>
                {this.state.gameData.length !== 0 ? 
                    <div className={`summonerHistoryGames__single historyGameSingle ${this.state.win === "Win" ? "historyGameSingle--win" : "historyGameSingle--fail"}`}>
                        <h3 className="historyGameSingle__queue">{`${this.getQueueName(this.state.gameData[4].value)} `}&#8901;<span className="historyGameSingle__queue--duration">{` ${this.getGameDuration(this.state.gameData[3].value)}`}</span></h3>
                        <div className="historyGameSingle__playerInfo playerInfo">
                            <img src={`http://ddragon.leagueoflegends.com/cdn/${this.props.patch}/img/champion/${this.getChampionName()}.png`} alt="Champion img" className="playerInfo__champImg"/>
                            <div className="playerInfo__summonerLane">
                                <img src="" alt="" className="playerInfo__laneImg"/>
                                <h3 className="playerInfo__lane">{this.getSummonerLane()}</h3>
                            </div>
                        </div>
                    </div>
                : ""}
            </React.Fragment>
        );
    }
    
}
 
export default SummonerHistoryGamesSingle;