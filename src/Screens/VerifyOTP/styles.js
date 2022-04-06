import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";
import { Colors } from "../../Helper/Colors.js";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../Helper/DeviceDimentions/index.js";

export const styles = StyleSheet.create({
    mainContainer: {
        marginTop: normalize(80)
    },
    textContainer: {
        margin: normalize(30),
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        color: Colors.black,
        fontSize: 20,
        fontWeight: 'bold'
    },
    text: {
        color: Colors.black,
        textAlign: 'center',
        fontSize: 16
    },
    code: {
        color: Colors.black,
        fontSize: 18
    },
    button: {
        backgroundColor: Colors.AppColor,
        padding: 10,
        paddingHorizontal: normalize(25),
        borderRadius: 15
    },
    confirm: {
        color: Colors.White,
        fontSize: 20
    },
    logo: {
        width: SCREEN_WIDTH * 0.175,
        height: SCREEN_HEIGHT * 0.07,
        alignSelf: 'center',
        marginTop: SCREEN_HEIGHT * 0.06,
        resizeMode: 'contain'
    },
})