import * as React from 'react';
import { DrawerActions } from '@react-navigation/native';
import {
  Text,
  View,
  FlatList,
  TextInput,
  Button,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import * as Contacts from 'expo-contacts';

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
            borderTopWidth: 1,
            borderTopColor: '#9cc',
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
        <View style={{backgroundColor: "#099", height:41, paddingTop: 3, paddingRight: 3, paddingLeft: 3,}}>
          <TextInput
            placeholder="Search"
            placeholderTextColor="#fff"
            style={{
              borderRadius: 35,
              backgroundColor: '#7bb',
              height: 35,
              fontSize: 20,
              padding: 5,
              color: 'white',
            }}
            onChangeText={value => this.searchContacts(value)}
          />
        </View>
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
})