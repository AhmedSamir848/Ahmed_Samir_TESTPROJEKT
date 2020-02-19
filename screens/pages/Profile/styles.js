import { Platform, StyleSheet } from "react-native";
import colors from "../../../constants/colors";

export default StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0

    },
    imageContainer: {
        height: 300,
        backgroundColor: colors.accent,
        marginBottom: 30
    },
    imageTitle: {
        fontSize: 17,
        color: colors.primary,
        textAlign: 'center',
        marginTop: 50
    },
    image: {
        width: 130,
        height: 130,
        alignSelf: 'center',
        marginTop: 25,
        borderRadius: 65,
        overflow: 'hidden',
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    imageAddBtnCont: {
        height: 30,
        backgroundColor: "rgba(0,0,0,0.6)",
        alignItems: 'center'
    },
    plusIcon: {
        marginTop: 4,
        marginRight: 5
    },
    inputCont: {
        paddingHorizontal: 30
    },
    switchCont: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    loginContainer: {
        width: '80%',
        backgroundColor: colors.accent,
        borderRadius: 15,
        padding: 10,
        marginBottom: 15,
        marginTop: 30,
        alignSelf: 'center'
    },
    loginText: {
        color: colors.primary
    },
});