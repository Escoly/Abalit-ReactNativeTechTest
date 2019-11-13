import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Notifications extends Component {
    static navigationOptions = {
        title: 'Notificaciones',
        headerStyle: {
            backgroundColor: '#1cc3d9',
            elevation: 0,
        },
        headerTintColor: '#fff'
    }

    render() {

        return (
            <View style={styles.container}>
                <Text>Hello from Notifications</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
