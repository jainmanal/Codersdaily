import {StyleSheet} from 'react-native';
import { Colors } from '../../../Helper/Colors.js';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../../../Helper/DeviceDimentions/index.js';

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