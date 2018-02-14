import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar, ListItem } from "react-native-elements";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    containerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    text: {
        marginLeft: 12,
        fontSize: 16,
    },
    photo: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
});

const Row = (props) => {
    let imagName = `/../../../public/images/+${props.item.ImageName}+.png`
    return(


    <ListItem
        roundAvatar
        avatar={<Avatar
            rounded
            source={imagName}
            title={props.item.cat_name}
        />}
        onPress={() => props.subscreen(props.item._id)}
        key={props.item._id}
        title={props.item.cat_name}
    />
)
}

    export default Row;
{/*  <TouchableOpacity  style={styles.container} onPress={props.subscreen}>
            <View style={styles.containerLeft}>

                <Image source={{ uri: props.picture.large}} style={styles.photo} />

                <Text style={styles.text}>
                    {props.cat_name}
                </Text>
            </View>
            <View>
                <Icon
                    title="Home"
                    titleColor="white"
                    name="ios-arrow-forward"
                    size={25}
                    actions={[
                        { title: 'Settings', iconName: 'md-settings', iconSize: 30, show: 'always' },
                        { title: 'Follow me on Twitter', iconName: 'logo-twitter', iconColor: "#4099FF", show: 'ifRoom' },
                    ]}
                    overflowIconName="md-more"
                />
            </View>


        </TouchableOpacity >*/}