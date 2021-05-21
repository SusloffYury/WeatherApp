import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NoInternet from '../components/UIComponents/noDataComponent';
import HourlyWeatherCity from '../components/Views/HourlyScreenView';
import { useNetInfo } from "@react-native-community/netinfo";
import * as Actions from '../store/AppActions';
import { SafeAreaView } from 'react-native';

const HourlyScreen = props => {
  const dispatch = useDispatch();
  const [isConnect, setIsConnected] = useState(true)
  const connect = useNetInfo();

  const {
    error: IsError,
    userCoordinate: coordinate,
  } = useSelector(state => state.search)

  useEffect(
    () => {
      dispatch(Actions.GetCity(coordinate));
      dispatch(Actions.FileSystems(coordinate));
      dispatch(Actions.FetchingHourlyWeather(coordinate))
    }, [coordinate])

  useEffect(() => {
  setIsConnected(connect.isConnected)
   
  }, [connect.isConnected])

 
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {(isConnect) ?
        (<HourlyWeatherCity />) :
        (<NoInternet />)}
    </SafeAreaView>
  )
}
export default HourlyScreen;
