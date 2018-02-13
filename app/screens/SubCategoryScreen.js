import React, {Component} from 'react';
import {StyleSheet,
    View,
    Text,
    Button} from 'react-native';

//Import Row in this for suubcate, sub sub cate, sub sub sub categ and left will be dis descp
export default class SubCategoryScreen extends Component {
    static navigationOptions = {
        title: 'Sub Categories'
    };
    render(){
        return(
            <View>
                <View style={styles.container}>
                    <Text>SubCategory Screen</Text>
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