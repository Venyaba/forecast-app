import axios from 'axios';
import {
  getWeatherRequest,
  getWeatherSuccess,
  getWeatherError,
  getCityWeatherRequest,
  getCityWeatherSuccess
} from './actionTypes'

const API_KEY = '31e4d2484c6fb6e04692fd6e1dc50a49'
const BASE_URL_WEATHER = `http://api.openweathermap.org/data/2.5/weather`
const BASE_URL_FORECAST = `http://api.openweathermap.org/data/2.5/forecast`

export const getWeathers = city => dispatch => {
  dispatch(getWeatherRequest())

  const url = `${BASE_URL_FORECAST}?q=${city},ua&APPID=${API_KEY}`
  axios
    .get(url)
    .then(({data}) => dispatch(getWeatherSuccess(data)))
    .catch(response => dispatch(getWeatherError(response)))
}

export const getCityWeather = city => dispatch => {
  dispatch(getCityWeatherRequest())
  const url = `${BASE_URL_WEATHER}?q=${city},ua&APPID=${API_KEY}`

  axios
    .get(url)
    .then(({data}) => dispatch(getCityWeatherSuccess(data)))
    .catch(({response}) => dispatch(getWeatherError(response.data.message)))

}


