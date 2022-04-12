import React, { useRef, useEffect } from 'react';
import { View, Text, Image, Animated, Dimensions } from 'react-native';
import { styles } from './styles.js';
import ImagePathVariable from '../../Helper/ImagePathVariable/ImagePathVariable.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { saveUserDetail, saveUserToken } from '../../Redux/Actions/action.js';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LoginScreen } from '../LoginScreen/index.js';
import IconPathVariable from '../../Helper/IconPathVariable/IconPathVariable.js';

const SplashScreen = ({ navigation }) => {

    const edges = useSafeAreaInsets();
    const startAnim = useRef(new Animated.Value(0)).current;

    const scaleLogo = useRef(new Animated.Value(1)).current;
    const scaleTitle = useRef(new Animated.Value(1)).current;

    const moveLogo = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

    const dispatch = useDispatch();

    useEffect(() => {

        setTimeout(() => {
            checkIfAlreadySignedIn()
        }, 2000);
    }, [])

    const checkIfAlreadySignedIn = async () => {
        const token = await AsyncStorage.getItem('token')
        const value = await AsyncStorage.getItem('value')
        console.log('splash value==', token, value)
        if (token != null && value != null) {
            dispatch(saveUserDetail(JSON.parse(value)));
            dispatch(saveUserToken(token))
            navigation.navigate('BottomTab');
        }
        else {
            navigation.navigate('Login');
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={ImagePathVariable.AppLogo} />
        </View>
    )
}
export default SplashScreen;