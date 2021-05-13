import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet, FlatList,
  TouchableOpacity,
  Image
} from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { FetchingUserWeather } from '../../store/AppActions';
import NoDataComponent from './noDataComponent';
import IsLoadingIndicator from './isLoadingComponent';

const margin = 17;
let itemWidth;
let itemHeight;
const window = Dimensions.get("window");

const CityDefault = (props) => {
  const [dimension, setDimesions] = useState({ window });

  useEffect(() => {
    const onChange = ({ window }) => {
      setDimesions({ window })
    }
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });
  itemWidth = (dimension.window.width / 2) - (margin * 3)
  itemHeight = (dimension.window.height) - (margin * 5.5)

  const goToDetail = () => {
    props.navigation.navigate('DetailCity', { name: props.cityName })
   
  }

  return (
    <TouchableOpacity onPress={goToDetail}>
      <View style={{
        width: (itemWidth > itemHeight)
          ? itemHeight : itemWidth,
        height: (itemWidth > itemHeight)
          ? itemHeight - margin * 1.8 :
          itemWidth - margin * 1.8,
        borderWidth: 1,
        borderColor: '#0a0a0a', margin: margin * 0.9,
      }}>
        <View style={styles.city}>
          <Text>{props.cityName}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={{ width: itemWidth / 5, height: itemWidth / 5 }}
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
  const {
    IsLoadingIndicator: IsLoading,
    error: ErrorMessage,
    defaultCityWeather: weather } = useSelector(state => state.search)
  
    
  return (
    <View>
      {(IsLoading) ?
        (<IsLoadingIndicator />) :
        (ErrorMessage === '400') ?
          (<NoDataComponent />) :
          (<FlatList
            data={weather}
            keyExtractor={item => item.id}
            numColumns={2}
            refreshing={IsLoading}
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

  city: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',

  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  temp: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default CityWeather;
