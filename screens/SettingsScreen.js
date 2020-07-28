  import * as React from 'react';
  import { Button, StyleSheet, Text, View } from 'react-native';
  import { DrawerActions } from '@react-navigation/native';
  
  export default function SettingsScreen ({ navigation }) {
    return (
      <>
        <View style={styles.topBar}>
          <Text style={styles.topText}>Organaizer</Text>
          <Button
            title="  =  "
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          />
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Settings!</Text></View>
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