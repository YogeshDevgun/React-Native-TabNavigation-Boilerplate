import React, {Component} from 'react';
import {StyleSheet,
    View,
    Text,
    Button} from 'react-native';

export default class BookmarkScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {
            title: params ? params.otherParam : 'Bookmarks',
        }
    };


    render(){
        return(
            <View>
                <Text>Bookmark Screen</Text>
            </View>
        )
    }
}