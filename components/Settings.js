import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, TextInput } from 'react-native';


export default class Settings extends Component {
    static navigationOptions = () => ({
        title: 'Ajustes',
        headerStyle: {
            backgroundColor: '#1cc3d9',
            elevation: 0,
        },
        headerTintColor: '#fff'
    })

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.settingContainerHeader}>
                    <Text style={styles.settingTextTitle}>Cuenta</Text>
                </View>
                <View style={styles.settingContainer}>
                    <Text style={styles.settingText}>Cambiar contraseña</Text>
                </View>
                <View style={styles.settingContainer}>
                    <Text style={styles.settingText}>Cerrar sesión</Text>
                </View>
                <View style={styles.settingSeparator}></View>
                <View style={styles.settingContainerHeader}>
                    <Text style={styles.settingTextTitle}>Ayuda</Text>
                </View>
                <View style={styles.settingContainer}>
                    <Text style={styles.settingText}>Política de privacidad</Text>
                </View>
                <View style={styles.settingContainer}>
                    <Text style={styles.settingText}>Términos y condiciones</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',

    },
    settingContainerHeader: {
        borderBottomColor: '#00BDD3',
        borderBottomWidth: 1,
    },

    settingTextTitle: {
        color: '#00BDD3',
        padding: 15,
        fontSize: 20
    },
    settingContainer: {
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
    },

    settingText: {
        color: 'gray',
        padding: 15,
        fontSize: 20
    },
    settingSeparator:{
        padding:10
    }
});
