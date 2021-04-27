
import * as FileSystem from 'expo-file-system';
import GetUserCoordinate from '../api/getCoordinate';
import * as GetWeather from '../api/weatherRequest';
import * as ActionCreators from './AppActionCreators';
import EqualDate from '../components/FunctionalComponents/equalDate';
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
   console.log(coordinate)
  const PATH = FileSystem.documentDirectory + 'data.json';

  return async (dispatch) => {
    GetWeather.getYesterdayWeather(coordinate)
    .then(async (newFile) => {
      FileSystem.writeAsStringAsync(PATH, JSON.stringify(newFile));
               dispatch(ActionCreators.LoadingFile(newFile))
    }).catch((error) => {
      dispatch(ActionCreators
        .ErrorMessage(error))
    });
    let parseFile;
    const fileExist = await FileSystem.getInfoAsync(PATH)
    console.log(fileExist.exists)
    if (true) {
      try {
        const readFile = await FileSystem.readAsStringAsync(PATH);
        // parseFile = JSON.parse(readFile);
        // dispatch(ActionCreators.LoadingFile(parseFile))
      } catch (error) {
        console.log(error)
      }
      if (EqualDate(true)) {
        GetWeather.getYesterdayWeather(coordinate)
          .then(async (newFile) => {
            FileSystem.writeAsStringAsync(PATH, JSON.stringify(newFile));
            const readFile = await JSON.parse(FileSystem.readAsStringAsync(PATH))
            console.log(`Read ${readFile}`)
            dispatch(ActionCreators.LoadingFile(newFile))
          }).catch((error) => {
            dispatch(ActionCreators
              .ErrorMessage(error))
          });
      }
       }
    }
}