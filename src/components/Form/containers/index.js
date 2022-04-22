import { useDispatch } from "react-redux";
import { FormLayout } from "../components";

import api from "../../../api"
import { useEffect, useState } from "react";

export function FormContainer() {

    const API_KEY = "79ee0a860399446cade151925221804";

    useEffect(() => {
        getWeather();
    },[])

    const [city, setCity] = useState("")

    const dispatch = useDispatch();

    const getWeather = async () => {
        const res = await api.get(`/current.json?key=${API_KEY}&q=${city ? city : 'Batumi'}`);
        setCity("");
        dispatch({type: 'GET_WEATHER', payload: {
            city: res.data.location.name, 
            temp: res.data.current.temp_c,
            weatherType: res.data.current.condition.text,
            humidity: res.data.current.humidity,
            wind: res.data.current.wind_kph,
            precipitation: res.data.current.precip_mm,
            icon: getWeatherIcon(res.data.current.condition.text),
        }})
    }

    const getWeatherIcon = (weatherType) => {
        weatherType.replace(' nearby','').replace(' showers','')
        let arr = weatherType.toLowerCase().split(" ");
        switch(arr[arr.length - 1]){
            case 'sunny':
                return 'sun';
            case 'fog', 'mist':
                return 'fog';
            case 'rain', 'drizzle':
                return 'rain';
            case 'cloudy', 'overcast':
                return 'overcast';
            case 'snow', 'blizzard', 'sleet', 'pellets':
                return 'snow';
            case 'thunder':
                return 'thunderstorm'; 
            default:
                return 'thunderstorm';
        }
    }

    const handleChange = (event) => {
        setCity(event.target.value);
    }

    return <FormLayout city={city} handleChange={handleChange} getWeather={getWeather}/>
}