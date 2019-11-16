import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';


export default class Search extends Component {
    static navigationOptions = {
        title: 'Buscar',
        headerStyle: {
            backgroundColor: '#1cc3d9',
            elevation: 0,
        },
        headerTintColor: '#fff'
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.searchBarContainer}>
                    <Image style={styles.searchIcon}
                        source={require('../resources/icons/ic_search.png')}
                    ></Image>
                    <TextInput style={styles.searchInput}
                        placeholder="Buscar..."
                    />
                </View>
                <View style={styles.searchResultsContainer}>
                    <ScrollView>
                        <View style={styles.resultContainer}>
                            <Image style={styles.userIcon}
                                source={require('../resources/icons/ic_default_user.png')}
                            />
                            <View style={styles.userInfoContainer}>
                                <Text style={styles.userName}> Bradley Knight</Text>
                                <Text style={styles.userAlias}> @bradknight</Text>
                            </View>
                        </View>
                        <View style={styles.resultContainer}>
                            <Image style={styles.userIcon}
                                source={require('../resources/icons/ic_default_user.png')}
                            />
                            <View style={styles.userInfoContainer}>
                                <Text style={styles.userName}> Bradley Knight</Text>
                                <Text style={styles.userAlias}> @bradknight</Text>
                            </View>
                        </View>
                        <View style={styles.resultContainer}>
                            <Image style={styles.userIcon}
                                source={require('../resources/icons/ic_default_user.png')}
                            />
                            <View style={styles.userInfoContainer}>
                                <Text style={styles.userName}> Bradley Knight</Text>
                                <Text style={styles.userAlias}> @bradknight</Text>
                            </View>
                        </View>
                        <View style={styles.resultContainer}>
                            <Image style={styles.userIcon}
                                source={require('../resources/icons/ic_default_user.png')}
                            />
                            <View style={styles.userInfoContainer}>
                                <Text style={styles.userName}> Bradley Knight</Text>
                                <Text style={styles.userAlias}> @bradknight</Text>
                            </View>
                        </View>
                        <View style={styles.resultContainer}>
                            <Image style={styles.userIcon}
                                source={require('../resources/icons/ic_default_user.png')}
                            />
                            <View style={styles.userInfoContainer}>
                                <Text style={styles.userName}> Bradley Knight</Text>
                                <Text style={styles.userAlias}> @bradknight</Text>
                            </View>
                        </View>
                        <View style={styles.resultContainer}>
                            <Image style={styles.userIcon}
                                source={require('../resources/icons/ic_default_user.png')}
                            />
                            <View style={styles.userInfoContainer}>
                                <Text style={styles.userName}> Bradley Knight</Text>
                                <Text style={styles.userAlias}> @bradknight</Text>
                            </View>
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
    searchBarContainer: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingLeft: 20,
        alignItems: 'center',
    },
    searchIcon: {
        maxHeight: 25,
        maxWidth: 25
    },
    searchInput: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        padding: 5,
        width: 300,
        fontSize: 20
    },
    searchResultsContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    resultContainer: {
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
    userName: {
        color: 'gray',
        fontSize: 20,
    },
    userAlias: {
        color: 'lightgray',
        fontSize: 19
    }
});
