import {connect} from "react-redux";
import WeatherList from '../components/WeatherList'


const mStP = state=>({
    weatherList: state.weather.cities,
    isLoading: state.isLoading
})

export default connect(mStP)(WeatherList)