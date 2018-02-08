import React, {Component} from 'react';
import {StyleSheet,
    View,
    Text,
    Button} from 'react-native';

export default class BuyScreen extends Component {
    static navigationOptions = {
        title: 'Buy'
    };

    render(){
        return(
            <View>
                <Text>Buy Screen</Text>
            </View>
        )
    }
}