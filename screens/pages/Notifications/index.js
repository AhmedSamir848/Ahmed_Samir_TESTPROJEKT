/* Libraries That Needed */
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import HeaderSearch from '../../../components/UI/HeaderSearch';

import styles from './styles';
/*****************************/

/* View */
const Notifications = props => {

    return (
        <SafeAreaView style={styles.screen}>
            <HeaderSearch
                placeholder="Type location"
            />
            <View style={styles.pageCont}>
                <Text>Hi From Notifications @ahmedsamir</Text>
            </View>
        </SafeAreaView>
    );
};

export { Notifications };
