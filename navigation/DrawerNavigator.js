import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator'

import SettingsScreen from '../screens/SettingsScreen'
import ContactsScreen from '../screens/ContactsScreen'

const Drawer = createDrawerNavigator();

export default function DrawerNavigator(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" children={TabNavigator}/>
            <Drawer.Screen name="Settings" component={SettingsScreen}/>
            <Drawer.Screen name="Contacts" component={ContactsScreen}/>
        </Drawer.Navigator>
    );
}