import { StyleSheet } from 'react-native';
import { Colors } from '../../Helper/Colors.js/index.js';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Helper/DeviceDimentions/index.js';

export const styles = StyleSheet.create({
    maincontainer: {
        marginTop: 60,
    },
    heading: {
        fontSize: 28,
        color: Colors.White,
        fontWeight: 'bold',
        // textAlign: 'center',
        // marginVertical: 10,
        // textAlign:'center',
        alignSelf:'center'
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
        justifyContent: 'space-between',
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
    image: {
        height: 250,
        width: 400,
        resizeMode: 'contain'
    },
    subContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf:'center'
    },
    icon: {
        height: 20,
        width: 20,
        tintColor: Colors.White,
        // alignSelf:'flex-start'
    },
    text: {
        // width:'75%',
        fontSize: 16,
        // fontWeight: 'bold',
        color: Colors.black,
        alignSelf: 'center',
        marginLeft: 10
    },
    iconContainer: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fbdf8d',
        borderRadius: 20,
        alignSelf: 'center'
    },
    txt: {
        fontWeight: 'bold',
        color: Colors.White,
        fontSize: 16,
        alignSelf:'center'
    },
    name: {
        fontSize: 14,
        color: Colors.White,
        fontWeight: 'normal'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 10,
        width: SCREEN_WIDTH * 65 / 100,
        alignSelf: 'center',
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
        borderColor: Colors.AppColor,
        borderWidth: 4,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        // paddingVertical:SCREEN_WIDTH*30/100
    },
    button: {
        borderRadius: 20,
        marginTop: SCREEN_WIDTH * 5 / 100,
        paddingVertical: SCREEN_WIDTH * 3 / 100,
        elevation: 2,
        width: SCREEN_WIDTH * 30 / 100,
        marginVertical: SCREEN_HEIGHT * 0.03
    },

    buttonClose: {
        backgroundColor: "#fbba28",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        fontSize: 20,
        color: Colors.black,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10
    },
    linearContainer: {
        padding: 20,
        borderRadius: 30,
        alignItems: 'center',
        elevation: 10,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        marginHorizontal: 4
        // backgroundColor:'#fff'
    },
    linear: {
        flex: 1,
        paddingHorizontal: 5,

    },
    contain:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical: 10,
        // justifyContent:'space-evenly',
        // alignSelf:'flex-start'
    }
})
