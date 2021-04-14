import React from 'react';
import { View } from "react-native";
import { useSelector } from 'react-redux';
import ErrorComponent from './errorCityComponent';
import SearchingCity from './searchingCityResult';
import IsLoadingIndicator from './isLoadingComponent';

const SearchingCityWeather = props => {
  const IsLoading = useSelector(state => state.search.IsLoadingIndicator)
  const ErrorMessage = useSelector(state => state.search.error)
  return (
    <View>
      {(ErrorMessage === '404')
        ? <ErrorComponent enterData={props.enterData} />
        :
        (IsLoading) ? (<IsLoadingIndicator />) : <SearchingCity />
      }
    </View>
  )
}
export default SearchingCityWeather;
