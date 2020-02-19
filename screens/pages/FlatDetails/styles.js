import { StyleSheet } from 'react-native';
import colors from '../../../constants/colors';

export default StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0,
    },
    imageSliderCont: {
        width: '100%',
        height: 400,
        position: 'relative'
    },
    backBtn: {
        position: 'absolute',
        top: 5,
        left: 5,
        zIndex: 1,
        fontSize: 30,
        fontFamily: 'open-sans-bold',
        color: colors.primary
    },
    indexCounter: {
        position: 'absolute',
        bottom: 5,
        right: 5,
        zIndex: 1,
        fontSize: 18,
        fontFamily: 'open-sans-bold',
        color: colors.primary,
        padding: 10
    },
    detailsCont: {
        paddingVertical: 10,
        paddingHorizontal: 30
    },
    titleCont: {
        marginBottom: 20
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 16
    },
    subtitle: {
        fontFamily: 'open-sans',
        fontSize: 14,
        color: '#808080'
    },
    price: {
        fontFamily: 'open-sans-bold',
        fontSize: 20
    },
    priceSub: {
        fontSize: 14,
        color: 'grey'
    },
    featuresCont: {
        flexDirection: 'row'
    },
    featureTitleCont: {
        marginHorizontal: 15
    },
});