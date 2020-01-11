import React from 'react';
import '../sass/SummonerData.sass'
import SummonerIcon from './SummonerIcon/SummonerIcon.js'
import SummonerRankedStats from './SummonerRankedStats/SummonerRankedStats.js'
import SummonerMasteryPoints from './SummonerMasteryPoints/SummonerMasteryPoints.js'
import SummonerHistoryGames from './SummonerHistoryGames/SummonerHistoryGames.js'


const SummonerData = (props) => {
    return ( 
        <section className="summonerData">
           <SummonerIcon apiKey={props.apiKey} cors={props.cors} patch={props.patch} region={props.region} icons={props.icons} summoner={props.summData}/>
           <SummonerRankedStats apiKey={props.apiKey} cors={props.cors} patch={props.patch} region={props.region} summoner={props.summData}/>
            <SummonerMasteryPoints  apiKey={props.apiKey} cors={props.cors} patch={props.patch} region={props.region} summoner={props.summData} champNames={props.champNames}/>
            <SummonerHistoryGames apiKey={props.apiKey} cors={props.cors} patch={props.patch} region={props.region} icons={props.icons} summoner={props.summData} champNames={props.champNames}/>
            

        </section>
     );
}
 
export default SummonerData;