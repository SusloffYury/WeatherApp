import React, { useState, useEffect } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  Platform
} from 'react-native';

import { BottomSheet, ListItem } from 'react-native-elements'
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../../constants/Colors';
import Config from 'react-native-config';
import * as Actions from '../../store/AppActions';
import HourlyWeatherCity from '../UIComponents/hourlyWeatherComponent';
import IsLoadingIndicator from '../UIComponents/isLoadingComponent';
import NoDataComponent from '../UIComponents/noDataComponent';
const itemWidth = (Dimensions.get('window').width);
const itemHeight = (Dimensions.get('window').height);

const YesterdayHourlyView = props => {
  const dispatch = useDispatch();
  const {
    cityHourlyWeather: hourlyWeather,
    userCoordinate: coordinate,
    IsLoadingIndicator: IsLoading,
    error: ErrorMessage,
    LoadingFile: file,
  } = useSelector(state => state.search)
  
 const [isVisible, setIsVisible] = useState(false);
  const list = [
    {
      title: 'Save file',
      onPress: () => dispatch(Actions.OpenFile())

    },
    {
      title: 'Download file',
      onPress: () => dispatch(Actions.FileSystems(coordinate))
    },
    {
      title: 'Cancel',
      containerStyle: { backgroundColor: 'red' },
      titleStyle: { color: 'white' },
      onPress: () => setIsVisible(false),
    },
  ];
  const choiseOs = () => {
    return (
      Platform.OS === 'android'
        ? setIsVisible(true) :
        dispatch(Actions.OpenFile())
    )
  }
  return (
    <SafeAreaView style={styles.safearea}>
      {IsLoading ? (<IsLoadingIndicator />) :
        (ErrorMessage === '400') ?
          (<NoDataComponent />) :
          (<View style={styles.screen}>
            <View style={{
              position: 'absolute',
              left: itemWidth / 2.4,
              top: itemHeight / 1.5,
              zIndex: 3,
            }}>
              <TouchableOpacity style={styles.touch}
                onPress={
                  () => choiseOs()
                }>
                <Image source={require('../../assets/add.png')}
                  style={styles.ImageAdd}
                />
              </TouchableOpacity>
            </View>
            <FlatList data={file}
              keyExtractor={item => item.id}
              refreshing={IsLoading}
              onRefresh={() => dispatch(Actions.FileSystems(coordinate))}
              renderItem={itemData =>
                <HourlyWeatherCity
                  date={itemData.item.date}
                  temperature={itemData.item.temp}
                  icon={itemData.item.icon} />
              } />
          </View >)}
      <BottomSheet
        isVisible={isVisible}
        containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}
      >
        {list.map((l, i) => (
          <ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress}>
            <ListItem.Content>
              <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: 10,
    backgroundColor: Colors.primary,
    flex: 1
  },
  cityName: {
    marginVertical: 20,
    marginLeft: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  cityText: {
    fontSize: 30,
    fontWeight: '600',
  },
  safearea: {
    flex: 1
  },
  ImageAdd: {
    width: 50,
    height: 50,

  },
  touch: {
    width: 70,
    height: 70,
  },
})

export default YesterdayHourlyView;
