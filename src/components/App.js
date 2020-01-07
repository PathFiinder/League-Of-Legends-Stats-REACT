import React, { Component } from "react";
import '../sass/App.sass'
import SummonerInfo from './SummonerInfo.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: "",
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

  handleClick = (event) => {
    event.preventDefault();
    const insertNickname = document.querySelector('.main__input').value;
    
    fetch(`${this.cors}https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${insertNickname}?api_key=${this.apiKey}`)
      .then(resp => {
        console.log(resp.status)
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
          summonerData: data
        })
      })
      .catch(error => console.log(error))

    document.querySelector('.main__input').value = "";
  }

 

  render() {
    console.log(this.state);
    return (
    <React.Fragment>
      <div className="main">
        <h1 className="main__title">League of Legends Stats</h1>
        <h2 className="main__description">Insert summoner nickname <br /> (example: TheWanh3da)</h2>
        <div className="main__container">
          <span className="main__serverName">EUNE</span>
          <input className="main__input" type="text" placeholder="TheWanh3da" value={this.state.nickname} onChange={this.handleChange}/>
          <button onClick={this.handleClick} className="main__button" >LoL<sub>S</sub></button>
        </div>
      </div>
    {this.state.status !== 200 ? <p className="server__response">{this.state.serverResp}</p> : <SummonerInfo/>}
    </React.Fragment>
    )
  }
}

export default App;
