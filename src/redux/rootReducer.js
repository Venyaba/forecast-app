import {combineReducers} from "redux";
import {GET_WEATHER_SUCCESS, GET_WEATHER_REQUEST, GET_WEATHER_ERROR,GET_CITY_WEATHER_SUCCESS,GET_CITY_WEATHER_REQUEST} from "./actionTypes";

const initialState = {
  cities: []
}

const weatherReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_WEATHER_SUCCESS:

      return {
        ...state,
        cities:
          [
            payload
          ]
      }

    default:
      return state
  }
}

const isLoadingReducer = (state = false, {type}) => {
  switch (type) {
    case GET_WEATHER_REQUEST:
    case GET_CITY_WEATHER_REQUEST:
      return true
    case GET_CITY_WEATHER_SUCCESS:
    case GET_WEATHER_SUCCESS:
    case GET_WEATHER_ERROR:
      return false
    default:
      return state

  }
}


const errorReducer = (state = null, {type, payload}) => {
  switch (type) {
    case GET_CITY_WEATHER_SUCCESS:
      return null
    case GET_WEATHER_ERROR:
      return payload
    default:
      return state
  }
}


const cityWeatherReducer = (state=[],{type,payload})=>{
  switch (type) {
    case GET_CITY_WEATHER_SUCCESS:
      return [...state,payload]

    default:
      return state

  }
}

export default combineReducers({
  weather: weatherReducer,
  cityWeather: cityWeatherReducer,
  isLoading: isLoadingReducer,
  error: errorReducer
})