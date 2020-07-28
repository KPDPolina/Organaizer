import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

export default function ContactsScreen ({ navigation }) {
  return (
    <>
      <View style={styles.topBar}>
        <Text style={styles.topText}>Organaizer</Text>
        <Button
          title="  =  "
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        />
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Contacts!</Text></View>
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

////////////////////////////////////////////////////////////////////////////////////////////


// const ContactsStack = createStackNavigator();
// const ContactsScreen = () => (
//   <ContactsStack.Navigator>
//     <ContactsStack.Screen
//       name="ContactsList"
//       component={ContactsList}
//       options={{
//         headerTitle: 'Contacts',
//       }}
//     />
//     {/* <ContactsStack.Screen
//       name="ContactDetails"
//       component={ContactDetails}
//       options={({ route }) => {
//         return {
//           headerTitle: `${route.params.contact.name.first} ${route.params.contact.name.last}`,
//         };
//       }}
//     /> */}
//   </ContactsStack.Navigator>
// );