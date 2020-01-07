import React, { Component } from "react";
import '../sass/App.sass'
import SummonerData from './SummonerData.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: "",
      region: "eun1",
      status: 404,
      serverResp: "",
      patchVersion: "",
      profileIcons: [],
      summonerData: []
    };
    this.apiKey = 'RGAPI-40715d68-6142-4b74-8d07-863a255c80d2';
    this.cors = 'https://cors-anywhere.herokuapp.com/';
  }


  componentDidMount() {
    fetch("https://ddragon.leagueoflegends.com/api/versions.json")
      .then(response => response.json())
      .then(data =>
        fetch(
          `http://ddragon.leagueoflegends.com/cdn/${data[0]}/data/en_US/profileicon.json`
        )
      )
      .then(response1 => response1.json())
      .then(data1 => {
        const icons = Object.values(data1.data);
        this.setState({
          patchVersion: data1.version,
          profileIcons: icons
        });
      });
  }

  handleChange = (event) => {
    this.setState({
      nickname: event.target.value
    })
  }

  handleChangeSelect = (event) => {
    this.setState({region: event.target.value});
  }

  handleClick = () => {
    const insertNickname = document.querySelector('.main__input').value;
    
    fetch(`${this.cors}https://${this.state.region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${insertNickname}?api_key=${this.apiKey}`)
      .then(resp => {
          if(resp.status === 200) return resp.json()
          else if (resp.status === 400) {
            this.setState({status: resp.status, serverResp: "Bad request"})
            throw new Error("Bad request")}
          else if (resp.status === 401) {
            this.setState({status: resp.status, serverResp: "Unauthorized"})
            throw new Error("Unauthorized")}
          else if (resp.status === 403) {
            this.setState({status: resp.status, serverResp: "Invalid Api Key"})
            throw new Error("Invalid Api Key")}
          else if (resp.status === 404) {
            this.setState({status: resp.status, serverResp: "Summoner nickname not found"})
            throw new Error("Summoner nickname not found")}
      })
      .then(data => {
        this.setState({
          status: 200,
          serverResp: "Ok",
          summonerData: data
        })
      })
      .catch(error => console.log(error))

  }

 handleKeyPress = (event) => {
    if(event.key === 'Enter') return this.handleClick();

 }

  render() {
    return (
    <React.Fragment>
      <div className="main">
        <h1 className="main__title">League of Legends Stats</h1>
        <h2 className="main__description">Insert summoner nickname <br /> (example: TheWanh3da)</h2>
        <div className="main__container">
        <select className="main__select" value={this.state.region} onChange={this.handleChangeSelect}>
              <option value="eun1" defaultValue>Europe Nordic & East</option>
              <option value="euw1">Europe West</option>
              <option value="kr">Korea</option>
              <option value="jp1">Japan</option>
              <option value="na1">North America</option>
              <option value="oc1">Oceania</option>
              <option value="br1">Brazil</option>
              <option value="ru">Russia</option>
              <option value="tr1">Turkey</option>
          </select>
          <input className="main__input" type="text" placeholder="TheWanh3da" value={this.state.nickname} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
          <button onClick={this.handleClick}  className="main__button" >LoL<sub>S</sub></button>
        </div>
      </div>
    {this.state.status !== 200 ? 
    <p className="server__response">{this.state.serverResp}</p> : 
    <SummonerData apiKey={this.apiKey} cors={this.cors} nick={this.state.nickname}  patch={this.state.patchVersion} region= {this.state.region} icons={this.state.profileIcons} summData={this.state.summonerData}/>}
    </React.Fragment>
    )
  }
}

export default App;
