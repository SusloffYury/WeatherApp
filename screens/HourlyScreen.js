import React, { useEffect } from 'react';
import * as Actions from '../store/AppActions';
import { useDispatch, useSelector } from 'react-redux';
import HourlyWeatherCity from '../components/Views/HourlyScreenView';

const HourlyScreen = props => {
  const dispatch = useDispatch();
  const coordinate = useSelector(state => state.search.userCoordinate)
   useEffect(
    () => {
      dispatch(Actions.GetCity(coordinate));
      dispatch(Actions.FetchingHourlyWeather(coordinate))
    }, [coordinate])
    
  return (
    <HourlyWeatherCity/>
  )
}
export default HourlyScreen;
