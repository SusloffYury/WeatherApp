import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../store/AppActions';
import DailyView from '../components/Views/DailyScreenView';
import NoInternet from '../components/UIComponents/noDataComponent';
import { useNetInfo } from "@react-native-community/netinfo";
import { SafeAreaView } from 'react-native';

const DailyScreen = props => {
  const dispatch = useDispatch();
  const [isConnected, setIsConnected] = useState(true)
  const connect = useNetInfo();
  const {
    userCoordinate: coordinate,
    error: IsError
  } = useSelector(state => state.search)


  useEffect(
    () => {
      dispatch(Actions.GetCity(coordinate));
      dispatch(Actions.FetchingDailyWeather(coordinate));
    }, [])

  useEffect(() => {
    if (connect.isConnected !== null || connect.isConnected === false) {
      setIsConnected(connect.isConnected)
    }
  }, [connect.isConnected])
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {(isConnected) ?
        (<DailyView />) :
        (<NoInternet />)}
    </SafeAreaView>
  )
}
export default DailyScreen;
