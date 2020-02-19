/* Libraries That Needed */
import React from 'react';
import { createAppContainer } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Platform } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

// Screens And Custom Components 
import { FlatDetails, Profile, Notifications, Filters, NearMe } from '../screens/';
import Home from '../screens/pages/Home/';
import HeaderSearch from '../components/UI/HeaderSearch';
import colors from '../constants/colors';
/***************************/

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? colors.primaryColor : '',
    },
    headerTintColor: 'grey',
    headerTitle: props => <HeaderSearch />
};

const homeNavigator = createStackNavigator({
    nearMe:Home,
    flatDetails: FlatDetails,
}, {
    defaultNavigationOptions: defaultNavOptions,
    headerMode: 'none',
});

const tabScreenConfig = {
    Home: {
        screen: homeNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                // console.log(tabInfo.focused);

                return <Ionicons
                    name='md-home'
                    size={23}
                    color={tabInfo.tintColor}
                    style={{
                        borderBottomWidth: 2,
                        borderBottomColor: tabInfo.tintColor,
                        paddingBottom: 4
                    }}
                />
            },
        }
    },
    filters: {
        screen: Filters,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {

                return <MaterialIcons
                    name='tune'
                    size={23}
                    color={tabInfo.tintColor}
                    style={{
                        borderBottomWidth: 2,
                        borderBottomColor: tabInfo.tintColor,
                        paddingBottom: 4
                    }}
                />
            },
        }
    },
    Notifications: {
        screen: Notifications,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons
                    name='ios-notifications-outline'
                    size={23}
                    color={tabInfo.tintColor}
                    style={{
                        borderBottomWidth: 2,
                        borderBottomColor: tabInfo.tintColor,
                        paddingBottom: 4
                    }}
                />
            },
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <MaterialIcons
                    name='person-outline'
                    size={23}
                    color={tabInfo.tintColor}
                    style={{
                        borderBottomWidth: 2,
                        borderBottomColor: tabInfo.tintColor,
                        paddingBottom: 4
                    }}
                />
            },
        }
    }
};

const App = createBottomTabNavigator(
    tabScreenConfig, {
    tabBarOptions: {
        activeTintColor: colors.accent,
        showLabel: false,
    },
});

export default createAppContainer(App);