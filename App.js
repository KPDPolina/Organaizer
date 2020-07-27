import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, Button, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';

import DrawerNavigator from './navigation/DrawerNavigator'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#099" barStyle='light-content' />
      <View style={styles.topBar}>
        <Text style={styles.topText}>Organaizer</Text>
        <Button title="="/>
      </View>
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


    // <NavigationContainer>
    //   <StatusBar backgroundColor="#099" barStyle='light-content' />
    //   <View style={styles.topBar}>
    //     <Text style={styles.topText}>Organaizer</Text>
    //   </View>
    //   <Tab.Navigator tabBarOptions={{
    //     activeTintColor: "#088", //цвет текста активной вкладки
    //     pressColor: "#088", //цвет ряби при нажатии на вкладку (только андроид)
    //     indicatorStyle: { backgroundColor: "#099", } //стиль индикатора вкладок ///цвет линии-показателя активной вкладки
    //   }}>
    //     <Tab.Screen name="Calendar" component={CalendarScreen} />
    //     <Tab.Screen name="Settings" component={TasksScreen} />
    //     <Tab.Screen name="Calendar1" component={CalendarScreen} />
    //     <Tab.Screen name="Settings1" component={TasksScreen} />
    //   </Tab.Navigator>
    // </NavigationContainer>