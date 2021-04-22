import moment from "moment";
import formatTemp from '../components/FunctionalComponents/formatTemp';
import WeatherIcons from '../models/Weather';
import {
  CITY_NAME, CLEAR_INPUT, DAILY_WEATHER,



  ERROR_MESSAGE, HOURLY_WEATHER,






  IS_LOADING_INDICATOR, SEARCHING_CITY_WEATHER, USER_CITY,


  USER_COORDINATE
} from './AppActionCreators';
const initialState = {
  defaultCityWeather: '',
  searchingCity: '',
  cityDailyWeather: '',
  cityHourlyWeather: '',
  userCoordinate: '',
  error: '',
  cityName: '',
  IsLoadingIndicator: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_CITY: {
      return {
        ...state,
        defaultCityWeather:
          action.weather
            .list.map((el, index) => {
              return {
                id: index + 1,
                cityName: el.name,
                temperature: formatTemp(el.main.temp),
                icon: WeatherIcons[el.weather[0].main],
              }
            })
      }
    }
    case SEARCHING_CITY_WEATHER: {
      const weatherCity = {
        temperature: formatTemp(action.weather.main.temp),
        cityName: action.weather.name,
        icon: WeatherIcons[action.weather.weather[0].main],
      }
      return {
        ...state,
        searchingCity: weatherCity
      }
    }
    case CLEAR_INPUT: {
      return {
        ...state,
        searchingCity: action.weather,
      }
    }
    case ERROR_MESSAGE: {
      return {
        ...state,
        error: action.message
      }
    }
    case IS_LOADING_INDICATOR: {
         return {
        ...state,
        IsLoadingIndicator: action.indication
      }
    }

    case DAILY_WEATHER: {
      const DailyData =
        action.weather.daily.map((item, index) => {
          return {
            id: item.dt.toString(),
            temp: formatTemp(item.temp.day),
            icon: WeatherIcons[item.weather[0].main],
            date: moment().add(index, 'days').format('MMM Do'),
          }
        })
      return {
        ...state,
        cityDailyWeather: DailyData
      }
    }
    case HOURLY_WEATHER: {
      const HourlyData =
        action.weather.hourly.map((item, index) => {
          return {
            id: item.dt.toString(),
            icon: WeatherIcons[item.weather[0].main],
            temp: formatTemp(item.temp),
            date: moment().add(index, 'hour').format('HH:00 Do'),
          }
        })
      return {
        ...state,
        cityHourlyWeather: HourlyData
      }
    }
    case USER_COORDINATE: {
      return {
        ...state,
        userCoordinate: action.userCoordinate
      }
    }

    case CITY_NAME: {
      return {
        ...state,
        cityName: action.cityName
      }
    }
    default: return state;
  }
}

