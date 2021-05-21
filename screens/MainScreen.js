import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native';
import useDebounce from '../components/FunctionalComponents/useDebounce';
import NoInternet from '../components/UIComponents/internetNotAvailable';
import MainScreenView from '../components/Views/MainScreenView';
import { ClearInput, ErrorMessage, IsLoadingIndicator } from '../store/AppActionCreators';
import * as Actions from '../store/AppActions';
import { useNetInfo } from "@react-native-community/netinfo";

const MainScreen = props => {
  const [searchTerm, setSearchTerm] = useState('');
  const DebounceSearchTerm = useDebounce(searchTerm, 500);
  const [isConnected, setIsConnected] = useState(true)
  const connect = useNetInfo();
  const dispatch = useDispatch();

  useEffect(() => {
    if (DebounceSearchTerm) {
      dispatch(Actions.SearchingCityWeather(DebounceSearchTerm))
    }
  }, [DebounceSearchTerm])

  useEffect(() => {
    if (connect.isConnected !== null) {
      setIsConnected(connect.isConnected)
    }
  }, [connect.isConnected])
  
  const clearInput = () => {
    dispatch(ClearInput())
    dispatch(ErrorMessage(''))
    dispatch(IsLoadingIndicator(false))
    setSearchTerm('')
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {(isConnected) ?
        (<MainScreenView
          navigation={props.navigation}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          ClearInputNull={clearInput}
        />) : (<NoInternet />)
      }</SafeAreaView>
  )
}
export const NavigateStyle = () => {
  return {
    headerShown: false,
  }
}
export default MainScreen;
