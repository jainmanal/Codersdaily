import { StyleSheet } from 'react-native';
import { Colors } from '../../../Helper/Colors.js';
import { SCREEN_HEIGH, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../Helper/DeviceDimentions/index.js';

export const styles = StyleSheet.create({
    maincontainer: {
        // flex: 1,
        marginTop: 60,
        padding: 10
    },
    subContainer: {
        padding: 10,
        width: SCREEN_WIDTH * 0.9,
        height: SCREEN_HEIGHT * 0.5,
        backgroundColor: Colors.White,
        marginHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10,
    
    },
    icon: {
        height: 250,
        width: 250,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    title: {
        fontSize: 20,
        color: Colors.black,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    description: {

    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.AppColor,
        borderRadius: 10,
        padding: 15,
        justifyContent: 'space-between',
        // marginTop:10,
        alignSelf: 'center',
        width: SCREEN_WIDTH * 0.8,
        marginVertical: 10,
        marginTop: 15
    },
    buttonText: {
        color: Colors.White,
        fontSize: 18,
        fontWeight: 'bold',
    },
    icon1: {
        height: 20,
        width: 20,
        tintColor: Colors.White
    },
})