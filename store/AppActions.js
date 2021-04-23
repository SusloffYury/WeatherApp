
import * as FileSystem from 'expo-file-system';
import GetUserCoordinate from '../api/getCoordinate';
import * as GetWeather from '../api/weatherRequest';
import * as ActionCreators from './AppActionCreators';
import DaySecond from '../constants/Time';
export const FetchingUserWeather = () => {
  return async (dispatch) => {
    try {
      const response = await GetWeather.getWeather();
      dispatch(ActionCreators.UserWeatherCity(response))
    } catch (error) {
      dispatch(ActionCreators.ErrorMessage(error))
    };
  }
}

export const SearchingCityWeather = cityName => {
  return async (dispatch) => {
    dispatch(ActionCreators.IsLoadingIndicator(true))
    GetWeather
      .getCityWeather(cityName)
      .then(response => {
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
    dispatch(ActionCreators.IsLoadingIndicator(true))
    GetWeather
      .getDailyWeather(coordinate)
      .then(response => {
        dispatch(ActionCreators.DailyWeatherCity(response))
        dispatch(ActionCreators.IsLoadingIndicator(false))
      }).catch((error) => {
        dispatch(ActionCreators
          .ErrorMessage(
            error.response.data.cod))
      });
  }
}

export const FetchingHourlyWeather = (coordinate) => {
  return (dispatch) => {
    dispatch(ActionCreators.IsLoadingIndicator(true))
    GetWeather
      .getHourlyWeather(coordinate)
      .then(response => {
        dispatch(ActionCreators.HourlyWeatherCity(response))
        dispatch(ActionCreators.IsLoadingIndicator(false))
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
export const FileSystems = (coordinate) => {
  const PATH = FileSystem.documentDirectory + 'datas.json';
  return async (dispatch) => {
    const fileExist = FileSystem.getInfoAsync(PATH)
    if (fileExist) {
      const readFile = await FileSystem.readAsStringAsync(PATH);
      const parseFile = JSON.parse(readFile);
      console.log(parseFile)
      if (new Date(parseFile.current.dt * 1000) === new Date(Date.now() - DaySecond)) {
        dispatch(ActionCreators.LoadingFile(parseFile))
        return;
      }
    }
    GetWeather.getYesterdayWeather(coordinate).then(async (newFile) => {
      await FileSystem.writeAsStringAsync(PATH, newFile);
    }).catch((error) => {
      dispatch(ActionCreators
        .ErrorMessage(error))
    });
  }
}
