import { StyleSheet } from 'react-native';
import { Colors } from '../../Helper/Colors.js/index.js';
import { SCREEN_WIDTH } from '../../Helper/DeviceDimentions/index.js';

export const styles = StyleSheet.create({
    mainContainer: {
        marginTop:70,
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        color:Colors.black,
        textAlign:'center'
    },
    bottom:{
        flex:1,
        paddingHorizontal:15,
    },
    container: {
        marginVertical:10,
        width:SCREEN_WIDTH / 1.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        bottom:0,
        position:'absolute'
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.AppColor,
        padding: 10,
        paddingHorizontal: 15,
        borderRadius: 6
    },
    buttonText: {
        color: Colors.White,
        fontSize: 20,
        fontWeight: 'bold'
    },
    icon: {
        height: 18,
        width: 18,
        tintColor: Colors.White,
    },
    subContainer:{
        marginTop:20
    },
    text:{
        marginVertical: 10,
        color: '#71797E',
        fontSize: 14,
    }
})
