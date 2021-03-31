
import * as GetWeather from '../api/weatherRequest';
export const USER_CITY = 'USER_CITY';
export const DEFAULT_CITIES = 'DEFAULT_CITIES';
export const HOURLY_WEATHER = 'HOURLY_WEATHER';
export const DAILY_WEATHER = 'DAILY_WEATHER';
export const USER_COORDINATE = 'USER_COORDINATE';
const UserWeatherCity = weatherParams => {
    return {
        type: USER_CITY, weather: weatherParams
    }
}
const DailyWeatherCity = weatherParams => {
    return {
        type: DAILY_WEATHER, weather: weatherParams
    }
}
const HourlyWeatherCity = weatherParams => {
    return {
        type: HOURLY_WEATHER, weather: weatherParams
    }
}
export const SetUserCoordinate = coordinate => {
    return {
        type: USER_COORDINATE, userCoordinate: coordinate
    }
}

export const FetchingUserWeather = (city) => {
    try {
        return async (dispatch) => {
            const response = await GetWeather.getWeather(city)
            dispatch(UserWeatherCity(response))
        }
    } catch (error) {
        console.log(error)
    }
}

export const FetchingDailyWeather = (city) => {
    try {
        return async (dispatch) => {
            const response = await GetWeather.getDailyWeather(city)
            dispatch(DailyWeatherCity(response))
        }
    } catch (error) {
        console.log(error)
    }
}

export const FetchingHourlyWeather = (city) => {
    try {
        return async (dispatch) => {
            const response = await GetWeather.hourly(city)
            dispatch(HourlyWeatherCity(response))
        }
    } catch (error) {
        console.log(error)
    }
}
