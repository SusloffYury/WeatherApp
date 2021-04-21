import React from 'react';
import Colors from '../../constants/Colors';
import {
  ActivityIndicator,
  Modal,
  StyleSheet,
  View
} from 'react-native';

const IsLoading = props => {
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <ActivityIndicator animating={true} color={Colors.primary} size="large" />
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
    backgroundColor: Colors.primary,
    borderRadius: 5,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
  },

});
export default IsLoading;
