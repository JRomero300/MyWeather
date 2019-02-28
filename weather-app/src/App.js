import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Titles from "./componets/Titles";
import Form from "./componets/Form";
import Weather from "./componets/Weather";

const API_KEY = "6c3072d9f3cf1d298a5a4833286f0253";

class App extends Component {
  getWeather = async () => {
    const api_call = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=kitchener&appid=${API_KEY}"
    );
  };

  render() {
    return (
      <div>
        <Titles />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;
