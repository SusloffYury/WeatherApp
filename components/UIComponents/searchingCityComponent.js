import React from 'react';
import { View } from "react-native";
import ErrorComponent from './errorCityComponent';
import SearchingCity from './searchingCityResult';


const SearchingCityWeather = props => {
  return (
    <View>
      {(props.error === '404')
        ? <ErrorComponent enterData={props.enterData} />
        :
        <SearchingCity
          cityName={props.cityName}
          temperature={props.temperature}
          icon={props.icon}
        />
      }
    </View>
  )
}


export default SearchingCityWeather;
