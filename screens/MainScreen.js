import React, { useEffect, useState } from 'react';
import * as Actions from '../store/AppActions'
import { useDispatch, useSelector } from 'react-redux';
import { ClearInput, ErrorMessage } from '../store/AppActionCreators';
import useDebounce from '../components/FunctionalComponents/useDebounce';
import MainScreenView from '../components/Views/MainScreenView';
import NoInternet from '../components/UIComponents/internetNotAvailable';

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
    dispatch(ErrorMessage())
    setSearchTerm('')
  }

  return (
    (IsError === '404') ?
      <NoInternet /> :
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
