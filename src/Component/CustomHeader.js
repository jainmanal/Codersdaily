import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../Helper/DeviceDimentions';
import IconPathVariable from '../Helper/IconPathVariable/IconPathVariable';
import ImagePathVariable from '../Helper/ImagePathVariable/ImagePathVariable';
import { Colors } from '../Helper/Colors.js';

export const CustomHeader = () => {
    return (
        <View style={styles.container}>
            <Image source={ImagePathVariable.AppLogo} style={styles.logo} />
        </View>
    )
}
const styles = StyleSheet.create({
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
         justifyContent:'center'
    },
    logo: {
        height: 60,
        width: 60,
        resizeMode: 'contain',
    },
})