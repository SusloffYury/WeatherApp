import * as axios from 'axios';

export const getWeather = cityName => {
  return  axios.get(       
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=2cccc3f851397635425053d44508d7b7`
    ).then(respond => {
        return respond.data
    })
}