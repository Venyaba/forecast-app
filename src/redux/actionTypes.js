export const GET_WEATHER_REQUEST = 'GET_WEATHER_REQUEST'
export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS'
export const  GET_WEATHER_ERROR = 'GET_WEATHER_ERROR'
export const GET_CITY_WEATHER_REQUEST = 'GET_CITY_WEATHER_REQUEST'
export const GET_CITY_WEATHER_SUCCESS = 'GET_CITY_WEATHER_SUCCESS'


export const getWeatherRequest =()=> ({
    type:GET_WEATHER_REQUEST
})


export const getWeatherSuccess = data => ({
    type: GET_WEATHER_SUCCESS,
    payload:data
})

export const getWeatherError = error=> ({
    type:GET_WEATHER_ERROR,
    payload: error
})


export const getCityWeatherRequest = ()=>({
  type: GET_CITY_WEATHER_REQUEST

})

export const getCityWeatherSuccess = credentials =>({
  type: GET_CITY_WEATHER_SUCCESS,
  payload: credentials
})