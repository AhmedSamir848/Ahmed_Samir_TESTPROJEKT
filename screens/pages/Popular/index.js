import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styles from './styles';
const Popular = props => {

    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.pageCont}>
                <Text>Hi From Popular @ahmedsamir</Text>
            </View>
        </SafeAreaView>
    );
};

export { Popular };
