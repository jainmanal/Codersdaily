import {StyleSheet} from 'react-native';
import { Colors } from '../../../Helper/Colors.js';
import { SCREEN_HEIGHT,SCREEN_WIDTH } from '../../../Helper/DeviceDimentions/index.js';

export const styles = StyleSheet.create({
    maincontainer: {
        marginTop: 60,
    },
    heading:{
        fontSize: 28,
        color: Colors.black,
        fontWeight:'bold',
        textAlign:'center',
        marginVertical: 10
    },
    Container: {
        backgroundColor:Colors.White,
        padding: 15,
        marginVertical: 10,
        paddingHorizontal: 25,
        paddingVertical: 20
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    buttonText: {
        fontSize: 22,
        textAlign: 'center'
    },
    icon: {
        height: 24,
        width: 24,
        resizeMode: 'contain'
    },
    hiddenSheet: {
        // backgroundColor:'#fff',
        marginTop: 15
    },
    tabText: {
        marginVertical: 10,
        fontSize: 22,
        marginLeft: 25
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
})