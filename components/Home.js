import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';


export default class Home extends Component {
    static navigationOptions = {
        title: 'Inicio',
        headerStyle: {
            backgroundColor: '#1cc3d9',
            elevation: 0,
        },
        headerTintColor: '#fff'
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.userInfoPanel}>
                        <View style={styles.userInfoContainer}>
                            <View style={styles.userHeader}>
                                <View
                                    onPress={
                                        () => { this.props.navigation.navigate('Profile') }
                                    }
                                    style={styles.userInfo}>
                                    <Image style={{ height: 55, width: 55 }}
                                        source={require('../resources/icons/ic_default_user.png')}
                                        title="To Profile"
                                    ></Image>
                                    <View style={styles.userInfoNames}>
                                        <Text style={styles.grayText}>Bruce Miller</Text>
                                        <Text style={styles.grayText}>@bmiller</Text>
                                    </View>
                                </View>
                                <Text style={styles.grayText}>Hace 1 hora</Text>
                            </View>
                        </View>
                        <View style={styles.allPostsContainer}>
                            <View style={styles.postContainer}>
                                <Image
                                    style={{ maxHeight: 200, maxWidth: 359, resizeMode: 'cover' }}
                                    source={require('../resources/images/cat1.jpg')}></Image>
                                <View style={styles.imageBar}>
                                    <Image style={styles.iconStyle} source={require('../resources/icons/ic_like_empty.png')} />
                                    <Text style={styles.grayText}>0</Text>
                                    <Image style={styles.iconStyle} source={require('../resources/icons/ic_comment.png')} />
                                    <Text style={styles.grayText}>0</Text>
                                    <Image style={styles.moreIcon} source={require('../resources/icons/ic_more.png')} />
                                </View>
                            </View>
                            <View style={styles.imageDesContainer}>
                                <Text style={styles.postTitle}>Post title</Text>
                                <Text style={styles.grayText}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </Text>
                                <View style={styles.locationContainer}>
                                    <Image style={styles.locationIcon} source={require('../resources/icons/ic_location.png')} />
                                    <Text style={styles.grayText}>Barcelona</Text>
                                </View>
                            </View>
                        </View>


                    </View>

                </ScrollView>
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
    userInfoPanel: {
        alignItems: 'center'
    },
    userInfoContainer: {
        alignItems: 'center'

    },
    userHeader: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        maxHeight: 80
    },
    userInfo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    userInfoNames: {
        paddingLeft: 10,
        flex: 1,
        flexDirection: 'column',
    },
    imageBar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        maxHeight: 60,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
    },
    iconStyle: {
        maxHeight: 40,
        maxWidth: 40,
        margin: 10
    },
    moreIcon: {
        maxHeight: 40,
        maxWidth: 40,
        position: 'absolute',
        right: 5
    },
    imageDesContainer: {
        padding: 10,
    },
    postTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    locationContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 10,
        alignItems: 'center'
    },
    grayText: {
        color: 'gray'
    },
    locationIcon: {
        maxHeight: 30,
        maxWidth: 30
    }

});
