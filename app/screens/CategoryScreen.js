import React, { Component } from 'react';
import {
    StyleSheet,
    ListView,
    View,
    Text,
    Button,
    ActivityIndicator
} from 'react-native';

export default class CategoryScreen extends Component {
    static navigationOptions = {
        title: 'Category'

    };

    render() {
       return(
          <View>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                  <Text>Home Screen</Text>
              </View>
            {/*  <Button
                  color="#5481FE"
                  title="Choose Categories"
                  onPress={() => this.props.navigation.navigate('Bookmark')}
              />*/}
          </View>
       )
    }
};

