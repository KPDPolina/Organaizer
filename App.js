import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, Button, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';

import DrawerNavigator from './navigation/DrawerNavigator'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#099" barStyle='light-content' />
      {/* <View style={styles.topBar}>
        <Text style={styles.topText}>Organaizer</Text>
        <Button title="="/>
      </View> */}
      <DrawerNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    height: 40,
    backgroundColor: "#099",
    justifyContent: 'space-between'
  },
  topText: {
    fontSize: 25,
    color: "#fff",
    fontStyle: "italic",
  }
})
