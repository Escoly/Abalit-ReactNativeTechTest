import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';


export default class Notifications extends Component {
    static navigationOptions = {
        title: 'Notificaciones',
        headerStyle: {
            backgroundColor: '#1cc3d9',
            elevation: 0,
        },
        headerTintColor: '#fff'
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.notificationsResultsContainer}>
                    <ScrollView>
                        <View style={styles.notificationContainer}>
                            <Image style={styles.userIcon}
                                source={require('../resources/icons/ic_default_user.png')}
                            />
                            <View style={styles.userInfoContainer}>
                                <Text style={styles.notificationMessage}>{'Bradley Knight ha \ncomenzado a seguirte'}</Text>
                                <Text style={styles.notificationTime}>Hace x días</Text>
                            </View>
                            <Image
                                style={{ maxHeight: 50, maxWidth: 50, resizeMode: 'cover' }}
                                source={require('../resources/images/cat1.jpg')}></Image>
                        </View>
                        <View style={styles.notificationContainer}>
                            <Image style={styles.userIcon}
                                source={require('../resources/icons/ic_default_user.png')}
                            />
                            <View style={styles.userInfoContainer}>
                                <Text style={styles.notificationMessage}>{'A Bradley Knight le ha \ngustado tu post'}</Text>
                                <Text style={styles.notificationTime}> Hace x días</Text>
                            </View>
                            <Button
                                style={styles.followButton}
                                color="#00BDD3"
                                title="Seguir"></Button>
                        </View>
                        <View style={styles.notificationContainer}>
                            <Image style={styles.userIcon}
                                source={require('../resources/icons/ic_default_user.png')}
                            />
                            <View style={styles.userInfoContainer}>
                                <Text style={styles.notificationMessage}>{'Bradley Knight ha \ncomenzado a seguirte'}</Text>
                                <Text style={styles.notificationTime}>Hace x días</Text>
                            </View>
                            <Image
                                style={{ maxHeight: 50, maxWidth: 50, resizeMode: 'cover' }}
                                source={require('../resources/images/cat1.jpg')}></Image>
                        </View>
                        <View style={styles.notificationContainer}>
                            <Image style={styles.userIcon}
                                source={require('../resources/icons/ic_default_user.png')}
                            />
                            <View style={styles.userInfoContainer}>
                                <Text style={styles.notificationMessage}>{'A Bradley Knight le ha \ngustado tu post'}</Text>
                                <Text style={styles.notificationTime}> Hace x días</Text>
                            </View>
                            <Button
                                style={styles.followButton}
                                color="#00BDD3"
                                title="Seguir"></Button>
                        </View>
                        <View style={styles.notificationContainer}>
                            <Image style={styles.userIcon}
                                source={require('../resources/icons/ic_default_user.png')}
                            />
                            <View style={styles.userInfoContainer}>
                                <Text style={styles.notificationMessage}>{'Bradley Knight ha \ncomenzado a seguirte'}</Text>
                                <Text style={styles.notificationTime}>Hace x días</Text>
                            </View>
                            <Image
                                style={{ maxHeight: 50, maxWidth: 50, resizeMode: 'cover' }}
                                source={require('../resources/images/cat1.jpg')}></Image>
                        </View>
                        <View style={styles.notificationContainer}>
                            <Image style={styles.userIcon}
                                source={require('../resources/icons/ic_default_user.png')}
                            />
                            <View style={styles.userInfoContainer}>
                                <Text style={styles.notificationMessage}>{'A Bradley Knight le ha \ngustado tu post'}</Text>
                                <Text style={styles.notificationTime}> Hace x días</Text>
                            </View>
                            <Button
                                style={styles.followButton}
                                color="#00BDD3"
                                title="Seguir"></Button>
                        </View>
                        <View style={styles.notificationContainer}>
                            <Image style={styles.userIcon}
                                source={require('../resources/icons/ic_default_user.png')}
                            />
                            <View style={styles.userInfoContainer}>
                                <Text style={styles.notificationMessage}>{'Bradley Knight ha \ncomenzado a seguirte'}</Text>
                                <Text style={styles.notificationTime}>Hace x días</Text>
                            </View>
                            <Image
                                style={{ maxHeight: 50, maxWidth: 50, resizeMode: 'cover' }}
                                source={require('../resources/images/cat1.jpg')}></Image>
                        </View>
                        <View style={styles.notificationContainer}>
                            <Image style={styles.userIcon}
                                source={require('../resources/icons/ic_default_user.png')}
                            />
                            <View style={styles.userInfoContainer}>
                                <Text style={styles.notificationMessage}>{'A Bradley Knight le ha \ngustado tu post'}</Text>
                                <Text style={styles.notificationTime}> Hace x días</Text>
                            </View>
                            <Button
                                style={styles.followButton}
                                color="#00BDD3"
                                title="Seguir"></Button>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    notificationsResultsContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    notificationContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: 'lightgray',
        maxHeight: 80
    },
    userIcon: {
        maxHeight: 60,
        maxWidth: 60,
        margin: 10
    },
    userInfoContainer: {
        width: 210
    },
    notificationMessage: {
        color: 'gray',
        fontSize: 15,
        fontWeight: 'bold'
    },
    notificationTime: {
        color: 'gray'
    },
});