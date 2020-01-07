import React from 'react';
import '../sass/SummonerData.sass'
import SummonerIcon from './SummonerIcon.js'
import SummonerRankedStats from './SummonerRankedStats.js'
import SummonerMasteryPoints from './SummonerMasteryPoints.js'
import SummonerHistoryGames from './SummonerHistoryGames.js'


const SummonerData = (props) => {

    return ( 
        <section className="summonerData">
            <SummonerIcon apiKey={props.apiKey} cors={props.cors} region={props.region} icons={props.icons} summoner={props.summData}/>
            { /*<SummonerRankedStats/>
            <SummonerMasteryPoints />
            <SummonerHistoryGames/> */}
        </section>
     );
}
 
export default SummonerData;