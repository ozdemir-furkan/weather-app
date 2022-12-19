import React, {useState} from "react";
function SearchBar({thisWeatherForecast}){
    const api={
        key: "812f710ad356397eaf02b858d1d443c1",
        base: "https://api.openweathermap.org/data/2.5/weather"
    };

    const [searchValue,thisSearchValue]= useState("");

    const search = (e) =>{
        if(e.key=="Enter"){
            fetch(`${api.base}?q=${searchValue}&units=metric&lang=tr&appid=${api.key}`)
            .then((data)=> data.json())
            .then((result)=>{
                thisSearchValue("");
                thisWeatherForecast(result);
        })
        }

    }
    
    return(
        <div className="search">
            <input 
            className="search-input"
            type="text" 
            placeholder="Şehir"
            onChange={(e)=> thisSearchValue(e.target.value)}
            value={searchValue}
            onKeyPress={search}
            />
        </div>
    
    );
    }
    export default SearchBar;