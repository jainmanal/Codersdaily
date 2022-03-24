import { StyleSheet } from 'react-native';
import { Colors } from '../../Helper/Colors.js';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Helper/DeviceDimentions/index.js';

export const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 70,
        paddingHorizontal: 10,
        // marginBottom: 70
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    logoContainer: {
        backgroundColor: Colors.White,
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
    },
    logo: {
        height: 80,
        width: 80,
        resizeMode: 'contain'
    },
    contain: {
        justifyContent: 'center',
        marginTop: 5,
        marginLeft: 70
    },
    name: {
        color: Colors.black,
        fontSize: 21,
        fontWeight: 'bold'
    },
    container: {
        flexDirection: 'row',
        marginVertical: 6
    },
    icon: {
        height: 14,
        width: 14,
        tintColor: Colors.TextGrey,
        marginTop: 4
    },
    location: {
        color: Colors.TextGrey,
        fontSize: 15
    },
    subText: {
        fontWeight: 'bold',
        color: Colors.AppColor,
        marginTop: 8,
        fontSize: 16,
        marginLeft: 6
    },
    subContainer: {
        marginVertical: 10,
        paddingHorizontal: 10,
        marginTop: 20
    },
    heading: {
        fontSize: 26,
        color: Colors.black,
        fontWeight: 'bold'
    },
    listContainer: {
        justifyContent: 'space-between',
        alignItems:'center',
        backgroundColor: Colors.White,
        marginVertical: 10,
        padding: 15,
        flexDirection:'row'
    },
    headings: {
        fontSize: 22,
        color: Colors.black
    },
    icon1:{
        height: 24,
        width: 24
    },
})