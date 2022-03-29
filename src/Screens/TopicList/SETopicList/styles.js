import { StyleSheet } from 'react-native';
import { Colors } from '../../../Helper/Colors.js';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../Helper/DeviceDimentions/index.js';

export const styles = StyleSheet.create({
    maincontainer: {
        marginTop: 60,
    },
    heading: {
        fontSize: 22,
        color: Colors.black,
        fontWeight: 'bold',
        // textAlign: 'center',
        marginVertical: 10
    },
    container: {
        zIndex: 10,
        backgroundColor: '#fff',
        top: 0,
        position: 'absolute',
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT / 13,
        elevation: 10,
        alignItems: 'center',
        padding: 10,
        //  justifyContent:'center',
        flexDirection: 'row'
    },
    logo: {
        height: 60,
        width: 60,
        resizeMode: 'contain',
        marginLeft: 120
    },
    menu: {
        height: 42,
        width: 42,
        tintColor: '#fcd42c'
    },
    image: {
        height: 250,
        width: 400,
        resizeMode: 'contain'
    },
    subContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        height: 20,
        width: 20,
        tintColor: Colors.AppColor
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.black,
        marginLeft: 20
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        backgroundColor: '#fbdf8d',
        borderRadius: 20,
    },
    txt: {
        fontWeight: 'bold',
        color: Colors.black
    },
    name: {
        color: Colors.AppColor,
        fontWeight: 'bold'
    },
})