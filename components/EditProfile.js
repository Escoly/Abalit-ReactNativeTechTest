import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, TextInput } from 'react-native';


export default class EditProfile extends Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Perfil',
        headerStyle: {
            backgroundColor: '#1cc3d9',
            elevation: 0,
        },
        headerTintColor: '#fff',
        headerRight: (
            <TouchableHighlight
                style={{ marginRight: 10 }}
                onPress={
                    () => { navigation.navigate('Profile') }
                }
            >
                <Image
                    style={{ width: 30, height: 30 }}
                    source={require('../resources/icons/ic_done.png')}
                />
            </TouchableHighlight>
        )
    })

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.userProfilePicContainer}>
                    <Image
                        style={styles.userProfilePic}
                        source={require('../resources/images/profilePic.jpg')} />
                    <View style={styles.changePhotoOverlayContainer}>
                        <Image
                            style={styles.photoOverlayIcon}
                            source={require('../resources/icons/ic_camera_white.png')} />
                        <Text style={styles.overlayPicText}>Cambiar foto</Text>
                    </View>
                </View>
                <View style={styles.profileInfoContainer}>
                    <View style={styles.profileInfoSection}>
                        <Text style={styles.profileInfoTitle}>Nombre de usuario</Text>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Bruce Miller" />
                    </View >
                    <View style={styles.profileInfoSection}>
                        <Text style={styles.profileInfoTitle}>Correo eléctronico</Text>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="bmiller@gmail.com" />
                    </View>
                    <View style={styles.profileInfoSection}>
                        <Text style={styles.profileInfoTitle}>Estado</Text>
                        <TextInput
                            style={styles.bigInputStyle}
                            placeholder="¡Dinos cómo eres!" />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 20

    },
    userProfilePicContainer: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    userProfilePic: {
        borderRadius: 200,
        height: 200,
        width: 200,
    },
    changePhotoOverlayContainer: {
        borderRadius: 200,
        height: 200,
        width: 200,
        backgroundColor: 'rgba(1,1,1,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },
    photoOverlayIcon: {
        height: 40,
        width: 40
    },
    overlayPicText: {
        fontSize: 20,
        color: 'white'
    },
    profileInfoTitle: {
        color: 'gray',
        fontSize: 15
    },
    inputStyle: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        fontSize: 20
    },
    profileInfoSection: {
        padding: 10
    },
    bigInputStyle: {
        height: 80,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        fontSize: 20

    }
});
