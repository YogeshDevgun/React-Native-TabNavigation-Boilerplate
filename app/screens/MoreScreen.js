import React, {Component} from 'react';
import {StyleSheet,
    View,
    Text} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';



export default class MoreScreen extends Component {
    static navigationOptions = {
        title: 'MORE'
    };

    demo(){

    };


    render(){
        return(
            <View style={styles.container}>
                <Button
                    title='FEEDBACK'
                    buttonStyle={styles.btn}
                    textStyle={styles.btnText}
                />
                <Button
                    title='DEVELOP IPHONE APP'
                    buttonStyle={styles.btn}
                    textStyle={styles.btnText}
                />
                <Button
                    title='CONTACT US'
                    buttonStyle={styles.btn}
                    textStyle={styles.btnText}
                    onPress={() => this.props.navigation.navigate('ContatctUs')}
                />
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