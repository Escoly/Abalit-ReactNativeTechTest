import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, TextInput, TouchableHighlight } from 'react-native';


export default class CreatePost extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Crear publicación',
        headerStyle: {
            backgroundColor: '#1cc3d9',
            elevation: 0,
        },
        headerTintColor: '#fff',
        headerRight: (
            <TouchableHighlight
                style={{ marginRight: 10 }}
                onPress={
                    () => { navigation.navigate('Publish') }
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
                <ScrollView>
                    <View style={styles.uploadImageContainer}>
                        <View style={styles.imageIconBackground} >
                            <Image style={styles.imageIcon}
                                source={require('../resources/icons/ic_photo_frame.png')}></Image>
                        </View>
                        <View style={styles.uploadImageTextContainer}>
                            <Text style={styles.uploadImageTextTitle}>Titulo</Text>
                            <TextInput style={styles.uploadImageTextInput}></TextInput>
                        </View>
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.title}>Descripción</Text>
                        <View style={styles.descriptionInputContainer}>
                            <TextInput style={styles.descriptionInput} placeholder='Escribe algo...' />
                        </View>
                    </View>
                    <View style={styles.locationContainer}>
                        <Text style={styles.title}>¿Dónde?</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 20
    },
    uploadImageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 0.5,
        paddingBottom: 20
    },
    imageIconBackground: {
        width: 100,
        height: 100,
        backgroundColor: 'rgba(1,1,1,0.5)',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1
    },
    imageIcon: {
        width: 70,
        height: 70,
    },
    uploadImageTextContainer: {
        padding: 10
    }, uploadImageTextTitle: {
        color: 'gray',
        fontSize: 19
    },
    uploadImageTextInput: {
        borderBottomColor: '#00BDD3',
        borderBottomWidth: 2,
        width: 200
    },
    descriptionContainer: {
        paddingTop: 10,
        paddingBottom: 10
    },
    descriptionInputContainer: {
        borderColor: 'lightgray',
        borderWidth: 0.5,
        padding: 10,
        borderRadius: 6

    },
    descriptionInput: {
        height: 100,
        width: 300,
        fontSize: 20,
        textAlignVertical: 'top',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
    locationContainer: {
    },
    title: {
        color: 'gray',
        fontSize: 19,
        paddingBottom: 10
    }

});