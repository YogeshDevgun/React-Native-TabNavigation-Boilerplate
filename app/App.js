import React, { Component } from 'react';
import {
    View, Text
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StackNavigator, TabNavigator, TabBarBottom} from "react-navigation";
import CategoryScreen from './screens/CategoryScreen';
import SearchScreen from "./screens/SearchScreen";
import BookmarkScreen from "./screens/BookmarkScreen";
import MoreScreen from "./screens/MoreScreen";
import BuyScreen from "./screens/BuyScreen";

const HomeStack = StackNavigator({
    Home: { screen: CategoryScreen },
});

const BookmarkStack = StackNavigator({
    Bookmark: { screen: BookmarkScreen },
});

const SearchStack = StackNavigator({
    Search: { screen: SearchScreen },
});

const MoreStack = StackNavigator({
    More: {screen: MoreScreen},
});

const BuyStack = StackNavigator({
    Buy: {screen: BuyScreen},
});

const RootStack = TabNavigator(
    {
        Home: { screen: HomeStack },
        Bookmark: { screen: BookmarkStack },
        Search: {screen: SearchStack},
        More: {screen: MoreStack},
        Buy: {screen: BuyStack}

    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                } else if (routeName === 'Bookmark') {
                    iconName = `ios-options${focused ? '' : '-outline'}`;
                }  else if (routeName === 'Search') {
                    iconName = `ios-options${focused ? '' : '-outline'}`;
                }  else if (routeName === 'More') {
                    iconName = `ios-options${focused ? '' : '-outline'}`;
                } else if (routeName === 'Buy') {
                    iconName = `ios-options${focused ? '' : '-outline'}`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
            headerStyle: {
                backgroundColor: '#26C0EE',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            backgroundColor: '#26C0EE',
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
    }
   );



export default class App extends Component {
    render() {
        return (

                <RootStack/>
        );
    }
}

