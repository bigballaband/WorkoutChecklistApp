 import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import {Homepage} from "./src/screens";



export default function App() {
  let [fontsLoaded] = useFonts({
    'BacasimeAntique_Semibold': require('./assets/fonts/BacasimeAntique-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />
  } else {
  return (
    <Homepage />
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
