import { StyleSheet } from 'react-native';
import { Colors } from '../../../Helper/Colors.js';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../Helper/DeviceDimentions/index.js';

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 15,
        backgroundColor: Colors.White,
        marginTop: 60,
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        color: Colors.black,
        textAlign:'center'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 18
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'orange',
        padding: 10,
        paddingHorizontal: 15,
        borderRadius: 6
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    icon: {
        height: 18,
        width: 18,
        tintColor: "#fff",
        // marginHorizontal:6
    },
    list: {
        flexDirection: 'row',
        // justifyContent:'space-evenly',
        // alignItems: 'center',
        marginVertical: 10
    },
    dot: {
        height: 10,
        width: 10,
        marginTop: 6
        // marginHorizontal:6
    },
    description: {
        fontSize: 16,
        marginLeft: 10,
        marginHorizontal: 15,
        color: '#000'
    },
    subContainer: {
        marginTop: 20
    },
    q: {
        fontSize: 22,
        color:'black',
        fontWeight: 'bold',
        marginVertical: 10,
        marginLeft:15
    },
    main:{
        flex:1, 
        backgroundColor:'#fff',
        // marginHorizontal:15
    },
    bottom:{
        marginHorizontal:15,
        marginVertical:10
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