import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NoInternet from '../components/UIComponents/internetNotAvailable';
import YesterdayHourlyView from '../components/Views/YesterDayScreenView';
import * as Actions from '../store/AppActions';

const YesterdayScreen = props => {
  const dispatch = useDispatch();
  const {
    error: IsError,
    userCoordinate: coordinate,
    } = useSelector(state => state.search)
  

   useEffect(
    () => {
      dispatch(Actions.GetCity(coordinate));
      dispatch(Actions.FileSystems(coordinate));
      }, [coordinate])

  return (
   <YesterdayHourlyView />
  )
}
export default YesterdayScreen;