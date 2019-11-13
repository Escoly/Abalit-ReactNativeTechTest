import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';


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
            <View style={styles.container} >
                <View style={styles.userHeader}>
                    <View 
                    onPress={
                        ()=>{this.props.navigation.navigate('Profile')}
                    }
                    style={styles.userInfo}>
                        <Image style={{ height: 50, width: 50 }}
                            source={require('../resources/icons/ic_default_user.png')}
                            title="To Profile"
                        ></Image>
                        <View style={styles.userInfoNames}>
                            <Text>Bruce Miller</Text>
                            <Text>@bmiller</Text>
                        </View>
                    </View>
                    <Text>Hace 1 hora</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image 
                    style={{maxHeight:200, maxWidth:400, resizeMode:'cover'}}
                    source={require('../resources/images/cat1.jpg')}></Image>
                </View>

            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    userHeader: {
        flex: 1,
        flexDirection: 'row',
        padding: 20,
        maxHeight:80
    },
    userInfo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center'
    },
    userInfoNames: {
        flex: 1,
        flexDirection: 'column',
    },
    imageContainer:{
        flex:1
    }

});
