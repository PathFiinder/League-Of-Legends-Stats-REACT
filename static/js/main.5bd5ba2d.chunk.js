(this["webpackJsonpriot-api2"]=this["webpackJsonpriot-api2"]||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports=t(28)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(7),m=t.n(r),c=t(1),i=t(2),o=t(4),l=t(3),p=t(5),u=(t(14),t(15),t(16),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(l.a)(a).call(this,e))).fetchSummonerData=function(){fetch("".concat(t.props.cors,"https://").concat(t.props.region,".api.riotgames.com/lol/league/v4/entries/by-summoner/").concat(t.props.summoner.id,"?api_key=").concat(t.props.apiKey)).then((function(e){return e.json()})).then((function(e){if(0!==e.length){var a=[];e.forEach((function(e){"RANKED_SOLO_5x5"===e.queueType?a.push({tier:e.tier,rank:e.rank,points:e.leaguePoints}):a.push({tier:"UNRANKED",rank:"",points:""})})),t.setState({rank:a,summonerId:t.props.summoner.id})}else{t.setState({rank:[{tier:"UNRANKED",rank:"",points:""}],summonerId:t.props.summoner.id})}}))},t.state={summonerId:"",rank:[]},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.fetchSummonerData()}},{key:"render",value:function(){return""!==this.state.summonerId&&this.state.summonerId!==this.props.summoner.id&&this.fetchSummonerData(),s.a.createElement(s.a.Fragment,null,0!==this.state.rank.length?s.a.createElement("div",{className:"summonerData__item summonerIcon"},s.a.createElement("div",{className:"summonerIcon__iconContainer"},s.a.createElement("img",{src:"http://ddragon.leagueoflegends.com/cdn/".concat(this.props.patch,"/img/profileicon/").concat(this.props.summoner.profileIconId,".png"),alt:"Summoner icon",className:"summonerIcon__iconImage"}),"UNRANKED"!==this.state.rank[0].tier?s.a.createElement("img",{src:"grandmaster"===this.state.rank[0].tier.toLowerCase()?"/images/rank_borders/master.png":"/images/rank_borders/".concat(this.state.rank[0].tier.toLowerCase(),".png"),alt:"Rank border",className:"summonerIcon__borderImage"}):"",s.a.createElement("p",{className:"summonerIcon__level"},this.props.summoner.summonerLevel)),s.a.createElement("div",{className:"summonerIcon__statsContainer"},s.a.createElement("h3",{className:"summonerIcon__nickname"},this.props.summoner.name),s.a.createElement("img",{src:"/images/emblems/Emblem_".concat(this.state.rank[0].tier,".png"),alt:"Summoner rank",className:"summonerIcon__rankImage"}),s.a.createElement("p",{className:"summonerIcon__stats"},s.a.createElement("span",{className:"summonerLevel__stats--bold"},this.state.rank[0].tier.toLowerCase().charAt(0).toUpperCase()+this.state.rank[0].tier.toLowerCase().slice(1)+"  "),s.a.createElement("span",{className:"summonerLevel__stats--bold"},this.state.rank[0].rank+" | "),this.state.rank[0].points+" LP"))):"")}}]),a}(n.Component)),h=(t(17),t(18),function(e){var a,t=e.rank,n=t.queueType,r=t.tier,m=t.rank,c=t.points,i=t.wins,o=t.losses;return s.a.createElement("div",{className:"summonerRankedStats__singleItem singleItem"},s.a.createElement("img",{src:"/images/emblems/Emblem_".concat(r,".png"),alt:"Ranked emblem",className:"singleItem__rankEmblem"}),s.a.createElement("div",{className:"singleItem__container"},s.a.createElement("p",{className:"singleItem__queueType"},"RANKED_SOLO_5x5"===(a=n)?"Ranked Solo":"RANKED_FLEX_SR"===a?"Ranked Flex":void 0),s.a.createElement("h3",{className:"singleItem__tierRank"},r.charAt(0)+r.toLowerCase().slice(1)+" ".concat(m)),s.a.createElement("p",{className:"singleItem__points"},c+" LP"),s.a.createElement("p",{className:"singleItem__score"},"".concat(i,"W ").concat(o,"L (").concat(100*(i/(i+o)).toFixed(2),")%"))))}),d=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(l.a)(a).call(this,e))).fetchRankedStats=function(){var e=[];fetch("".concat(t.props.cors,"https://").concat(t.props.region,".api.riotgames.com/tft/league/v1/entries/by-summoner/").concat(t.props.summonerId,"?api_key=").concat(t.props.apiKey)).then((function(e){return e.json()})).then((function(a){0!==a.length&&(e.push({tier:a[0].tier,rank:a[0].rank,points:a[0].leaguePoints,wins:a[0].wins}),t.setState({summonerId:t.props.summonerId,ttfData:e}))}))},t.state={summonerId:"",ttfData:[]},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return""!==this.props.summonerId&&this.state.summonerId!==this.props.summonerId&&this.fetchRankedStats(),s.a.createElement(s.a.Fragment,null,0!==this.state.ttfData.length?s.a.createElement("div",{className:"summonerRankedStats__singleItem singleItem"},s.a.createElement("img",{src:"/images/emblems/Emblem_".concat(this.state.ttfData[0].tier,".png"),alt:"Ranked emblem",className:"singleItem__rankEmblem"}),s.a.createElement("div",{className:"singleItem__container"},s.a.createElement("p",{className:"singleItem__queueType"},"Ranked TTF"),s.a.createElement("h3",{className:"singleItem__tierRank"},this.state.ttfData[0].tier.charAt(0)+this.state.ttfData[0].tier.toLowerCase().slice(1)+" ".concat(this.state.ttfData[0].rank)),s.a.createElement("p",{className:"singleItem__points"},this.state.ttfData[0].points+" LP"),s.a.createElement("p",{className:"singleItem__win"},this.state.ttfData[0].wins," wins"))):"")}}]),a}(n.Component),g=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(l.a)(a).call(this,e))).fetchRankedStats=function(){fetch("".concat(t.props.cors,"https://").concat(t.props.region,".api.riotgames.com/lol/league/v4/entries/by-summoner/").concat(t.props.summoner.id,"?api_key=").concat(t.props.apiKey)).then((function(e){return e.json()})).then((function(e){var a=[];e.forEach((function(e){return a.push({id:e.leagueId,queueType:e.queueType,tier:e.tier,rank:e.rank,points:e.leaguePoints,wins:e.wins,losses:e.losses})})),t.setState({rankedStats:a,summonerId:t.props.summoner.id})}))},t.state={summonerId:"",rankedStats:[]},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){""!==this.props.summoner.id&&this.state.summonerId!==this.props.summoner.id&&this.fetchRankedStats();var e=this.state.rankedStats.map((function(e){return s.a.createElement(h,{key:e.id,rank:e})}));return s.a.createElement(s.a.Fragment,null,0!==this.state.rankedStats.length?s.a.createElement("div",{className:"summonerData__item summonerRankedStats"},e,s.a.createElement(d,{summonerId:this.state.summonerId,cors:this.props.cors,region:this.props.region,apiKey:this.props.apiKey})):"")}}]),a}(n.Component),_=(t(19),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(l.a)(a).call(this,e))).state={nickName:""},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,a="";this.props.champNames.forEach((function(t){t.key===e.props.champId&&(a=t.name)})),this.setState({nickName:a})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,""!==this.state.nickName?s.a.createElement("div",{className:"summonerMasteryPoints__single"},s.a.createElement("img",{src:"http://ddragon.leagueoflegends.com/cdn/".concat(this.props.patch,"/img/champion/").concat(this.state.nickName,".png"),alt:"Mastery level img",className:"summonerMasteryPoints__image"}),s.a.createElement("img",{src:"/images/mastery/lvl".concat(this.props.champLevel,".png"),alt:"Mastery lvl img",className:"summonerMasteryPoints__masteryLvl"}),s.a.createElement("p",{className:"summonerMasteryPoints__champScore"},s.a.createElement("span",{className:"summonerMasteryPoints__champScore--bold"},this.props.champPoints.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1."))," pts")):"")}}]),a}(n.Component)),f=(t(20),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(l.a)(a).call(this,e))).fetchMasteryData=function(){fetch("".concat(t.props.cors,"https://").concat(t.props.region,".api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/").concat(t.props.summoner.id,"?api_key=").concat(t.props.apiKey)).then((function(e){return e.json()})).then((function(e){var a=[];if(0!==e.length&&e.length>=4){for(var n=0;n<4;n++)a.push({champLevel:e[n].championLevel,champPoints:e[n].championPoints,champId:e[n].championId});t.setState({summonerId:t.props.summoner.id,masteryData:a})}else t.setState({summonerId:t.props.summoner.id,masteryData:[]})}))},t.state={summonerId:"",masteryData:[]},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;""!==this.props.summonerId&&this.state.summonerId!==this.props.summoner.id&&this.fetchMasteryData();var a=this.state.masteryData.map((function(a){return s.a.createElement(_,{key:a.champId,champLevel:a.champLevel,champPoints:a.champPoints,champId:a.champId,patch:e.props.patch,champNames:e.props.champNames})}));return s.a.createElement(s.a.Fragment,null,0!==this.state.masteryData.length?s.a.createElement("div",{className:"summonerData__item summonerMasteryPoints"},a):"")}}]),a}(n.Component)),E=t(8),v=(t(21),t(22),t(23),function(e){return s.a.createElement("img",{src:"http://ddragon.leagueoflegends.com/cdn/".concat(e.patch,"/img/item/").concat(e.id,".png"),alt:"Item img",className:"itemsList__singleItem"})}),I=(t(24),function(e){var a=[e.itemList.item0,e.itemList.item1,e.itemList.item2,e.itemList.item3,e.itemList.item4,e.itemList.item5,e.itemList.item6].filter((function(e){return 0!==e})).map((function(a,t){return s.a.createElement(v,{key:t,patch:e.patch,id:a})}));return s.a.createElement("div",{className:"itemsList"},a)}),y=function(e){var a=function(){if(0!==e.playerStats.length){var a=e.playerStats[0].timeline.lane,t=e.playerStats[0].timeline.role;return"SOLO"===t||"DUO"===t||"NONE"===t?"BOTTOM"===a?"CARRY":a:t.slice(4,t.length)}}();return s.a.createElement("div",{className:"historyGameSingle__playerInfo playerInfo"},s.a.createElement("img",{src:"http://ddragon.leagueoflegends.com/cdn/".concat(e.patch,"/img/champion/").concat(function(){var a="";return e.champNames.forEach((function(t){t.key===e.champion&&(a=t.name)})),a}(),".png"),alt:"Champion img",className:"playerInfo__champImg"}),450!==e.queue?s.a.createElement("div",{className:"playerInfo__summonerLane"},s.a.createElement("img",{src:"NONE"===a?"/images/lane/TOP.png":"/images/lane/".concat(a,".png"),alt:"Lane img",className:"playerInfo__laneImg"}),s.a.createElement("h3",{className:"playerInfo__lane"},"NONE"===a?"TOP":a)):" ",s.a.createElement("div",{className:"playerInfo__spells"},s.a.createElement("img",{className:"playerInfo__singleSpell",src:"./images/spells/".concat(e.playerStats[0].spell1Id,".png"),alt:"Spell img"}),s.a.createElement("img",{className:"playerInfo__singleSpell",src:"./images/spells/".concat(e.playerStats[0].spell2Id,".png"),alt:"Spell img"})),s.a.createElement("div",{className:"playerInfo__perks"},s.a.createElement("img",{src:"https://opgg-static.akamaized.net/images/lol/perk/".concat(e.playerStats[0].stats.perk0,".png"),alt:"singlePerk",className:"playerInfo__singlePerk"}),s.a.createElement("img",{src:"https://opgg-static.akamaized.net/images/lol/perkStyle/".concat(e.playerStats[0].stats.perkSubStyle,".png"),alt:"singlePerk",className:"playerInfo__singlePerk"})),s.a.createElement("p",{className:"playerInfo__stats"},"".concat(e.playerStats[0].stats.kills," / ").concat(e.playerStats[0].stats.deaths," / ").concat(e.playerStats[0].stats.assists)),s.a.createElement("p",{className:"playerInfo__goldCS"},s.a.createElement("span",{className:"playerInfo__goldCS--bold"},e.playerStats[0].stats.goldEarned)," gold / ",s.a.createElement("span",{className:"playerInfo__goldCS--bold"},e.playerStats[0].stats.totalMinionsKilled)," CS"),s.a.createElement("p",{className:"playerInfo__dmgDealt"},"Damage ",s.a.createElement("br",null),s.a.createElement("span",{className:"playerInfo__dmgDealt--bold"},e.playerStats[0].stats.totalDamageDealtToChampions)),s.a.createElement("p",{className:"playerInfo__wards"},"Wards placed: ",s.a.createElement("span",{className:"playerInfo__wards--bold"},e.playerStats[0].stats.wardsPlaced)),s.a.createElement("div",{className:"playerInfo__itemList"},s.a.createElement(I,{patch:e.patch,itemList:e.playerStats[0].stats})))},N=(t(25),function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h3",{className:"teams__teamName"},"Team ".concat(100===e.teamData.teamId?"One":"Two")),s.a.createElement("p",{className:"teams__gameStatus"},"Win"===e.teamData.win?"Win":"Lose"),s.a.createElement("div",{className:"teams__objectiveContainer objectiveContainer"},s.a.createElement("div",{className:"objectiveContainer__item"},s.a.createElement("img",{src:"./images/specialObj/inhibitors.png",alt:"Inhib img",className:"objectiveContainer__image"}),s.a.createElement("span",{className:"objectiveContainer__number"},e.teamData.inhibitorKills)),s.a.createElement("div",{className:"objectiveContainer__item"},s.a.createElement("img",{src:"./images/specialObj/towers.png",alt:"Towers img",className:"objectiveContainer__image"}),s.a.createElement("span",{className:"objectiveContainer__number"},e.teamData.towerKills)),s.a.createElement("div",{className:"objectiveContainer__item"},s.a.createElement("img",{src:"./images/specialObj/dragons.png",alt:"Dragons img",className:"objectiveContainer__image"}),s.a.createElement("span",{className:"objectiveContainer__number"},e.teamData.dragonKills)),s.a.createElement("div",{className:"objectiveContainer__item"},s.a.createElement("img",{src:"./images/specialObj/baron.png",alt:"Baron img",className:"objectiveContainer__image"}),s.a.createElement("span",{className:"objectiveContainer__number"},e.teamData.baronKills)),s.a.createElement("div",{className:"objectiveContainer__item"},s.a.createElement("img",{src:"./images/specialObj/herald.png",alt:"Herald img",className:"objectiveContainer__image"}),s.a.createElement("span",{className:"objectiveContainer__number"},e.teamData.riftHeraldKills))))}),k=(t(26),function(e){return s.a.createElement("div",{className:"teamData__singleItem"},s.a.createElement("img",{src:"http://ddragon.leagueoflegends.com/cdn/".concat(e.patch,"/img/champion/").concat(function(){var a="";return e.champNames.forEach((function(t){t.key===e.playerData.championId&&(a=t.name)})),a}(),".png"),alt:"Champion img",className:"teamData__champImg"}),s.a.createElement("p",{className:"teamData__champLvl"},e.playerData.stats.champLevel),s.a.createElement("div",{className:"teamData__spells"},s.a.createElement("img",{className:"teamData__singleSpell",src:"./images/spells/".concat(e.playerData.spell1Id,".png"),alt:"Spell img"}),s.a.createElement("img",{className:"teamData__singleSpell",src:"./images/spells/".concat(e.playerData.spell2Id,".png"),alt:"Spell img"})),s.a.createElement("h3",{className:"teamData__playerNick"},e.playerData.nick),s.a.createElement("p",{className:"teamData__playerStats"},"".concat(e.playerData.stats.kills," / ").concat(e.playerData.stats.deaths," / ").concat(e.playerData.stats.assists)),s.a.createElement("p",{className:"teamData__goldCS"},s.a.createElement("span",{className:"teamData__goldCS--bold"},e.playerData.stats.goldEarned)," gold / ",s.a.createElement("span",{className:"teamData__goldCS--bold"},e.playerData.stats.totalMinionsKilled)," CS"),s.a.createElement("p",{className:"teamData__dmgDealt"},"Damage ",s.a.createElement("br",null),s.a.createElement("span",{className:"teamData__dmgDealt--bold"},e.playerData.stats.totalDamageDealtToChampions)),s.a.createElement("p",{className:"teamData__wards"},"Wards placed: ",s.a.createElement("span",{className:"teamData__wards--bold"},e.playerData.stats.wardsPlaced)),s.a.createElement("div",{className:"teamData__itemList"},s.a.createElement(I,{patch:e.patch,itemList:e.playerData.stats})))}),D=function(e){var a=function(){var a=[];return e.teamData.forEach((function(t,n){n<=4&&a.push({championId:t.championId,participantId:t.participantId,nick:e.teamData[5][n].nickname,spell1Id:t.spell1Id,spell2Id:t.spell2Id,teamId:t.teamId,stats:t.stats})})),a}().map((function(a){return s.a.createElement(k,{key:a.championId,patch:e.patch,playerData:a,champNames:e.champNames})}));return s.a.createElement(s.a.Fragment,null,a)},b=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(l.a)(a).call(this,e))).fetchGameData=function(){fetch("".concat(t.props.cors,"https://").concat(t.props.region,".api.riotgames.com/lol/match/v4/matches/").concat(t.props.matchId,"?api_key=").concat(t.props.apiKey)).then((function(e){return e.json()})).then((function(e){var a=[];return Object.entries(e).forEach((function(e){var t=Object(E.a)(e,2),n=t[0],s=t[1];return a.push({name:n,value:s})})),t.setState({matchId:t.props.matchId,gameData:a}),a})).then((function(e){var a=[],n=[];e[11].value.forEach((function(e){100===e.teamId?a.push({championId:e.championId,participantId:e.participantId,spell1Id:e.spell1Id,spell2Id:e.spell2Id,stats:e.stats,teamId:e.teamId,lane:e.timeline.lane,role:e.timeline.role}):200===e.teamId&&n.push({championId:e.championId,participantId:e.participantId,spell1Id:e.spell1Id,spell2Id:e.spell2Id,stats:e.stats,teamId:e.teamId,lane:e.timeline.lane,role:e.timeline.role})}));var s=[],r=[];e[12].value.forEach((function(e,t){t+1<=5?a.forEach((function(a){a.participantId===e.participantId&&s.push({nickname:e.player.summonerName,profileIcon:e.player.profileIcon})})):n.forEach((function(a){a.participantId===e.participantId&&r.push({nickname:e.player.summonerName,profileIcon:e.player.profileIcon})}))})),a.push(s),n.push(r),t.setState({teamOneData:a,teamTwoData:n})}))},t.getQueueName=function(e){return 400===e?"Draft Pick":420===e?"Ranked Solo/Duo":430===e?"Blind Pick":440===e?"Ranked Flex":450===e?"ARAM":void 0},t.getGameDuration=function(e){var a=function(e,a){return("000"+e).slice(-1*a)},t=parseFloat(e).toFixed(3),n=Math.floor(t/60/60),s=Math.floor(t/60)%60;return 0!==n?a(n,2)+" hours "+a(s,2)+" minutes ":a(s,2)+" minutes "},t.getMainSummonerData=function(){var e="",a="",n=[],s=[],r=[],m="";return 0!==t.state.gameData.length&&(t.state.gameData[12].value.forEach((function(a){a.player.summonerName===t.props.nick&&(e=a.participantId)})),t.state.gameData[11].value.forEach((function(t){t.participantId===e&&(a=t.teamId,n.push(t))})),t.state.gameData[10].value.forEach((function(e){a===e.teamId&&(m=e.win),100===e.teamId?s.push(e):200===e.teamId&&r.push(e)}))),{win:m,playerStats:n,teamOneStats:s,teamTwoStats:r}},t.handleClick=function(){var e=t.state.active;t.setState({active:!e})},t.state={matchId:"",gameData:[],teamOneData:[],teamTwoData:[],active:!1},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){""!==this.props.matchId&&this.state.matchId!==this.props.matchId&&this.fetchGameData();var e=this.getMainSummonerData(),a=e.win,t=e.playerStats;return s.a.createElement(s.a.Fragment,null,0!==this.state.gameData.length&&0!==t.length?s.a.createElement("div",{className:"summonerHistoryGames__single historyGameSingle ".concat("Win"===a?"historyGameSingle--win":"historyGameSingle--fail")},s.a.createElement("h3",{className:"historyGameSingle__queue"},"".concat(this.getQueueName(this.state.gameData[4].value)," "),"\u22c5",s.a.createElement("span",{className:"historyGameSingle__queue--duration"}," ".concat(this.getGameDuration(this.state.gameData[3].value)))),s.a.createElement(y,{patch:this.props.patch,champNames:this.props.champNames,champion:this.props.champion,playerStats:t,queue:this.state.gameData[4].value}),s.a.createElement("button",{className:"far ".concat(!1===this.state.active?"fa-arrow-alt-circle-down":"fa-arrow-alt-circle-up"," historyGameSingle__button"),onClick:this.handleClick}),!1!==this.state.active?s.a.createElement("div",{className:"historyGameSingle__container teams"},s.a.createElement("div",{className:"teams__singleItem ".concat("Win"===this.state.gameData[10].value[0].win?"teams__singleItem--win":"teams__singleItem--lose")},s.a.createElement("div",{className:"teams__teamInfo"},s.a.createElement(N,{teamData:this.state.gameData[10].value[0]})),s.a.createElement("div",{className:"teams__teamData teamData"},s.a.createElement(D,{patch:this.props.patch,teamData:this.state.teamOneData,champNames:this.props.champNames}))),s.a.createElement("div",{className:"teams__singleItem ".concat("Win"===this.state.gameData[10].value[1].win?"teams__singleItem--win":"teams__singleItem--lose")},s.a.createElement("div",{className:"teams__teamInfo"},s.a.createElement(N,{teamData:this.state.gameData[10].value[1]})),s.a.createElement("div",{className:"teams__teamData teamData"},s.a.createElement(D,{patch:this.props.patch,teamData:this.state.teamTwoData,champNames:this.props.champNames})))):""):"")}}]),a}(n.Component),S=(t(27),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(l.a)(a).call(this,e))).fetchHistoryGamesData=function(){fetch("".concat(t.props.cors,"https://").concat(t.props.region,".api.riotgames.com/lol/match/v4/matchlists/by-account/").concat(t.props.summoner.accountId,"?api_key=").concat(t.props.apiKey)).then((function(e){return e.json()})).then((function(e){if(void 0!==e.matches){var a=[];e.matches.forEach((function(e,t){t<=9&&a.push(e)})),t.setState({summonerId:t.props.summoner.id,gameHistory:a})}else t.setState({summonerId:t.props.summoner.id,gameHistory:[]})}))},t.state={summonerId:"",gameHistory:[]},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;""!==this.props.summoner.id&&this.state.summonerId!==this.props.summoner.id&&this.fetchHistoryGamesData();var a=this.state.gameHistory.map((function(a,t){return s.a.createElement(b,{key:a.gameId,matchId:a.gameId,champion:a.champion,patch:e.props.patch,cors:e.props.cors,region:e.props.region,apiKey:e.props.apiKey,champNames:e.props.champNames,nick:e.props.summoner.name,icon:e.props.summoner.profileIconId})}));return s.a.createElement(s.a.Fragment,null,0!==this.state.gameHistory.length?s.a.createElement("div",{className:"summonerData__item summonerHistoryGames"},a):"")}}]),a}(n.Component)),j=function(e){return s.a.createElement("section",{className:"summonerData"},s.a.createElement(u,{apiKey:e.apiKey,cors:e.cors,patch:e.patch,region:e.region,icons:e.icons,summoner:e.summData}),s.a.createElement(g,{apiKey:e.apiKey,cors:e.cors,patch:e.patch,region:e.region,summoner:e.summData}),s.a.createElement(f,{apiKey:e.apiKey,cors:e.cors,patch:e.patch,region:e.region,summoner:e.summData,champNames:e.champNames}),s.a.createElement(S,{apiKey:e.apiKey,cors:e.cors,patch:e.patch,region:e.region,icons:e.icons,summoner:e.summData,champNames:e.champNames}))},O=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(l.a)(a).call(this,e))).handleChange=function(e){t.setState({nickname:e.target.value})},t.handleChangeSelect=function(e){t.setState({region:e.target.value})},t.handleClick=function(){var e=document.querySelector(".main__input").value;fetch("".concat(t.cors,"https://").concat(t.state.region,".api.riotgames.com/lol/summoner/v4/summoners/by-name/").concat(e,"?api_key=").concat(t.apiKey)).then((function(e){if(console.log(e.status),200===e.status)return e.json();if(400===e.status)throw t.setState({status:e.status,serverResp:"Bad request"}),new Error("Bad request");if(401===e.status)throw t.setState({status:e.status,serverResp:"Unauthorized"}),new Error("Unauthorized");if(403===e.status)throw t.setState({status:e.status,serverResp:"Invalid Api Key"}),new Error("Invalid Api Key");if(404===e.status)throw t.setState({status:e.status,serverResp:"Summoner nickname not found"}),new Error("Summoner nickname not found")})).then((function(e){t.setState({status:200,serverResp:"Ok",summonerData:e})})).catch((function(e){return console.log(e)}))},t.handleKeyPress=function(e){if("Enter"===e.key)return t.handleClick()},t.state={nickname:"",region:"eun1",status:404,serverResp:"",patchVersion:"",profileIcons:[],summonerData:[],champNames:[]},t.apiKey="RGAPI-04d87ea6-139d-4738-bbf2-43b5abe44d27",t.cors="https://cors-anywhere.herokuapp.com/",t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://ddragon.leagueoflegends.com/api/versions.json").then((function(e){return e.json()})).then((function(e){return fetch("https://ddragon.leagueoflegends.com/cdn/".concat(e[0],"/data/en_US/profileicon.json"))})).then((function(e){return e.json()})).then((function(a){var t=Object.values(a.data);return e.setState({patchVersion:a.version,profileIcons:t}),fetch("httsp://ddragon.leagueoflegends.com/cdn/".concat(a.version,"/data/en_US/champion.json"))})).then((function(e){return e.json()})).then((function(a){var t=[];Object.values(a.data).forEach((function(e){t.push({key:parseInt(e.key),name:e.id})})),e.setState({champNames:t})}))}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"main"},s.a.createElement("h1",{className:"main__title"},"League of Legends Stats"),s.a.createElement("h2",{className:"main__description"},"Choose server (region) and insert summoner nickname ",s.a.createElement("br",null)," (example: EUNE, TheWanh3da)"),s.a.createElement("div",{className:"main__container"},s.a.createElement("select",{className:"main__select",value:this.state.region,onChange:this.handleChangeSelect},s.a.createElement("option",{value:"eun1",defaultValue:!0},"Europe Nordic & East"),s.a.createElement("option",{value:"euw1"},"Europe West"),s.a.createElement("option",{value:"kr"},"Korea"),s.a.createElement("option",{value:"jp1"},"Japan"),s.a.createElement("option",{value:"na1"},"North America"),s.a.createElement("option",{value:"oc1"},"Oceania"),s.a.createElement("option",{value:"br1"},"Brazil"),s.a.createElement("option",{value:"ru"},"Russia"),s.a.createElement("option",{value:"tr1"},"Turkey")),s.a.createElement("input",{className:"main__input",type:"text",placeholder:"TheWanh3da",value:this.state.nickname,onChange:this.handleChange,onKeyPress:this.handleKeyPress}),s.a.createElement("button",{onClick:this.handleClick,className:"main__button"},"LoL",s.a.createElement("sub",null,"S")))),200!==this.state.status?s.a.createElement("p",{className:"server__response"},this.state.serverResp):s.a.createElement(j,{apiKey:this.apiKey,cors:this.cors,nick:this.state.nickname,patch:this.state.patchVersion,region:this.state.region,icons:this.state.profileIcons,summData:this.state.summonerData,champNames:this.state.champNames}))}}]),a}(n.Component);m.a.render(s.a.createElement(O,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.5bd5ba2d.chunk.js.map