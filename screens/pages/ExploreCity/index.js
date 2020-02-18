/* Libraries That Needed */
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styles from './styles';
/************************/

const ExploreCity = props => {
    // View 
    return (
        // SafeAreaView Used To Fix Design In Notch Screen Phones
        <SafeAreaView style={styles.screen}>
            <View style={styles.pageCont}>
                <Text>Ahmed Samir</Text>
            </View>
        </SafeAreaView>
    );
};

export { ExploreCity };
