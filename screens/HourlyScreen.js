import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NoInternet from '../components/UIComponents/internetNotAvailable';
import HourlyWeatherCity from '../components/Views/HourlyScreenView';
import * as Actions from '../store/AppActions';

const HourlyScreen = props => {
  const dispatch = useDispatch();
   const {
    error: IsError,
    userCoordinate: coordinate
  } = useSelector(state => state.search)
  
  useEffect(
    () => {
      dispatch(Actions.GetCity(coordinate));
      dispatch(Actions.FetchingHourlyWeather(coordinate))
    }, [coordinate])

  return (
    (IsError === '404') ?
      <NoInternet /> :
      <HourlyWeatherCity />
  )
}
export default HourlyScreen;
