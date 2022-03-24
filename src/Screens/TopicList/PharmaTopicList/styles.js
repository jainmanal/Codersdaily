import {StyleSheet} from 'react-native';
import { Colors } from '../../../Helper/Colors.js';

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
        backgroundColor: '#fff',
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
})