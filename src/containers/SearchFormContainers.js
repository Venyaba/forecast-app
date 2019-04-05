import {connect} from 'react-redux'
import SearchForm from '../components/SearchForm'
import {getCityWeather} from '../redux/operations'

const mStP = state =>({
    isLoading: state.isLoading,
    errorMessage: state.error

})

const mDtP = {getCityWeather}

export default connect(mStP,mDtP)(SearchForm)