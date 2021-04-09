import React, { useEffect, useState } from 'react';
import * as Actions from '../store/AppActions'
import { useDispatch, useSelector } from 'react-redux';
import { ClearInput, ErrorMessage } from '../store/AppActionCreators';
import useDebounce from '../components/FunctionalComponents/useDebounce';
import MainScreenView from '../components/Views/MainScreenView';
import {SplashScreenLoader} from '../components/FunctionalComponents/SplashScreenLoader';

const MainScreen = props => {
  const [searchTerm, setSearchTerm] = useState('');
  const DebounceSearchTerm = useDebounce(searchTerm, 500);
  const dispatch = useDispatch();

  useEffect(() => {
    if (DebounceSearchTerm) {
      dispatch(Actions.SearchingCityWeather(DebounceSearchTerm))
    }
  }, [DebounceSearchTerm])

 

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('tabPress', (e) => {
        e.preventDefault();
        dispatch(FetchingUserWeather());
        console.log('tabMain')
     });
       return unsubscribe;
  }, [props.navigation]);

  
  const weather = useSelector(state => state.search.defaultCityWeather)
  const weatherCity = useSelector(state => state.search.searchingCity)
  const errorMessage = useSelector(state => state.search.error)

  const clearInput = () => {
    dispatch(ClearInput())
    dispatch(ErrorMessage())
    setSearchTerm('')
   }
   
  return (
    <MainScreenView
      weather={weather}
      weatherCity={weatherCity}
      errorMessage={errorMessage}
      navigation={props.navigation}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      ClearInputNull={clearInput}
      />
  )
}

export const NavigateStyle = () => {
  return {
    headerShown: false
  }
}
export default MainScreen;
