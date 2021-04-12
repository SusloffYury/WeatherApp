
import React, { useState, useEffect, useCallback } from 'react';
import * as Actions from '../../store/AppActions';
import * as SplashScreen from 'expo-splash-screen';
import { useDispatch } from 'react-redux';
import MainNavigator from '../../navigation/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';
export const SplashScreenLoader = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    async function prepare() {
      try {
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
      <MainNavigator
        onLayout={onLayoutRootView}
         />
    </NavigationContainer>

  );
}


