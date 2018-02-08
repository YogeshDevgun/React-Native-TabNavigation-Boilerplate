import React, {Component} from 'react';
import {StyleSheet,
    View,
    Text,
    Button} from 'react-native';

export default class SearchScreen extends Component {
    static navigationOptions = {
        title: 'Search'
    };
    render(){
        return(
            <View>
                <Text>Search Screen</Text>
            </View>
        )
    }
}