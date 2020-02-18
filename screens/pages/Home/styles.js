import {StyleSheet, Platform} from 'react-native';
import colors from '../../../constants/colors';

export default StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    tabsContainerStyle: Platform.OS == 'android' ? {
        borderWidth: 0,
        height: 'auto'
    } : {},
    tabStyle: Platform.OS == 'android' ? {
        backgroundColor: colors.primary,
        paddingTop: 10,
        paddingBottom: 5
    } : {},
    activeTextStyle: Platform.OS == 'android' ? {
        color: colors.accent,
        borderBottomWidth: 1,
        borderBottomColor: colors.accent,
        paddingBottom: 10
    } : {}
});