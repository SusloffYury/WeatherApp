import React from 'react';
import { View, Text, Dimensions, StyleSheet, FlatList } from "react-native";
const margin = 17;
const itemWidth = (Dimensions.get('window').width / 2) - (margin * 3);

const CityDefault = (props) => {
    return (
        <View style={styles.screen}>
            <Text>{props.cityName}</Text>
            <View style={styles.image}>{props.image}</View>
            <Text>{props.temperature}</Text>
        </View>
    )
}

const CityWeather = props => {
    return (
        <FlatList
            data={props.data}
            keyExtractor={item => item.id}
            numColumns={2}
            renderItem={itemData => (
                <CityDefault
                    cityName={itemData.item.city}
                    temperature={itemData.item.temp} />
            )} />

    )
}
const styles = StyleSheet.create({
    screen: {
        width: itemWidth,
        height: itemWidth - margin * 1.8,
        borderWidth: 1,
        borderColor: '#0a0a0a',
        margin: margin * 0.9,
    }
})
export default CityWeather;
