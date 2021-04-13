import React, { useEffect, useState } from 'react';
import * as Actions from '../store/AppActions'
import { useDispatch} from 'react-redux';
import { ClearInput, ErrorMessage } from '../store/AppActionCreators';
import useDebounce from '../components/FunctionalComponents/useDebounce';
import MainScreenView from '../components/Views/MainScreenView';

const MainScreen = props => {
  const [searchTerm, setSearchTerm] = useState('');
  const DebounceSearchTerm = useDebounce(searchTerm, 500);
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
