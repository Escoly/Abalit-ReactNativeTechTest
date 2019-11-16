import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, TextInput, TouchableHighlight } from 'react-native';


export default class Comments extends Component {
    static navigationOptions = {
        title: 'Comentarios',
        headerStyle: {
            backgroundColor: '#1cc3d9',
            elevation: 0,
        },
        headerTintColor: '#fff'
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.commentsResultsContainer}>
                    <ScrollView>
                        <View style={styles.commentContainer}>
                            <Image style={styles.userIcon}
                                source={require('../resources/icons/ic_default_user.png')}
                            />
                            <View style={styles.userInfoContainer}>
                                <Text style={styles.commentUser}>John Doe</Text>
                                <Text style={styles.commentMessage}>Hi! I love your cat!</Text>
                            </View>
                            <Text style={styles.commentTime}>Hace 2 horas</Text>
                        </View>
                        <View style={styles.commentContainer}>
                            <Image style={styles.userIcon}
                                source={require('../resources/icons/ic_default_user.png')}
                            />
                            <View style={styles.userInfoContainer}>
                                <Text style={styles.commentUser}>John Doe</Text>
                                <Text style={styles.commentMessage}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                            </View>
                            <Text style={styles.commentTime}>Hace 2 horas</Text>
                        </View>
                        <View style={styles.commentContainer}>
                            <Image style={styles.userIcon}
                                source={require('../resources/icons/ic_default_user.png')}
                            />
                            <View style={styles.userInfoContainer}>
                                <Text style={styles.commentUser}>John Doe</Text>
                                <Text style={styles.commentMessage}>Hi! I love your cat!</Text>
                            </View>
                            <Text style={styles.commentTime}>Hace 2 horas</Text>
                        </View>
                        <View style={styles.commentContainer}>
                            <Image style={styles.userIcon}
                                source={require('../resources/icons/ic_default_user.png')}
                            />
                            <View style={styles.userInfoContainer}>
                                <Text style={styles.commentUser}>John Doe</Text>
                                <Text style={styles.commentMessage}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                            </View>
                            <Text style={styles.commentTime}>Hace 2 horas</Text>
                        </View>
                        <View style={styles.commentContainer}>
                            <Image style={styles.userIcon}
                                source={require('../resources/icons/ic_default_user.png')}
                            />
                            <View style={styles.userInfoContainer}>
                                <Text style={styles.commentUser}>John Doe</Text>
                                <Text style={styles.commentMessage}>Hi! I love your cat!</Text>
                            </View>
                            <Text style={styles.commentTime}>Hace 2 horas</Text>
                        </View>
                        <View style={styles.commentContainer}>
                            <Image style={styles.userIcon}
                                source={require('../resources/icons/ic_default_user.png')}
                            />
                            <View style={styles.userInfoContainer}>
                                <Text style={styles.commentUser}>John Doe</Text>
                                <Text style={styles.commentMessage}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                            </View>
                            <Text style={styles.commentTime}>Hace 2 horas</Text>
                        </View>
                        <View style={styles.commentContainer}>
                            <Image style={styles.userIcon}
                                source={require('../resources/icons/ic_default_user.png')}
                            />
                            <View style={styles.userInfoContainer}>
                                <Text style={styles.commentUser}>John Doe</Text>
                                <Text style={styles.commentMessage}>Hi! I love your cat!</Text>
                            </View>
                            <Text style={styles.commentTime}>Hace 2 horas</Text>
                        </View>
                        <View style={styles.commentContainer}>
                            <Image style={styles.userIcon}
                                source={require('../resources/icons/ic_default_user.png')}
                            />
                            <View style={styles.userInfoContainer}>
                                <Text style={styles.commentUser}>John Doe</Text>
                                <Text style={styles.commentMessage}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                            </View>
                            <Text style={styles.commentTime}>Hace 2 horas</Text>
                        </View>
                        <View style={styles.commentContainer}>
                            <Image style={styles.userIcon}
                                source={require('../resources/icons/ic_default_user.png')}
                            />
                            <View style={styles.userInfoContainer}>
                                <Text style={styles.commentUser}>John Doe</Text>
                                <Text style={styles.commentMessage}>Hi! I love your cat!</Text>
                            </View>
                            <Text style={styles.commentTime}>Hace 2 horas</Text>
                        </View>
                        <View style={styles.commentContainer}>
                            <Image style={styles.userIcon}
                                source={require('../resources/icons/ic_default_user.png')}
                            />
                            <View style={styles.userInfoContainer}>
                                <Text style={styles.commentUser}>John Doe</Text>
                                <Text style={styles.commentMessage}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                            </View>
                            <Text style={styles.commentTime}>Hace 2 horas</Text>
                        </View>
                    </ScrollView>
                    <View style={styles.writteCommentContainer}>
                        <TextInput style={styles.commentInput}
                            placeholder="Escribe un comentario..."
                        />
                        <TouchableHighlight>
                            <Image style={styles.sendCommentIcon}
                                source={require('../resources/icons/ic_send.png')}
                            />
                        </TouchableHighlight>
                    </View>
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
    commentsResultsContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    commentContainer: {
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
    commentUser: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold'
    },
    commentMessage: {
        color: 'gray'
    },
    commentTime: {
        color: 'gray',
        fontSize: 10,
        paddingBottom: 20
    },
    writteCommentContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:10,
        borderTopWidth: 0.5,
        borderTopColor: 'lightgray'
    },
    sendCommentIcon:{
        height:20,
        width:20
    }
});