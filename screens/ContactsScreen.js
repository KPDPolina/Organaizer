import * as React from 'react';
import { DrawerActions } from '@react-navigation/native';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TextInput,
  Button,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import * as Contacts from 'expo-contacts';
import { ScrollView } from 'react-native-gesture-handler';

export default class ContactsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      contacts: []
    };
  }

  loadContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status !== 'granted') {
      return;
    }
    const { data } = await Contacts.getContactsAsync({ fields: [Contacts.Fields.PhoneNumbers] });
    console.log(data);
    this.setState({ contacts: data, inMemoryContacts: data, isLoading: false });
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    this.loadContacts();
  }

  renderItem({ item }) {
    if (item.phoneNumbers && item.phoneNumbers.length)
      return (
        <View style={{ flex: 1 }}>
          <Text style={{
            color: '#099',
            fontWeight: 'bold',
            fontSize: 20,
          }}>
            {item.firstName + ' '} {item.lastName}
          </Text>
          <Text style={{
            color: '#000',
            fontWeight: 'bold',
            fontSize: 17,
          }}>
            {item.phoneNumbers[0].number}
          </Text>
        </View>
      );
  }

  searchContacts = value => {
    const filteredContacts = this.state.inMemoryContacts.filter(contact => {
      let contactLowercase = (
        contact.firstName +
        ' ' +
        contact.lastName
      ).toLowerCase();

      let searchTermLowercase = value.toLowerCase();

      return contactLowercase.indexOf(searchTermLowercase) > -1;
    });
    this.setState({ contacts: filteredContacts });
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.topBar}>
          <Text style={styles.topText}>Organaizer</Text>
          <Button
            title="  =  "
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          />
        </View>
        <TextInput
          placeholder="Search"
          placeholderTextColor="#fff"
          style={{
            backgroundColor: '#add',
            height: 50,
            fontSize: 30,
            padding: 10,
            color: 'white',
            borderTopWidth: 1,
            borderTopColor: '#077',
            borderBottomWidth: 1,
            borderBottomColor: '#077',
          }}
          onChangeText={value => this.searchContacts(value)}
        />
        <View style={{ flex: 1, paddingBottom: 5, paddingLeft: 3, paddingRight: 3 }}>
          {this.state.isLoading ? (
            <View style={{
              ...StyleSheet.absoluteFill,
              alignItems: 'center',
              justifyContent: 'center'
            }}
            >
              <ActivityIndicator size='large' color="#099" />
            </View>
          ) : null}
          <FlatList
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#077',
            }}
            data={this.state.contacts}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={() => (
              <View style={{
                alignItems: 'center',
                paddingTop: 20,
              }}>
                <Text style={{
                  fontSize: 20,
                  color: "#777"
                }}>No Contacts Found</Text>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
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
    paddingStart: 10,
  }
});




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// export default function ContactsScreen ({ navigation }) {
//   return (
//     <>
//       <View style={styles.topBar}>
//         <Text style={styles.topText}>Organaizer</Text>
//         <Button
//           title="  =  "
//           onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
//         />
//       </View>
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Contacts!</Text></View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   topBar: {
//     flexDirection: 'row',
//     height: 40,
//     backgroundColor: "#099",
//     justifyContent: 'space-between'
//   },
//   topText: {
//     fontSize: 25,
//     color: "#fff",
//     fontStyle: "italic",
//   }
// });

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