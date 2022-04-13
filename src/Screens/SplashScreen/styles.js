import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from 'react-native-normalize';
import { Colors } from '../../Helper/Colors.js';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex: 1,
        backgroundColor: Colors.White,
        marginTop: 100
    },
    logo: {
        height: 220,
        width: 220,
        marginBottom: 20,
    },
    text: {
        fontSize: 34,
        fontWeight: 'bold',
        color: Colors.AppColor
    },
    subContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    modal: {
        height: SCREEN_HEIGHT * 0.3,
        width: SCREEN_WIDTH * 0.9,
        backgroundColor: Colors.White,
        paddingHorizontal: 20,
        justifyContent: 'center',
        borderRadius: 15,
        elevation: 10,
        position: 'absolute',
        bottom: 20,
        left: 20,
        // right:8
    },
    button: {
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        elevation: 10,
        marginVertical: 10
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
})