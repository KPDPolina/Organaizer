import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, Button, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#099" barStyle='light-content' />
      <DrawerNavigator />
    </NavigationContainer>
  );
}
