import React, {Component} from 'react';
import {StyleSheet,
    View,
    Text,
    Button} from 'react-native';
import SearchInput from "../components/Common/SearchInput";

export default class SearchScreen extends Component {
    static navigationOptions = {
        title: 'SEARCH'
    };
    render(){
        return(
            <View>
                <View style={styles.container}>
                    <SearchInput/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})