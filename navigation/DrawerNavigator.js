import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';

import SettingsScreen from '../screens/SettingsScreen'
import ContactsScreen from '../screens/ContactsScreen'

import TabNavigator from './TabNavigator'

const Drawer = createDrawerNavigator();
export default function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            {/* <Drawer.Screen name="Home" children={TabNavigator}/> */}
            <Drawer.Screen name="Settings" component={SettingsScreen} />
            <Drawer.Screen name="Contacts" component={ContactsScreen} />
        </Drawer.Navigator>
    );
}

function Home({ navigation }) {
    return (
      <>
        <View style={styles.topBar}>
          <Text style={styles.topText}>Organaizer</Text>
          <Button
            title="="
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          />
        </View>
        <TabNavigator/>
      </>
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
  });
  