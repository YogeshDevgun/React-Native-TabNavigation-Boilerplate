import React, {Component} from 'react';
import {StyleSheet,
    View,
    Text,
    Button} from 'react-native';
import SearchInput from "../components/Common/SearchInput";

export default class BookmarkScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {
            title: params ? params.otherParam : 'BOOKMARKS',
        }
    };


    render(){
        return(
            <View style={styles.container}>
                <SearchInput/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})