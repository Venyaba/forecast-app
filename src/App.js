import React, {Component} from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import './App.css';
import WeatherList from './containers/WeatherList'
import WeatherCityList from './containers/WeatherCityListContainer'
import AppHeader from './components/AppHeader'

class App extends Component {

    render() {
      return (

            <div className="App">
              <AppHeader/>
                <Switch>
                  <Route exact path='/weather/:city' component={WeatherList}/>
                    <Route path='/weather' component={WeatherCityList}/>
                </Switch>
              {/*<WeatherList/>*/}
            </div>
        );
    }
}


export default App;

{/*<WeatherCityList/>*/}
{/*<WeatherList/>*/}
{/*<SearchForm/>*/}