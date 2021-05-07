export const USER_CITY = 'USER_CITY';
export const DEFAULT_CITIES = 'DEFAULT_CITIES';
export const ERROR_MESSAGE = 'ERROR_MESSAGE';
export const DAILY_WEATHER = 'DAILY_WEATHER';
export const USER_COORDINATE = 'USER_COORDINATE';
export const SEARCHING_CITY_WEATHER = 'SEARCHING_CITY_WEATHER';
export const HOURLY_WEATHER = 'HOURLY_WEATHER';
export const CLEAR_INPUT = 'CLEAR_INPUT';
export const CITY_NAME = 'CITY_NAME';
export const IS_LOADING_INDICATOR = 'IS_LOADING_INDICATOR';
export const LOADING_FILE = 'LOADING_FILE';

export const ClearInput = () => {
  return {
    type: CLEAR_INPUT, weather: '',
  }
}
export const LoadingFile = file => {
  return {
    type: LOADING_FILE, fileName: file,
  }
}

export const IsLoadingIndicator = indication => {
  return {
    type: IS_LOADING_INDICATOR, indication: indication,
  }
}

export const ErrorMessage = error => {
  return {
    type: ERROR_MESSAGE, message: error
  }
}

export const GetCityName = city => {
  return {
    type: CITY_NAME, cityName: city
  }
}

export const UserWeatherCity = weatherParams => {
  return {
    type: USER_CITY, weather: weatherParams
  }
}

export const SearchingCity = weatherParams => {
  return {
    type: SEARCHING_CITY_WEATHER, weather: weatherParams
  }
}

export const DailyWeatherCity = weatherParams => {
  return {
    type: DAILY_WEATHER, weather: weatherParams
  }
}
export const HourlyWeatherCity = weatherParams => {
  return {
    type: HOURLY_WEATHER, weather: weatherParams
  }
}
export const SetUserCoordinate = coordinate => {
  return {
    type: USER_COORDINATE, userCoordinate: coordinate
  }
}