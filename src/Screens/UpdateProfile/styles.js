import { StyleSheet } from 'react-native';
import { Colors } from '../../Helper/Colors.js';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Helper/DeviceDimentions';

export const styles = StyleSheet.create({
    Container: {
        // zIndex: 10,
        // backgroundColor: '#fff',
        width: '100%',
        // height: SCREEN_HEIGHT * 0.2,
        height: 170,
        borderBottomLeftRadius: 80,
        borderBottomRightRadius: 80,
    },
    logo: {
        height: 60,
        width: 60,

        resizeMode: 'contain',
    },
    bellIcon: {
        height: 28,
        width: 28,
        tintColor: Colors.AppColor
    },
    maincontainer: {
        // flex: 1,
        marginTop: SCREEN_HEIGHT * 0.08,
        // padding: 10,
        alignItems:'center'
    },
    imageContainer: {
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 80,
        width: 120,
        height: 120,
        borderColor: Colors.AppColor,
        borderWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 45,
        elevation: 10
    },
    image: {
        // marginTop: SCREEN_HEIGHT * 0.06,
        height: 48,
        width: 48,
        tintColor: Colors.AppColor
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: Colors.black,
        alignSelf: 'center',
    },
    subContainer: {
        marginTop: SCREEN_HEIGHT * 0.04,
        paddingHorizontal: SCREEN_WIDTH * 0.08,

    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent:'space-evenly',
        borderBottomColor: Colors.AppColor,
        borderBottomWidth: 1,
        marginTop: 30,
    },
    text: {
        marginVertical: SCREEN_HEIGHT * 0.01,
        fontSize: 18,
        color: Colors.black,
        marginLeft: SCREEN_WIDTH * 0.04
    },
    button: {
        padding: 8,
        borderRadius: 20,
        alignSelf: 'center',
        paddingHorizontal: 60,
        // position: 'absolute',
        // marginTop: SCREEN_HEIGHT * 0.09,
    },

    logout: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.White
    },
    textContainer: {
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    icon1: {
        height: 36,
        width: 36,
        tintColor: Colors.White
    },
    
})