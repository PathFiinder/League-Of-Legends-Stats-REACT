import React from 'react';
import '../../../sass/SummonerHistoryGamesTeams.sass'

const SummonerHistoryGamesTeams = (props) => {

    return ( 
        <>
            <h3 className="teams__teamName">{`Team ${props.teamData.teamId === 100 ? "One" : "Two"}`}</h3>
            <p className="teams__gameStatus">{props.teamData.win === "Win" ? "Win" : "Lose"}</p>
            <div className="teams__objectiveContainer objectiveContainer">
                <div className="objectiveContainer__item">
                    <img src="./images/specialObj/inhibitors.png" alt="Inhib img" className="objectiveContainer__image"/>
                    <span className="objectiveContainer__number">{props.teamData.inhibitorKills}</span>
                </div>
                <div className="objectiveContainer__item">
                    <img src="./images/specialObj/towers.png" alt="Towers img" className="objectiveContainer__image"/>
                    <span className="objectiveContainer__number">{props.teamData.towerKills}</span>
                </div>
                <div className="objectiveContainer__item">
                    <img src="./images/specialObj/dragons.png" alt="Dragons img" className="objectiveContainer__image"/>
                    <span className="objectiveContainer__number">{props.teamData.dragonKills}</span>
                </div>
                <div className="objectiveContainer__item">
                    <img src="./images/specialObj/baron.png" alt="Baron img" className="objectiveContainer__image"/>
                    <span className="objectiveContainer__number">{props.teamData.baronKills}</span>
                </div>
                <div className="objectiveContainer__item">
                    <img src="./images/specialObj/herald.png" alt="Herald img" className="objectiveContainer__image"/>
                    <span className="objectiveContainer__number">{props.teamData.riftHeraldKills}</span>
                </div>
            </div>
        </>
     );
}
 
export default SummonerHistoryGamesTeams;