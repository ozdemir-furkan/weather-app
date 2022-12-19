import rainy from "../Pictures/rainy1.gif";
import sunny from "../Pictures/sunny.jpg";
import foggy from "../Pictures/foggy1.jpg";
import cloudy from "../Pictures/cloudy1.gif";
import rainbow from "../Pictures/background.jpg";
import snowy from "../Pictures/snowygiff.gif";
import stormy from "../Pictures/stormy.jpeg";


function TakePicture({situation}){
switch (situation){
    case "Rain":
        return <img className="background-picture" src={rainy} alt="Yağmurlu"/>
    case "Drizzle":    
        return <img className="background-picture" src={rainy} alt="Yağmurlu"/>
    case "Clear":    
        return <img className="background-picture" src={sunny} alt="Güneşli"/>
    case "Fog":    
        return <img className="background-picture" src={foggy} alt="Sisli"/>
    case "Mist":    
        return <img className="background-picture" src={foggy} alt="Sisli"/>
    case "Smoke":    
        return <img className="background-picture" src={foggy} alt="Sisli"/>
    case "Snow":    
        return <img className="background-picture" src={snowy} alt="Karlı"/>
    case "Storm":    
        return <img className="background-picture" src={stormy} alt="Fırtınalı"/>
    case "Clouds":    
        return <img className="background-picture" src={cloudy} alt="Bulutlu"/>
    default:    
        return <img className="background-picture" src={rainbow} alt="Gökküşağı"/>
        
}
}

export default TakePicture;
