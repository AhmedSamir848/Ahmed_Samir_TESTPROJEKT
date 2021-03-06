/* Libraries That Needed */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, ActivityIndicator, ImageBackground, FlatList, Platform, ScrollView, TouchableOpacity } from 'react-native';
import Card from '../../../components/UI/Card';
import colors from '../../../constants/colors';
import { fetchFlats } from '../../../store/actions/flats';

import styles from './styles';
/********************************/

const NearMe = ({ parentNavigation }) => {
    const dispatch = useDispatch();
    // Get Flats Records From Redux 
    const flats = useSelector(state => state.flats.items);

    // Fetch Flats After Loading Component
    useEffect(() => {
        dispatch(fetchFlats());
    }, [dispatch]);

    //Show  Spinner Untill Flats Array Loading
    if (flats == undefined || flats == null || flats.length == 0) {
        return <View style={styles.centered}>
            <ActivityIndicator size="large" color={colors.accent} />
        </View>;
    }

    // Main View
    return (
        <View style={styles.screen}>
            <ScrollView>
                <Text style={styles.sectionTitle}>1 BHK Flats, Apartments near you</Text>
                <View style={styles.cardContainer}>
                    <FlatList
                        horizontal
                        keyExtractor={(item, index) => 'item' + index.toString()}
                        data={flats}
                        renderItem={({ item }) => {
                            return <Card style={styles.card}>
                                <TouchableOpacity onPress={() => parentNavigation.navigate('flatDetails', { item })}>
                                    <ImageBackground style={styles.cardImage} source={{ uri: item.imageUri }}>
                                        <View style={styles.footer}>
                                            <Text style={[styles.footerText, styles.footerPrice]}>{item.price} </Text>
                                            <Text style={styles.footerText}>{item.title}</Text>
                                            <Text style={styles.footerText}>{item.subtitle}</Text>
                                        </View>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </Card>
                        }}
                    />

                </View>
                <Text style={styles.sectionTitle}>2 BHK Flats, Apartments near you</Text>
                <View style={styles.cardContainer}>
                    <FlatList
                        horizontal
                        keyExtractor={(item, index) => 'item' + index.toString()}
                        data={flats}
                        renderItem={({ item }) => {
                            return <Card style={styles.card}>
                                <TouchableOpacity onPress={() => parentNavigation.navigate('flatDetails', { item })}>
                                    <ImageBackground style={styles.cardImage} source={{ uri: item.imageUri }}>
                                        <View style={styles.footer}>
                                            <Text style={[styles.footerText, styles.footerPrice]}>{item.price} </Text>
                                            <Text style={styles.footerText}>{item.title}</Text>
                                            <Text style={styles.footerText}>{item.subtitle}</Text>
                                        </View>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </Card>
                        }}
                    />

                </View>
            </ScrollView>
        </View>
    );
};

export { NearMe };
