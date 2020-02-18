import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

export default StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: colors.background
    },
    card: {
        width: 250,
        height: 300,
        overflow: 'hidden',
        borderRadius: 10,
        marginHorizontal: 10
    },
    cardImage: {
        width: '100%',
        height: '100%',

    },
    cardContainer: {
        flex: 1,
    },
    sectionTitle: {
        padding: 15,
        marginLeft: 10,
        paddingLeft: 0,
        color: '#c1c1c1',
    },
    footer: {
        padding: 10,
        flex: 1,
        justifyContent: 'flex-end'
    },
    footerText: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 16
    },
    footerPrice: {
        fontFamily: 'open-sans-bold',
        marginVertical: 5,
        fontSize: 20
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});