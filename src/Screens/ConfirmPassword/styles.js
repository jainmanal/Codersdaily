import { StyleSheet } from 'react-native';
import { Colors } from '../../Helper/Colors.js';
import { SCREEN_HEIGHT } from '../../Helper/DeviceDimentions/index.js';

export const styles = StyleSheet.create({
    mainContainer: {
        padding: 15,
        flex: 1,
        backgroundColor: Colors.White,
        height: SCREEN_HEIGHT
    },
    text: {
        fontSize: 22,
        color: Colors.black,
        fontWeight: 'bold',
        // alignSelf: 'center',
        marginTop: SCREEN_HEIGHT * 0.06
    },
    subContainer: {
        marginTop: SCREEN_HEIGHT * 0.05
    },
    container: {
        marginTop: SCREEN_HEIGHT * 0.04
    },
    icon: {
        height: 34,
        width: 34,
        tintColor: Colors.AppColor
    },
    button: {
        // marginTop: SCREEN_HEIGHT * 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.AppColor,
        borderRadius: 10,
        padding: 10,
        paddingHorizontal:20,
        alignSelf: 'center'
    },
    buttonText: {
        color: Colors.White,
        fontSize: 18
    },
    logo:{
        height: 80,
        width:80,
        alignSelf:'center',
        marginTop: SCREEN_HEIGHT * 0.04
    },
})