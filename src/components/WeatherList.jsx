import React from 'react';
import Loader from "./WeatherCityList";



const kelvinToCelsium= 273.15

class WeatherList extends React.Component {

  handleGoBack = ()=>{
    this.props.history.push(this.props.location.state.from)
    this.props.weatherList.slice(0,4)

  }

  render() {

    const {weatherList,isLoading} = this.props
    const arr = weatherList.map(el=>el.list)
    const weatherFiveDays = arr.map(itm=>itm.filter(el=>el.dt_txt))
    return (
      <>
        {isLoading?<div className='loader'><Loader type="ThreeDots" color="#2EE59D" height={80} width={80} /></div>:
          weatherList.length?
          <table>
            <thead>
            <tr>
              <th> дата</th>
              <th>температура °C</th>
              <th>давление (hPa)</th>
              <th>влажность %</th>
              <th>описание</th>
            </tr>
            </thead>
            <tbody>
            {weatherFiveDays.map(itm => itm.map(el=> ( <tr key={el.dt+Date.now()}>
                <td>{el.dt_txt.includes('00:00:00')?<span key={el.dt_txt}>{el.dt_txt}<hr className='colorLine'/></span>:<span key={el.dt_txt}>{el.dt_txt}</span>} </td>
                <td>{parseInt(el.main.temp - kelvinToCelsium)}°C</td>
                <td>{el.main.pressure}</td>
                <td>{el.main.humidity}</td>
                <td>{el.weather.map(el=>el.description)}</td>
              </tr>
            )))}
            </tbody>
          </table> : null}
        {weatherList.length?<button type='button' onClick={this.handleGoBack}>Back</button>:null}
      </>

    )
  }

}


export default WeatherList;

