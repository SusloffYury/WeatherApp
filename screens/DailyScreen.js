import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../store/AppActions';
import DailyView from '../components/Views/DailyScreenView';
import NoInternet from '../components/UIComponents/internetNotAvailable';

const DailyScreen = props => {
  const dispatch = useDispatch();
  const {
    userCoordinate: coordinate,
    error: IsError
  } = useSelector(state => state.search)
 

  useEffect(
    () => {
      dispatch(Actions.GetCity(coordinate));
      dispatch(Actions.FetchingDailyWeather(coordinate));
    }, [])

  return (
      <DailyView />
  )
}
export default DailyScreen;
