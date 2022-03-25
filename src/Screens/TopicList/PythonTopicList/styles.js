import { StyleSheet } from 'react-native';
import { Colors } from '../../../Helper/Colors.js';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../Helper/DeviceDimentions/index.js';

export const styles = StyleSheet.create({
    mainContainer: {
        // width: SCREEN_WIDTH * 0.9,
        // padding: 15,
        // marginTop: 60,
        marginBottom: 120,
        backgroundColor: '#eee'
    },
    heading: {
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 'bold',
        marginVertical: 10,
        color: Colors.black
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
        fontSize: 18,
        textAlign: 'center',
        color: Colors.black
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