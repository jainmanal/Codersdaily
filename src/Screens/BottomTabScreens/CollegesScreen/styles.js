import { StyleSheet } from 'react-native';
import { Colors } from '../../../Helper/Colors.js';

export const styles = StyleSheet.create({
    maincontainer: {
        marginTop: 60,
        padding: 10,
        marginBottom: 515
    },
    subContainer1: {
        backgroundColor: Colors.White,
        marginHorizontal: 10,
        borderRadius: 10,
        elevation: 10,
        marginVertical: 10,
        // zIndex: 10,
        
    },
    image: {
        height: 200,
        justifyContent: 'flex-end',
        padding: 10,
    },
    name: {
        color: Colors.black,
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
    container: {
        flexDirection: 'row',
        marginTop: 6

    },
    icon: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        tintColor: Colors.TextGrey,
    },
    icon1: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        tintColor: Colors.AppColor
    },
    text: {
        fontSize: 16,
        color: Colors.TextGrey
    },
    input: {
        fontSize: 16,
        color: Colors.black
    },
    textBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: Colors.AppColor,
        borderRadius: 10,
        marginVertical: 10,
        height: 50,
        paddingHorizontal: 15
    },
    dropdownContainer: {
        // flexDirection: 'row',
        zIndex: 10,
        // alignItems: 'center',
        // backgroundColor: 'white',
        marginVertical: 10,
        height: '60%',
        marginBottom: -100
    },
    dropdown: {
        borderColor: Colors.AppColor,
        paddingHorizontal: 20,
        // borderRadius: 0,
        // width: '99%',
    }
})