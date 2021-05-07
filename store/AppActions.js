
import FileViewer from 'react-native-file-viewer';
import GetUserCoordinate from '../api/getCoordinate';
import * as GetWeather from '../api/weatherRequest';
import * as ActionCreators from './AppActionCreators';
import EqualDate from '../components/FunctionalComponents/equalDate';
import { Platform } from 'react-native';
import { Notifications } from 'react-native-notifications';

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
        dispatch(ActionCreators.ErrorMessage(''))
        dispatch(ActionCreators.IsLoadingIndicator(false))
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
  var ReactNativeFs = require('react-native-fs')
  var PATH = Platform.OS.toLowerCase() === 'android' ?
    ReactNativeFs.ExternalDirectoryPath + 'datas.json' :
    ReactNativeFs.DocumentDirectoryPath + 'datas.json'
  let readFile;
  return async (dispatch) => {
    // let fileExist = ReactNativeFs.exists(PATH)
    // if (fileExist) {
    //   readFile = await ReactNativeFs.readFile(PATH);
    //   let parseFile = JSON.parse(readFile);
    //   console.log(`Parse ${parseFile}`)
    //   dispatch(ActionCreators.LoadingFile(parseFile))
    //   if (EqualDate(parseFile.data.current.dt)) {
    //     dispatch(ActionCreators.LoadingFile(parseFile))
    //     return;
    //   }
      // else {
      //   try {
      //     const response = await GetWeather.getYesterdayWeather(coordinate)
      //      ReactNativeFs.writeFile(PATH, JSON.stringify(response))
      //     const readFile = await JSON.parse(ReactNativeFs.readFile(PATH))
      //     console.log(`response ${response}`)
      //     dispatch(ActionCreators.LoadingFile(response))
      //   } catch (error) {
      //     dispatch(ActionCreators
      //       .ErrorMessage(error))
      //   }
      // }
    // } else {
      try {
        const response = await GetWeather.getYesterdayWeather(coordinate)
        ReactNativeFs.writeFile(PATH, JSON.stringify(response))
        const redFile = await ReactNativeFs.readFile(PATH)
        const parseFile = await JSON.parse(redFile)
        dispatch(ActionCreators.LoadingFile(response))
      } catch (error) {
        console.log(error)
      }
    }
  }
// }



export const OpenFile = () => {
  return async (dispatch) => {
    var ReactNativeFs = require('react-native-fs');
    var path = Platform.OS.toLowerCase() === 'android' ? ReactNativeFs.DocumentDirectoryPath + 'datas.txt' : ReactNativeFs.DocumentDirectoryPath + 'datas.json';
    let exists = await ReactNativeFs.exists(path);
    console.log("OpenFile")
    if (exists) {
      //   Notifications.postLocalNotification({
      //   body: "File with yesterday forecast succesfully donwloaded",
      //   title: "File Downloaded",
      //   sound: "chime.aiff",
      //   category: "SOME_CATEGORY",
      //   link: "localNotificationLink",
      //   // fireDate: Date.now() + 150,
      // })
      FileViewer.open(path, { showOpenWithDialog: true, showAppsSuggestions: true })
        .then(() => {

        })
    }
  }
}
