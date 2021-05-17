
import React, { useState, useEffect, useCallback } from 'react';
import * as Actions from '../../store/AppActions';
import * as SplashScreen from 'expo-splash-screen';
import { useDispatch } from 'react-redux';
import MainNavigator from '../../navigation/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { Notifications } from 'react-native-notifications';
import { Platform } from 'react-native';
import UserInactivity from 'react-native-user-inactivity';
import { View, Text } from 'react-native';

export const SplashScreenLoader = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  const dispatch = useDispatch();
  const [active, setActive] = useState(true);
  const [timer, setTimer] = useState(30000);

  Notifications.events().registerNotificationOpened(
    (notification, completion) => {
      completion(
        () => { null }

      );
      console.log(`Notification opened: ${notification.payload}`);
    }
  );

  useEffect(() => {
    async function prepare() {
      try {
        Notifications.registerRemoteNotifications();
        Notifications.events().registerNotificationReceivedForeground(
          (notification, completion) => {
            completion({ alert: true, sound: true, badge: false });
            console.log(
              `Notification received in foreground: ${notification.title} : ${notification.body}`
            );
          }
        );
        Notifications.events().registerNotificationOpened(
          (notification, completion) => {
            completion(
              () => {
                //  Platform.OS === 'ios' ? null : dispatch(dailyhourlyactions.openFile())
                return null
              });
            console.log(`Notification opened: ${notification.payload}`);
          });
        await SplashScreen.preventAutoHideAsync();
        await dispatch(Actions.FetchingUserWeather());
        await dispatch(Actions.GetCoordinate());
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, [dispatch]);
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer>
      {
        (active) ?
          (
            <UserInactivity
              isActive={active}
              timeForInactivity={timer}
              onAction={(isActive) => {
                setActive(isActive)
              }}

              skipKeyboard={false}
              style={{ flex: 1 }}
            >
              <MainNavigator
                onLayout={onLayoutRootView} />
            </UserInactivity >
          ) :
          (
            <View style={{
              flex: 1,
              backgroundColor: "#fff",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <Text>You have been innactive for minute</Text>
              <Text>Please restart the app</Text>
            </View>)
      }
    </NavigationContainer>)

}

