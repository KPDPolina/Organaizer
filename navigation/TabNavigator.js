import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import CalendarScreen from '../screens/CalendarScreen'
import TasksScreen from '../screens/TasksScreen'
import GroupsScren from '../screens/GroupsScreen'
import NotessScren from '../screens/NotesScreen'


const Tab = createMaterialTopTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator tabBarOptions={{
      activeTintColor: "#088", //цвет текста активной вкладки
      pressColor: "#088", //цвет ряби при нажатии на вкладку (только андроид)
      indicatorStyle: { backgroundColor: "#099", }, //стиль индикатора вкладок ///цвет линии-показателя активной вкладки
    }}>
      <Tab.Screen name="Calendar"
        component={CalendarScreen}
        // tabBarOptions={{
        //   tabBarLabel: "Calerdar",
        //   showIcon: true ,
        //   tabBarIcon: () => (
        //     <Icon name="home" size={30} color="#900" />)
        //   }} 
        />
      <Tab.Screen name="Tasks" component={TasksScreen} />
      <Tab.Screen name="Groups" component={GroupsScren} />
      <Tab.Screen name="Notes" component={NotessScren} />
    </Tab.Navigator>
  );
}
