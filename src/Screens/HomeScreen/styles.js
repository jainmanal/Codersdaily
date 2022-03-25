import { StyleSheet } from 'react-native';
import { Colors } from '../../Helper/Colors.js';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Helper/DeviceDimentions/index.js';

export const styles = StyleSheet.create({
    maincontainer: {
        marginTop: 60,
        marginBottom: 80
    },
    bgImage: {
        padding: 15,
        height: SCREEN_HEIGHT * 0.3,  
    },
    heading: {
        marginTop: 90,
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.AppColor
    },
    description: {
        color: Colors.White,
        marginVertical: 10,
        fontSize: 16
    },
    container: {
        marginTop: 10,
        padding: 10
    },
    cource: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.black,
    },
    subContainer: {
        // flex:1,
        padding: 10,
        // height : SCREEN_HEIGHT * 0.3,
        width: SCREEN_WIDTH * 0.4,
        backgroundColor: Colors.White,
        marginHorizontal: 10,
        borderRadius: 10,
        elevation:10,
        marginVertical:10
    },
    subContainer1: {
        width: 250,
        backgroundColor: Colors.White,
        marginHorizontal: 10,
        borderRadius: 10,
        elevation:10,
        marginVertical:10
    },
    icon: {
        height: 100,
        width: 100,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    title: {
        fontSize: 16,
        color: Colors.black,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    description: {
        color: Colors.White,
        fontSize: 16,
        fontWeight: 'bold'
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.AppColor,
        borderRadius: 10,
        padding: 10,
        justifyContent: 'space-between',
        marginTop: 28,
        // bottom:0,
        // position:'absolute'
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
    contain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
        paddingHorizontal: 8
    },
    text: {
        color: '#235284',
        fontSize: 16
    },
    image: {
        height: 150,
        width: 250,
        justifyContent: 'flex-end',
        padding: 10,
    },
    name: {
        color: Colors.White,
        fontWeight: 'bold',
        fontSize: 18,
    },
    textContainer: {
        marginVertical: 15,
        marginHorizontal: 10,
    },
    txt: {
        fontSize: 18,
        color: Colors.black,
        fontWeight: 'bold'
    },
})