import * as axios from 'axios';
import DaySecond from '../constants/Time'
const instance = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5/'
});

const apiKey = '2cccc3f851397635425053d44508d7b7&units=metric';

export const getWeather = () => {
  return instance.get(`box/city?bbox=26,49,27,52,10&appid=${apiKey}`)
    .then(respond => {
      return respond.data
    })
}

export const getCityWeather = cityName => {
  return instance.get(`weather?q=${cityName}&appid=${apiKey}`)
    .then(respond => {
      return respond.data
    })
}

export const getCityName = ({ lat, lon }) => {
  return instance.get(`weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
  ).then(respond => {
    return respond.data
  })
}

export const getDailyWeather = ({ lat, lon }) => {
  return instance.get(`onecall?lat=${lat}&lon=${lon}&exclude={current,minutely,hourly,alerts }&appid=${apiKey}`
  ).then(respond => {
     return respond.data
  })
}

export const getHourlyWeather = ({ lat, lon }) => {
  return instance.get(`onecall?lat=${lat}&lon=${lon}&exclude={current,minutely,daily,alerts }&appid=${apiKey}`
  ).then(respond => {
     return respond.data
    
  })
}
export const getYesterdayWeather = ({ lat, lon }) => {
   const time = Math.floor((Date.now() - DaySecond));
     return instance.get(`onecall/timemachine?lat=${lat}&lon=${lon}&dt=${time}&appid=${apiKey}`
    ).then(respond => {
      console.log(respond)
            return respond
  })
}
