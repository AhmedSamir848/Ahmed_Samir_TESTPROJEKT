/* Libraries That Needed */
import React, { useState } from 'react';
import { View, Text, SafeAreaView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import ImageSlider from 'react-native-image-slider';
import colors from '../../../constants/colors';
import styles from './styles';
/*****************************/

const FlatDetails = ({ navigation }) => {
    //Get Flat Item That Sent Through Navigation from Home Screen
    const item = navigation.getParam('item');

    //Track Image Slider Index
    const [imgIndex, setImgIndex] = useState(1);

    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.imageSliderCont}>
                <Ionicons
                    name={Platform.OS == 'android' ? 'md-arrow-back' : 'ios-arrow-back'}
                    style={styles.backBtn}
                    onPress={() => navigation.pop()}
                />
                <ImageSlider
                    images={item.images}
                    onPositionChanged={(index) => setImgIndex(index + 1)}
                    customButtons={() => null}
                />
                <Text style={styles.indexCounter}>{imgIndex}/5</Text>
            </View>
            <View style={styles.detailsCont}>
                <View style={styles.titleCont}>
                    <Text style={styles.title}>{item.fullTitle}</Text>
                    <Text style={styles.subtitle}>{item.address}</Text>
                </View>
                <View style={styles.titleCont}>
                    <Text style={styles.price}>{item.price}<Text style={styles.priceSub}> @14 per Sq.Ft.</Text></Text>
                    <Text style={styles.subtitle}>Per Month</Text>
                </View>
                <View style={styles.titleCont}>
                    {
                        item.features.map((feature,index) => {
                            return <View style={styles.featuresCont} key={'item'+index}>
                                <Ionicons
                                    name={feature.icon}
                                    size={23}
                                    color='grey'
                                />
                                <View style={styles.featureTitleCont}>
                                    <Text style={[styles.title, { color: colors.accent, marginBottom: 10 }]}>{feature.title}</Text>
                                    <Text style={styles.subtitle}>{feature.subtitle}</Text>
                                </View>
                            </View>
                        })
                    }
                </View>
            </View>
        </SafeAreaView>
    );
};

export { FlatDetails };
