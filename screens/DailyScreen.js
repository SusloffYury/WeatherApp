import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../store/AppActions';
import DailyView from '../components/Views/DailyScreenView';

const DailyScreen = props => {
  const dispatch = useDispatch();
  const coordinate = useSelector(state => state.search.userCoordinate)

 
  useEffect(
    () => {
      dispatch(Actions.GetCity(coordinate));
      dispatch(Actions.FetchingDailyWeather(coordinate));
    }, [])
  
  return (
    <DailyView/>
     
  )
}
export default DailyScreen;
