import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../store/AppActions';
import DailyView from '../components/Views/DailyScreenView';
const DailyScreen = props => {
  const dispatch = useDispatch();
  const coordinate = useSelector(state => state.search.userCoordinate)
  const cityName = (useSelector(state => state.search.cityName))
  const WeatherCityDaily = (useSelector(state =>
    state.search.cityDailyWeather))

  useEffect(
    () => {
      dispatch(Actions.GetCity(coordinate));
      dispatch(Actions.FetchingDailyWeather(coordinate));
    }, [])

  return (
    <DailyView
      cityName={cityName}
      WeatherCityDaily={WeatherCityDaily} />

  )
}
export default DailyScreen;