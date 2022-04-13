import { StyleSheet } from 'react-native';
import { Colors } from '../../Helper/Colors.js';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Helper/DeviceDimentions/index.js';

export const styles = StyleSheet.create({
    maincontainer: {
        marginBottom: 220,
    },
    header: {
        padding: 15,
        borderRadius: 20,
        paddingHorizontal: 25,
        shadowColor: Colors.black,
        shadowOpacity: 8,
        shadowRadius: 1,
        height: 160,
        elevation: 10,

    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    font: {
        color: Colors.White,
        fontWeight: 'bold'
    },
    iconContainer: {
        backgroundColor: '#fbdf8d',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 20
    },
    bellIcon: {
        height: 20,
        width: 20
    },
    textBox: {
        flexDirection: 'row',
        alignItems: 'center',
        // paddingHorizontal: 15,
        backgroundColor: Colors.White,
        borderRadius: 30,
        marginVertical: 10,
        marginTop: 18,
        elevation: 20,
    },
    input: {
        fontSize: 16,
        // marginLeft: 10
    },
    container: {
        // marginTop: 10,
        padding: 10,
    },
    cource: {
        fontSize: 26,
        fontFamily: 'Manrope-ExtraBold',
        color: Colors.black,
    },
    subContainer: {
        padding: 10,
        width: SCREEN_WIDTH * 0.4,
        backgroundColor: Colors.White,
        marginHorizontal: 10,
        borderRadius: 20,
        elevation: 10,
        marginVertical: 10
    },
    subContainer1: {
        width: 250,
        backgroundColor: Colors.White,
        marginHorizontal: 10,
        borderRadius: 10,
        elevation: 10,
        marginVertical: 10
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
        // textAlign: 'center'
    },
    lesson: {
        color: Colors.TextGrey
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
        color: '#7856f1',
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
    rateicon: {
        height: 20,
        width: 20
    }
})