import React, { useRef, useEffect } from 'react';
import { View, Text, Image, Animated } from 'react-native';
import { styles } from './styles.js';
import ImagePathVariable from '../../Helper/ImagePathVariable/ImagePathVariable.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { saveUserDetail, saveUserToken } from '../../Redux/Actions/action.js';

const SplashScreen = ({ navigation }) => {

    const fadeAnim = useRef(new Animated.Value(0)).current;
    const dispatch = useDispatch();

    useEffect(() => {
        fadeIn();
        setTimeout(() => {
            checkIfAlreadySignedIn()
        }, 2500);
    }, [])

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true
        }).start();
    };

    const checkIfAlreadySignedIn = async () => {
        const Value = await AsyncStorage.getItem('value')
        const token = await AsyncStorage.getItem('token')
        // console.log('splash value', token)
        if (Value != null && token != null) {
            dispatch(saveUserDetail(JSON.parse(Value)));
            dispatch(saveUserToken(token))
            navigation.navigate('BottomTab');
        }
        else {
            navigation.navigate('AppIntro');
        }
    }

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.fadingContainer,
                    {
                        opacity: fadeAnim
                    }
                ]}
            >
                <Image source={ImagePathVariable.AppLogo} style={styles.logo} />
            </Animated.View>
        </View>
    )
}
export default SplashScreen;