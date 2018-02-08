import React, {Component} from 'react';
import {StyleSheet,
    View,
    Text,
    Button} from 'react-native';

export default class MoreScreen extends Component {
    static navigationOptions = {
        title: 'More'
    };

    render(){
        return(
            <View>
                <Text>More Screen</Text>
            </View>
        )
    }
}