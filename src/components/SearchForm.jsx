import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router";
import Titles from './Titles'


class SearchForm extends React.Component {
  state = {
    city: ''
  }


  handleInputChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.history.push({
      pathname: "/weather"
    })
    const cityNameInArray = this.props.cityWeather.some(itm => itm.name.toLowerCase().includes(this.state.city.toLowerCase()))
    if (cityNameInArray) return
    this.props.getCityWeather(this.state.city);
    this.setState({city: ''});

  }

  render() {
    const {city} = this.state
    return (

      <div>
        <Titles/>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text"
                 name="city"
                 placeholder="City..."
                 onChange={this.handleInputChange}
                 value={city}/>

          <button type='submit'>Get Weather</button>
        </form>

      </div>
    )
  }

}

const mStP = state => ({
  cityWeather: state.cityWeather
})

export default connect(mStP)(withRouter(SearchForm))