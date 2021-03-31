import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5/'
});
const apiKey = '2cccc3f851397635425053d44508d7b7';

export const getWeather = cityName => {
    return instance.get(`weather?q=${cityName}&appid=${apiKey}`)
        .then(respond => {
            return respond.data
        })
}

export const getDailyWeather = cityName => {
    return instance.get(`forecast/daily?q=${cityName}&cnt=7&appid=${apiKey}`
    ).then(respond => {
        return respond.data
    })
}

export const getHourlyWeather = cityName => {
    return instance.get(`forecast/hourly?q=${cityName}&appid=${apiKey}`
    ).then(respond => {
        return respond.data
    })
}
