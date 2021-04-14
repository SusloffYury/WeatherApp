import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet, FlatList,
  TouchableOpacity,
  Image
} from "react-native";
import { useSelector,useDispatch } from 'react-redux';
import { FetchingUserWeather } from '../../store/AppActions';
import NoDataComponent from './noDataComponent';
import IsLoadingIndicator from './isLoadingComponent';
const margin = 17;
const itemWidth = (Dimensions.get('window').width / 2) - (margin * 3);


const CityDefault = (props) => {

  const goToDetail = () => {
    props.navigation.navigate('DetailCity', { name: props.cityName })
  }

  return (
    <TouchableOpacity onPress={goToDetail}>
      <View style={styles.screen}>
        <View style={styles.city}>
          <Text>{props.cityName}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image}
            source={props.icon} />
        </View>
        <View style={styles.temp}>
          <Text>{`${props.temperature} C`} </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
const CityWeather = props => {
  const dispatch = useDispatch();
  const IsLoading = useSelector(state => state.search.IsLoadingIndicator);
  const ErrorMessage = useSelector(state => state.search.error);
  const weather = useSelector(state => state.search.defaultCityWeather);
  return (
    <View>
      { (IsLoading) ?
        (<IsLoadingIndicator />) :
        (ErrorMessage === '400') ?
          (<NoDataComponent />) :
          (<FlatList
            data={weather}
            keyExtractor={item => item.id}
            numColumns={2}
            refreshing={IsLoading }
            onRefresh={() => dispatch(FetchingUserWeather())}
            renderItem={itemData => (
              <CityDefault
                navigation={props.navigation}
                cityName={itemData.item.cityName}
                temperature={itemData.item.temperature}
                icon={itemData.item.icon}
              />)}
          />)
      }
    </View>
  )
}
const styles = StyleSheet.create({
  screen: {
    width: itemWidth,
    height: itemWidth - margin * 1.8,
    borderWidth: 1,
    borderColor: '#0a0a0a',
    margin: margin * 0.9,

  },
  city: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',

  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: itemWidth / 5,
    height: itemWidth / 5
  },
  temp: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default CityWeather;
