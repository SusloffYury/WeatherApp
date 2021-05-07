import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View
} from 'react-native';
import Config from 'react-native-config';
import Colors from '../../constants/Colors';

const IsLoading = props => {
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <ActivityIndicator animating={true} color={Config.Accent} size="large" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    borderRadius: 5,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
  },

});
export default IsLoading;
