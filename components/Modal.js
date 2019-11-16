import React, { Component } from 'react';
import { StyleSheet, Modal, Button, Text, TouchableHighlight, View, Alert } from 'react-native';

export default class ModalComponent extends Component {
    render() {
        const { onClose } = this.props
        return (
            <View style={styles.container} >
                <View style={styles.closeButtonContainer}>
                    <Text style={styles.closeButton} onPress={() => onClose()}>X</Text>
                </View>
                <View style={styles.modalTextContainer}>
                    <Text style={styles.title}>Opciones</Text>
                    <Text style={styles.text}>¿Qué quieres hacer con esta publicación?</Text>
                    <View style={styles.modalButtonsContainer}>
                        <Text style={styles.modalButtons}>COMPARTIR</Text>
                        <Text style={styles.modalButtons}>REPORTAR</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 6,
        width: 300,
        height: 180,
        padding: 20,
    },
    closeButtonContainer: {
        position: 'absolute',
        right: 15,
        top: 10
    },
    closeButton: {
        fontSize: 20
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        paddingBottom: 10
    },
    text: {
        fontSize: 20
    },
    modalTextContainer: {

    },
    modalButtonsContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    modalButtons: {
        color: '#00BDD3',
        textTransform: 'uppercase',
        fontSize: 20
    },


});