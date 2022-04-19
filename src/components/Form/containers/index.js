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
        dispatch({type: 'GET_WEATHER', payload: {
            city: res.data.location.name, 
            temp: res.data.current.temp_c,
            humidity: res.data.current.humidity,
            wind: res.data.current.wind_kph
        }})
    }

    const handleChange = (event) => {
        setCity(event.target.value);
    }

    return <FormLayout city={city} handleChange={handleChange} getWeather={getWeather}/>
}