import {connect} from 'react-redux'
import WeatherCityList from '../components/WeatherCityList'

const mStP = state=>({
  cityWeatherList: state.cityWeather
})


export default connect(mStP)(WeatherCityList)