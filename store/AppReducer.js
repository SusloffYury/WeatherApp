import {
    USER_CITY,
    HOURLY_WEATHER,
    DAILY_WEATHER,
    USER_COORDINATE
} from './AppActions';

const initialState = {
    defaultCityWeather: '',
    cityDailyWeather: '',
    cityHourlyWeather: '',
    userCoordinate: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_CITY: {
            return {
                ...state,
                defaultCityWeather: action.weather
            }
        }
        case HOURLY_WEATHER: {
            return {
                ...state,
                cityHourlyWeather: action.weather
            }
        }
        case DAILY_WEATHER: {
            return {
                ...state,
                cityDailyWeather: action.weather
            }
        }
        case USER_COORDINATE: {
            return {
                ...state,
                userCoordinate: action.userCoordinate
            }
        }
        default: return state;
    }
}

