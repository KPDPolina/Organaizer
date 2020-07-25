import * as React from 'react';
import { Text, View, StatusBar, } from 'react-native';
import TabNavigator from '../navigation/TabNavigator'

export default function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <StatusBar backgroundColor="#099" barStyle='light-content' />
            <View style={styles.topBar}>
                <Text style={styles.topText}>Organaizer</Text>
            </View>
            <TabNavigator />
        </View>
    );
}