
import * as GetWeather from '../api/weatherRequest';
import * as ActionCreators from './AppActionCreators';
import GetUserCoordinate from '../api/getCoordinate';

export const FetchingUserWeather = () => {
  return (dispatch) => {
    dispatch(ActionCreators.IsLoadingIndicator(true))
    GetWeather
      .getWeather().then(response => {
        dispatch(ActionCreators.UserWeatherCity(response))
        }).catch((error) => {
        dispatch(ActionCreators.ErrorMessage(error))
      });
      dispatch(ActionCreators.IsLoadingIndicator(false))
  }
}

export const SearchingCityWeather = cityName => {
  return async (dispatch) => {
    GetWeather
      .getCityWeather(cityName)
      .then(response => {
       dispatch(ActionCreators.SearchingCity(response))
       dispatch(ActionCreators.ErrorMessage(''))
      }).catch((error) => {
        dispatch(ActionCreators
          .ErrorMessage(
            error.response.data.cod))
      });
  }
}

export const FetchingDailyWeather = coordinate => {
  return (dispatch) => {
    GetWeather
      .getDailyWeather(coordinate)
      .then(response => {
        dispatch(ActionCreators.DailyWeatherCity(response))
      }).catch((error) => {
        dispatch(ActionCreators
          .ErrorMessage(
            error.response.data.cod))
      });
    }
}

export const FetchingHourlyWeather = (coordinate) => {
  return (dispatch) => {
     GetWeather
      .getHourlyWeather(coordinate)
      .then(response => {
        dispatch(ActionCreators.HourlyWeatherCity(response))
      }).catch((error) => {
        dispatch(ActionCreators
          .ErrorMessage(
            error.response.data.cod))
      });
   }
}

export const GetCity = (coordinate) => {
  return (dispatch) => {
       GetWeather
      .getCityName(coordinate)
      .then(response => {
        dispatch(ActionCreators.GetCityName(response.name))
      }).catch((error) => {
        dispatch(ActionCreators
          .ErrorMessage(
            error.response.data.cod))
      })
    }
}

export const GetCoordinate = () => {
  return (dispatch) => {
     GetUserCoordinate()
      .then(coordinate => {
        dispatch(ActionCreators.SetUserCoordinate(coordinate))
       }).catch((error) => {
        dispatch(ActionCreators
          .ErrorMessage(error))
      });
   }
  }