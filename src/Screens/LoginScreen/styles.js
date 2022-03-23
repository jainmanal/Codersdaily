import { StyleSheet } from 'react-native';
import { Colors } from '../../Helper/Colors.js';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Helper/DeviceDimentions/index.js';

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: Colors.White
    },
    logo: {
        marginTop: 20,
        height: 70,
        width: 70,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    container: {
        marginTop: 60
    },
    login: {
        fontSize: 38,
        fontWeight: 'bold',
        color: Colors.black,
        marginVertical: 10
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16, color: Colors.TextGrey
    },
    contain: {
        alignSelf: 'flex-end',
        marginVertical: 15
    },
    forgot: {
        color: 'red',
        fontWeight: 'bold'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        paddingHorizontal: 15,
        borderRadius: 20
    },
    buttonText: {
        color: Colors.White,
        fontSize: 18,
        marginHorizontal: 10,
        fontWeight:'bold'
    },
    icon: {
        height: 20,
        width: 20,
        tintColor: Colors.White
    },
    botomContainer: {
        marginTop: SCREEN_HEIGHT * 0.2,
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center'
    },
    bottomText: {
        fontSize: 15,
        color: Colors.TextGrey
    },
    signup: {
        fontSize: 15,
        color: Colors.darkYellow
    },
})