/* Libraries That Needed */
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styles from './styles';
/*************************/

/* View */
const ViewMap = props => {

    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.pageCont}>
                <Text>Ahmed Samir</Text>
            </View>
        </SafeAreaView>
    );
};

export { ViewMap };
