import { createStore } from "redux"

const defaultState = {
    city: "",
    temp: "",
    humidity: '',
    wind: '',
}

const reduser = (state = defaultState, action) => {
    switch (action.type) {
        case 'GET_WEATHER':
            return {...state, 
                city: action.payload.city, 
                temp: action.payload.temp,
                humidity: action.payload.humidity,
                wind: action.payload.wind
            }
        default:
            return state
    }
}

export function configureStore() {
    const store = createStore(reduser);
    return store;
}