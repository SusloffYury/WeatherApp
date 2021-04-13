
import * as GetWeather from '../api/weatherRequest';
import * as ActionCreators from './AppActionCreators';
import GetUserCoordinate from '../api/getCoordinate';

export const FetchingUserWeather = () => {
  return async (dispatch) => {
    try {
      const response = await GetWeather.getWeather();
      dispatch(ActionCreators.IsLoadingIndicator(true))
      dispatch(ActionCreators.UserWeatherCity(response))
      dispatch(ActionCreators.IsLoadingIndicator(false))
    } catch (error) {
      dispatch(ActionCreators.ErrorMessage(error))
    };
  }
}

export const SearchingCityWeather = cityName => {
  return async (dispatch) => {
    GetWeather
      .getCityWeather(cityName)
      .then(response => {
        dispatch(ActionCreators.IsLoadingIndicator(true))
        dispatch(ActionCreators.SearchingCity(response))
        dispatch(ActionCreators.IsLoadingIndicator(false))
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