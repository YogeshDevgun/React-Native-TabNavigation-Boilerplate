import React, {Component} from 'react';
import {StyleSheet,
    View,
    Text} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';



export default class ContactUsScreen extends Component {
    static navigationOptions = {

    };

    demo(){

    };


    render(){
        return(
            <View style={styles.container}>
                <Text>Address</Text>
                <Text>Agoura Hills, CA
                    30300 Agoura Rd. Suite 140
                    Agoura Hills, CA 91301
                    Phone: (310) 584-6300
                    Fax: (310) 606-2154
                </Text>
                <Text>
                    info@mobileprogramming.com
                    www.mobileprogramming.com
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#1AA1CE',
        justifyContent: 'center'

    },
    btn: {
        borderRadius: 4,
        borderWidth: 0.9,
        borderColor: '#ffffff',
        backgroundColor: 'transparent',
        margin: 20,
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22
    }
})