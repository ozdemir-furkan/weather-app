import React from "react";
import "./index.css";

import Background from "./components/Background";
import Search from "./components/Search/SearchBar";
import Result from "./components/Result"
import { useState } from "react";


function App() {
  const [weatherforecast,thisWeatherForecast]= useState({});
  
  return (
    <section className="app">
      <Background background={weatherforecast.weather && weatherforecast.weather[c].main} />
      <div id="title">HAVA DURUMU</div>
      <Search thisWeatherForecast={thisWeatherForecast} />
      <Result weather={weatherforecast}  />
      
    </section>
    
  );
}

export default App;
