import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Titles from "./componets/Titles";
import Form from "./componets/Form";
import Weather from "./componets/Weather";

const API_KEY = "6c3072d9f3cf1d298a5a4833286f0253";

class App extends Component {

  state = {
    temperature:undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error:undefined,
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    );
    const data = await api_call.json();
    console.log(data);
    this.setState({
      temperature : data.main.temp,
      city : data.name,
      country : data.sys.country,
      description : data.weather[0].description,
      humidity : data.main.humidity,
      error:""

    })
  };

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather 
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          temperature={this.state.temperature}
          error={this.state.error}       
        />
      </div>
    );
  }
}

export default App;
