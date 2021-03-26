
import { getWeather } from '../api/weatherRequest';
import WeatherModel from '../models/Weather';

export const DEFAULT_CITY = 'DEFAULT_CITY';
export const SEARCHING_CITY = 'SEARCHING_CITY';

const DefaultCity = weatherParams => {
    return {
        type: DEFAULT_CITY, weather: weatherParams
    }
}

export const FetchingWeather = (city) => {
    return async (dispatch)=>{
       const response = await getWeather(city)
      dispatch(DefaultCity(response));
    }
    
}


