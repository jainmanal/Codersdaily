import { StyleSheet } from 'react-native';
import { Colors } from '../../Helper/Colors.js';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex: 1,
        backgroundColor: Colors.White,
        marginTop: 100
    },
    logo: {
        height: 220,
        width: 220,
        marginBottom: 20,
    },
    text: {
        fontSize: 34,
        fontWeight: 'bold',
        color: Colors.AppColor
    },
    subContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})