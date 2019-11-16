import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';


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
                <Text style={styles.topText}>
                    {
                        `Para publicar tu post,\n   ¡elige una imagen!`
                    }
                </Text>
                <View style={styles.bigButtonBorder}>
                    <Image style={styles.bigButtonIcon}
                        source={require('../resources/icons/ic_camera_active.png')}
                        title="To Profile"
                    ></Image>
                    <Text style={styles.bigButtonText}>Hacer foto</Text>
                </View>
                <View style={styles.separatorContainer}>
                    <View style={styles.separatorSegment} />
                    <Text style={styles.separatorText}>  O bien  </Text>
                    <View style={styles.separatorSegment} />
                </View>

                <TouchableHighlight
                    onPress={() => this.props.navigation.navigate('CreatePost')}>
                    <View style={styles.bigButtonBorder}>
                        <Image style={styles.bigButtonIcon}
                            source={require('../resources/icons/ic_gallery.png')}
                            title="To Profile"
                        ></Image>
                        <Text style={styles.bigButtonText}>Subir foto</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    topText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'gray',
        paddingTop: 20,
        paddingBottom: 20
    },
    bigButtonBorder: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 6,
        borderWidth: 3,
        borderColor: '#00BDD3',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 60,
        paddingRight: 60,
        marginTop: 40,
        marginBottom: 40
    },
    bigButtonText: {
        color: '#00BDD3',
        fontWeight: 'bold',
        fontSize: 25
    },
    bigButtonIcon: {
        marginRight: 10,
        height: 50,
        width: 50
    },
    separatorContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    separatorSegment: {
        width: 115,
        borderTopColor: 'lightgray',
        borderTopWidth: 1
    },
    separatorText: {
        color: 'lightgray'
    }
});
