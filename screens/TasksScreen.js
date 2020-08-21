import React, { Component, useState } from 'react';

import { Button, StyleSheet, FlatList, Text, View, Alert, TouchableOpacity, TextInput, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeStack = createStackNavigator();

export default class TasksScreen extends React.Component {
    constructor(props) {
        super(props);
        this.array = [];

        this.state = {
            arrayHolder:[{
                title:'First Task',
                text:'Text of first task'
            },
            ],
            titleInput_Holder: '',
            textInput_Holder: '',
            priority_Holder: '',
            idIncrement: 0,
        }
    }

    
    componentDidMount() {
        this.setState({ arrayHolder: [...this.array] })
    }

    joinData = () => {
        this.setState({ idIncrement: this.state.idIncrement + 1 })
        this.array.push({
            id: this.state.idIncrement,
            title: this.state.titleInput_Holder,
            text: this.state.textInput_Holder,
            priority: this.state.priority_Holder,
        });
        this.setState({ arrayHolder: [...this.array] })
    }

    Item({ item }) {
        return(
            <View style={styles.taskcontainer}>
                <View style={styles.tasktitle}><Text>{[item.title]}</Text></View>
                <View style={styles.tasktext}><Text>{[item.text]}</Text></View>
            </View>
        );
    }

    TaskList=({ navigation })=> {
        const renderItem = ({ item }) => {
            return (
                <this.Item item={item} />
            );
        };
        this.componentDidMount();

        return (
            <View style={{ flex: 1, justifyContent: "space-between" }}>
                <FlatList
                    data={this.state.arrayHolder}
                    extraData={this.state.arrayHolder}
                    renderItem={renderItem}
                    keyExtractor={(index) => index.toString()}
                />
                <View style={styles.addbutton}><Button
                    title="+"
                    onPress={() => navigation.navigate('NewTask')}
                /></View>
            </View>
        );
    };


    NewTask = ({ navigation }) => {
        return (
            <View style={styles.addtask} >
                <View>
                    <TextInput
                        style={styles.input}
                        onChangeText={data => this.setState({ titleInput_Holder: data })}
                        placeholder={'Task title'}
                        height={30} />
                    <TextInput
                        style={styles.input}
                        multiline
                        numberOfLines={6}
                        onChangeText={data => this.setState({ textInput_Holder: data })} />
                </View>
                <View><Button
                    title="Add"
                    onPress={()=>{this.joinData; navigation.goBack();console.log(this.state.arrayHolder.title)}}
                /></View>
            </View>
        );
    };


    render() {
        return (
        < HomeStack.Navigator initialRouteName = "TaskList" >
            <HomeStack.Screen name="TaskList" component={this.TaskList} />
            <HomeStack.Screen name="NewTask" component={this.NewTask} />
        </HomeStack.Navigator >
           )
    }
}




























/*
const DATA = [
    {
        title: "Task Title",
        text: "Task Text",
    },
];

const Item = ({ item }) => (
    <View style={styles.taskcontainer}>
        <View style={styles.tasktitle}><Text>{[item.title]}</Text></View>
        <View style={styles.tasktext}><Text>{[item.text]}</Text></View>
    </View>
);

const TaskInput = (props) => {
    const [value, onChangeText] = React.useState('');

    return (
        <TextInput
            {...props}
            style={styles.input}
            onChangeText={text => onChangeText(text)}
            value={value}
            placeholderTextColor={'#f0f0f0'}
        />
    );
}


function TaskList({ navigation }) {
    const renderItem = ({ item }) => {
        return (
            <Item item={item} />
        );
    };

    return (
        <View style={{ flex: 1, justifyContent: "space-between" }}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
            <View style={styles.addbutton}><Button
                title="+"
                onPress={() => navigation.navigate('NewTask')}
            /></View>
        </View>
    );
};

function NewTask({ navigation }) {
    return (
        <View style={styles.addtask} >
            <View>
                <TaskInput
                placeholder={'Task title'}
                height={30}/>
            <TaskInput
                multiline
                    numberOfLines={6} />
            </View>
            <View><Button
                title="Add"
                onPress={() => navigation.navigate('TaskList')}
            /></View>
        </View>
    );
};



const HomeStack = createStackNavigator();

export default function TasksScreen() {
    return (
        <HomeStack.Navigator initialRouteName="TaskList">
            <HomeStack.Screen name="TaskList" component={TaskList} />
            <HomeStack.Screen name="NewTask" component={NewTask} />
        </HomeStack.Navigator>
    );
}

*/

















const styles = StyleSheet.create({
    taskcontainer: {
        height: 125,
        width: "95%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#9f9fd6",
        borderWidth: 2,
        borderColor: "#060661",
        margin: 10,
        borderRadius: 10,
    },
    tasktitle: {
        flex: 0.5,
        flexDirection: "row",
        height: "20%",
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        padding: 4,
        borderColor: "#00ff00",
        paddingHorizontal: 2,
        paddingVertical: 4
    },
    tasktext: {
        flex: 1,
        width: "100%",
        borderWidth: 1,
        padding: 4,
        borderColor: "#ff6600",
        textAlign: "center",
        textAlignVertical: "center",
        color: "#ffffff",
        fontSize: 16,
        marginVertical: 2,
    },
    addtask: {
        backgroundColor: "#46976f",
        justifyContent: "space-between",
        flex:1,
    },
    input: {
        width: '95 %',
        borderColor: '#fff',
        backgroundColor: '#c2c2c2',
        borderWidth: 1,
        borderRadius:10,
        margin: 5,
        padding: 2,
    }
});