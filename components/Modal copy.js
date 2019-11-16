import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';


export default class ModalComponent extends Component {
    render() {
        return (
            <View style={styles.container} >
                <Text style={styles.title}>Opciones</Text>
                <Text style={styles.text}>¿Qué quieres hacer con esta publicación?</Text>
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold'
    },
    text: {

    }
});
