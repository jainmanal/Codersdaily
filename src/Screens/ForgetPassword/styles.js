import { StyleSheet } from 'react-native';
import { Colors } from '../../Helper/Colors.js';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Helper/DeviceDimentions/index.js';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.White,
        height: SCREEN_HEIGHT
    },
    headerview: {
        margin: 30,
        height: SCREEN_HEIGHT.height,
        backgroundColor: Colors.White
    },
    Iconstyle: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: SCREEN_WIDTH * 0.175,
        height: SCREEN_HEIGHT * 0.07,
        alignSelf: 'center',
        marginTop: SCREEN_HEIGHT * 0.06,
        resizeMode: 'contain'
    },
    textstyle: {
        fontSize: 22,
        color: Colors.AppColor,
        width: SCREEN_WIDTH.width,
        fontWeight: "bold",
        fontWeight: "700",
    },

    DataContainer: {
        marginLeft: SCREEN_WIDTH * 0.08,
        marginRight: SCREEN_WIDTH * 0.08,
        bottom: 20,
        height: SCREEN_HEIGHT.height,
        marginTop: SCREEN_HEIGHT * 0.05
    },
    TextStyle_1: {
        fontSize: 15,
        color: Colors.black,
        textAlign: 'center'

    },

    forgotpassword_Text: {
        fontSize: 18,
        color: Colors.White,
        alignSelf: 'center',
    },
    TextInputEmailContainer: {
        marginTop: SCREEN_HEIGHT * 0.09
    },
    ButtonStyle: {
        backgroundColor: Colors.AppColor,
        width: SCREEN_WIDTH * 0.85,
        height: SCREEN_HEIGHT * 0.07,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
    }

});