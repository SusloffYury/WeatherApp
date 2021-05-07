import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useDebounce from '../components/FunctionalComponents/useDebounce';
import NoInternet from '../components/UIComponents/internetNotAvailable';
import MainScreenView from '../components/Views/MainScreenView';
import { ClearInput, ErrorMessage, IsLoadingIndicator } from '../store/AppActionCreators';
import * as Actions from '../store/AppActions';

const MainScreen = props => {
  const [searchTerm, setSearchTerm] = useState('');
  const DebounceSearchTerm = useDebounce(searchTerm, 500);
  const IsError = useSelector(state => state.search.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (DebounceSearchTerm) {
      dispatch(Actions.SearchingCityWeather(DebounceSearchTerm))
    }
  }, [DebounceSearchTerm])

  const clearInput = () => {
    dispatch(ClearInput())
    dispatch(ErrorMessage(''))
    dispatch(IsLoadingIndicator(false))
    setSearchTerm('')
  }

  return (

    <MainScreenView
      navigation={props.navigation}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      ClearInputNull={clearInput}
    />
  )
}
export const NavigateStyle = () => {
  return {
    headerShown: false,
  }
}
export default MainScreen;
