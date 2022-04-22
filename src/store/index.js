import { createStore } from "redux"

const defaultState = {
    city: "",
    temp: "",
    weatherType: "",
    humidity: '',
    wind: '',
    precipitation: "",
    icon: '',
}

const reduser = (state = defaultState, action) => {
    switch (action.type) {
        case 'GET_WEATHER':
            return {...state, 
                city: action.payload.city, 
                temp: action.payload.temp,
                weatherType: action.payload.weatherType,
                humidity: action.payload.humidity,
                wind: action.payload.wind,
                precipitation: action.payload.precipitation,
                icon: action.payload.icon,
            }
        default:
            return state
    }
}

export function configureStore() {
    const store = createStore(reduser);
    return store;
}