import React, { useEffect, useState } from 'react';
import * as Actions from '../store/AppActions';
import { useDispatch, useSelector } from 'react-redux';
import HourlyWeatherCity from '../components/Views/HourlyScreenView';
import NoInternet from '../components/UIComponents/internetNotAvailable';

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
