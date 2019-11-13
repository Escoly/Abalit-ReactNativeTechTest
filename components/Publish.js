import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Publish extends Component {
    static navigationOptions = {
        title: 'Publicar',
        headerStyle: {
            backgroundColor: '#1cc3d9',
            elevation: 0,
        },
        headerTintColor: '#fff'
    }

    render() {

        return (
            <View style={styles.container}>
                <Text>Hello from Publish</Text>
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
