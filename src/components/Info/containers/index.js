import { useSelector } from "react-redux";
import { InfoLayout } from "../components";

export function InfoContainer() {

    const {city, temp, weatherType, humidity, wind, precipitation, icon} = useSelector(state => state);

    return <InfoLayout city={city} temp={temp} weatherType={weatherType} humidity={humidity} wind={wind} precipitation ={precipitation} icon={icon}/>
}