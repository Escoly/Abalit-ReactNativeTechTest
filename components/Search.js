import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Search extends Component {
    static navigationOptions = {
        title: 'Buscar',
        headerStyle: {
            backgroundColor: '#1cc3d9',
            elevation: 0,
        },
        headerTintColor: '#fff'
    }

    render() {

        return (
            <View style={styles.container}>
                <Text>Hello from Search</Text>
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
