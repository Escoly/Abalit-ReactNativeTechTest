import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class Modal extends Component {
    render() {
        return (
            <View style={styles.container} >
                <Text style={styles.text}>Modal</Text>
                <Button
                    title="Close"
                    onPress={
                        () => this.props.navigation.goBack()
                    }
                ></Button>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,1)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white'
    }
});
