import React from 'react';
import '../sass/SummonerData.sass'
import SummonerIcon from './SummonerIcon.js'
import SummonerRankedStats from './SummonerRankedStats.js'
//import SummonerMasteryPoints from './SummonerMasteryPoints.js'
//import SummonerHistoryGames from './SummonerHistoryGames.js'


const SummonerData = (props) => {
    console.log(props.summData)
    return ( 
        <section className="summonerData">
           <SummonerIcon apiKey={props.apiKey} cors={props.cors} patch={props.patch} region={props.region} icons={props.icons} summoner={props.summData}/>
           <SummonerRankedStats apiKey={props.apiKey} cors={props.cors} patch={props.patch} region={props.region} summoner={props.summData}/>
        { /*<SummonerMasteryPoints />
            <SummonerHistoryGames/> */}
        </section>
     );
}
 
export default SummonerData;