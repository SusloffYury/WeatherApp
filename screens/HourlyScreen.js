import React, { useEffect } from 'react';
import * as Actions from '../store/AppActions';
import { useDispatch, useSelector } from 'react-redux';
import HourlyWeatherCity from '../components/Views/HourlyScreenView';
import moment from "moment";

const HourlyScreen = props => {
  const dispatch = useDispatch();
  const coordinate = useSelector(state => state.search.userCoordinate)
  const hourlyWeather = useSelector(state => state.search.cityHourlyWeather)
  const cityName = (useSelector(state => state.search.cityName))
  const Date = moment().format('MM, DD do')

  useEffect(
    () => {
      dispatch(Actions.GetCity(coordinate));
      dispatch(Actions.FetchingHourlyWeather(coordinate))
    }, [])

  return (
    <HourlyWeatherCity
      hourlyWeather={hourlyWeather}
      cityName={cityName}
      Date={Date}
    />
  )
}

export default HourlyScreen;
