import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from "react-router";
import Loader from 'react-loader-spinner'
import {getWeathers} from "../redux/operations";

const kelvinToCelsium= 273.15

class WeatherCityList extends React.Component {

  handleclick = name =>{
    this.props.history.push({
      pathname: `/weather/${name}`,
      state:{from: this.props.location}
    })
      this.props.getWeathers(name)
  }

  render() {
    const {isLoading,errorMessage} = this.props
    const {cityWeatherList} = this.props

    return (
      <>
        {errorMessage && <label className="red-text">{errorMessage}</label>}
        {isLoading?<div className='loader'><Loader type="ThreeDots" color="#2EE59D" height={80} width={80} /></div>:
          cityWeatherList && <table>
              <thead>
              <tr>
                <th>город</th>
                <th>температура °C</th>
                <th>давление (hPa)</th>
                <th>влажность %</th>
                <th>описание</th>
                <th>Прогноз на несколько дней</th>
              </tr>
              </thead>
              <tbody>
              {cityWeatherList.map(weather => (
                <tr key={weather.id}>
                  <td>{weather.name} </td>
                  <td>{parseInt(weather.main.temp-kelvinToCelsium)}°C</td>
                  <td>{weather.main.pressure}</td>
                  <td>{weather.main.humidity}</td>
                  <td>{weather.weather.map(itm => itm.description)}</td>
                  <td><button type='button' onClick={e=>this.handleclick(weather.name)}>Подробнее</button></td>
                </tr>
              ))}
              </tbody>
            </table> }


      </>
    )
  }
}

const mStP = state =>({
  weatherList: state.weather.cities,
  isLoading: state.isLoading,
  errorMessage: state.error
})

const mDtP = {getWeathers}

export default connect(mStP,mDtP)(withRouter(WeatherCityList))


