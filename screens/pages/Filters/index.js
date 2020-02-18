/* Libraries That Needed */
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import HeaderSearch from '../../../components/UI/HeaderSearch';
import styles from './styles';
/*****************************/

const Filters = props => {
    return (
        <SafeAreaView style={styles.screen}>
            <HeaderSearch
                placeholder="Type location"
            />
            <View style={styles.pageCont}>
                <Text>Ahmed Samir</Text>
            </View>
        </SafeAreaView>
    );
};

export { Filters };
