import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { BottomTabBar } from 'react-navigation-tabs';



export default class Login extends Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#00BDD3',
            elevation: 0,
        },
        headerTintColor: '#fff'
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <Image style={styles.logo} source={require('../resources/images/logo.png')} />

                </View>
                <View style={{ flex: 1 }}>

                    <View style={styles.textInputContainer}>
                        <Image source={require('../resources/icons/user.png')} style={styles.icon} />
                        <TextInput style={styles.textInput}
                            placeholder="e-mail"
                        />
                    </View>
                    <View style={styles.textInputContainer}>
                        <Image source={require('../resources/icons/lock2.png')} style={styles.icon} />
                        <TextInput style={styles.textInput}
                            placeholder="contraseña"
                        />
                    </View>

                    <TouchableOpacity style={styles.registrarmeButtonContainer}
                        onPress={
                            () => { this.props.navigation.navigate('Home') }
                        }>
                        <Text style={styles.registrarmeButton}>
                            Log In
                    </Text>
                    </TouchableOpacity>

                    <Text style={styles.notRegisteredMessage}
                        onPress={
                            () => { this.props.navigation.navigate('Register') }
                        }
                    >No tienes cuenta? Registrate aquí!
                </Text>

                    <Text style={styles.legalAdvise}>
                        Aviso Legal
                </Text>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#00BDD3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        marginTop: 50,
        height: 200,
        width: 200
    },
    textColor: {
        color: 'white'
    },
    textInputContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0099A6',
        marginBottom: 10,
        borderRadius: 6,
        maxHeight: 40
    },

    textInput: {
        width: 200,

    },
    icon: {
        margin: 10,
        width: 20,
        height: 20

    },
    registrarmeButtonContainer: {
        backgroundColor: 'white',
        borderRadius: 6,
        marginTop: 10,
        marginBottom: 10

    },
    registrarmeButton: {
        color: '#00BDD3',
        textTransform: 'uppercase',
        alignSelf: 'center',
        paddingLeft: 75,
        paddingRight: 75,
        paddingTop: 10,
        paddingBottom: 10
    },
    notRegisteredMessage: {
        color: 'white',
        alignSelf: 'center',

    },
    legalAdvise: {
        flex: 1,
        color: 'white',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0,
        padding: 10
    }
});
