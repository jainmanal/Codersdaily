import React, { useRef, useEffect } from 'react';
import { View, Text, Image, Animated } from 'react-native';
import { styles } from './styles.js';
import ImagePathVariable from '../../Helper/ImagePathVariable/ImagePathVariable.js';

const SplashScreen = ({ navigation }) => {

    const fadeAnim = useRef(new Animated.Value(0)).current;

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

    const checkIfAlreadySignedIn = () => {
        navigation.navigate('AppIntro');
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