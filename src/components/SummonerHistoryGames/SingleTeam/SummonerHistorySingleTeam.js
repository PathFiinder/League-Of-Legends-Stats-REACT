import React from 'react';
import SummonerHistorySingleTeamItem from './SummonerHistorySingleTeamItem.js'

const SummonerHistorySingleTeam = (props) => {

    const getSinglePlayerStats = () => {
        const player = []
        props.teamData.forEach((ele,index) => {
            if(index <= 4){
                player.push({"championId": ele.championId, "participantId": ele.participantId, "nick": props.teamData[5][index].nickname,
                             "spell1Id": ele.spell1Id, "spell2Id": ele.spell2Id, "teamId": ele.teamId, "stats": ele.stats})
            }
        })
        return player;
    }
 
    const playerData = getSinglePlayerStats();
    const singlePlayer = playerData.map(ele => <SummonerHistorySingleTeamItem key={ele.championId} patch={props.patch} playerData={ele} champNames={props.champNames}/>)

    return ( 
        <>
            {singlePlayer}
        </>
     );
}
 
export default SummonerHistorySingleTeam;