
import { FileSystemSessionType } from 'expo-file-system';
import GetUserCoordinate from '../api/getCoordinate';
import * as GetWeather from '../api/weatherRequest';
import * as ActionCreators from './AppActionCreators';

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
export const FileSystem = (coordinate) => {
  return  (dispatch) => {
         GetWeather.getYesterdayWeather(coordinate)
      .then( async (file) => {
         try{
          await FileSystem.writeAsStringAsync(FileSystem.documentDirectory+'datas.json', JSON.stringify(file));
          console.log('succes');
          let readFile = await FileSystem.readAsStringAsync(FileSystem.documentDirectory+'datas.json');
            dispatch(ActionCreators.LoadingFile(readFile))
        }
        catch(err){
          console.log(err);
        }
            }).catch((error) => {
        dispatch(ActionCreators
          .ErrorMessage(error))
      });
  }
}
