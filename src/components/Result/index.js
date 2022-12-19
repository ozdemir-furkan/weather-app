import logo from "../Pictures/logo3.png";
import humidity from "../Pictures/humidity1.png";
import feelslike from "../Pictures/feels.png";
import wind from "../Pictures/wind1.png";

function index({weather}){
    return(
      <>
        {typeof weather.main !="undefined" && (
            <div className="result">
            <div className="country">{weather.name},{weather.sys.country}</div>
            <div className="detail">           
                <div className="degree"><img className="logo" src={logo} alt="logo" width="100"></img></div>
                <div className="degree1">{Math.round(weather.main.temp)}°c</div>
            </div>
            <div className="status">{(weather.weather[0].description)}</div>
            <div className="other">
              <div className="feels-like-text"><pre><img className="feels-like-picture" src={feelslike} alt="hissedilen" width="35"></img> {Math.round(weather.main.feels_like)}°c </pre>
              <div className="feels-like">Hissedilen</div>
              </div>
              
              <div className="humidity-text"><pre><img className="humidity-picture" src={humidity} alt="nem" width="35"></img> {weather.main.humidity}%</pre>
              <div className="humidity">Nem</div>
              </div>
              
              <div className="wind-text"><pre><img className="wind-picture" src={wind} alt="rüzgar" width="35"></img> {weather.wind.speed}km/s</pre>
              <div className="wind">Rüzgar</div>
              </div>
              
            </div>
            </div>
        
        )}

      </>  

    );
}
export default index;