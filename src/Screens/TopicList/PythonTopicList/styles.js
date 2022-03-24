import { StyleSheet } from 'react-native';
import { Colors } from '../../../Helper/Colors.js';

export const styles = StyleSheet.create({
    mainContainer: {
        // padding: 15,
        marginTop: 60,
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
        fontSize: 22,
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
})