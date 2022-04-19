import { useSelector } from "react-redux";
import { InfoLayout } from "../components";

export function InfoContainer() {

    const {city, temp, humidity, wind} = useSelector(state => state);

    return <InfoLayout city={city} temp={temp} humidity={humidity} wind={wind}/>
}