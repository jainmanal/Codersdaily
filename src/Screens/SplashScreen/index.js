import React, { useRef, useEffect } from 'react';
import { View, Text, Image, Animated, Dimensions } from 'react-native';
import { styles } from './styles.js';
import ImagePathVariable from '../../Helper/ImagePathVariable/ImagePathVariable.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { saveUserDetail, saveUserToken } from '../../Redux/Actions/action.js';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LoginScreen } from '../LoginScreen/index.js';

const SplashScreen = ({ navigation }) => {

    const edges = useSafeAreaInsets();
    const startAnim = useRef(new Animated.Value(0)).current;

    const scaleLogo = useRef(new Animated.Value(1)).current;
    const scaleTitle = useRef(new Animated.Value(1)).current;

    const moveLogo = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            Animated.parallel([
                Animated.timing(
                    startAnim,
                    {
                        toValue: -Dimensions.get('window').height + edges.top + 65,
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    scaleLogo,
                    {
                        toValue: 0.35,
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    scaleTitle,
                    {
                        toValue: 0.8,
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    moveLogo,
                    {
                        toValue: {
                            x: (Dimensions.get('window').width / 2) - 200,
                            y: (Dimensions.get('window').height / 2) - 50
                        },
                        useNativeDriver: true
                    }
                ),
            ]).start();
        }, 2000)
        setTimeout(() => {
            checkIfAlreadySignedIn()
        }, 150);
    }, [])

    const checkIfAlreadySignedIn = async () => {
        const token = await AsyncStorage.getItem('token')
        const value = await AsyncStorage.getItem('value')
        console.log('splash value==', token, value)
        if (token != null && value != null) {
            dispatch(saveUserDetail(JSON.parse(value)));
            dispatch(saveUserToken(token))
            navigation.navigate('BottomTab', {UserData: value});
        }
        // else {
        //     navigation.navigate('Login');
        // }
    }

    return (
        <View style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        }}>
            <Animated.View style={[styles.container,
            { transform: [{ translateY: startAnim }] }]}>
                <Animated.View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                >
                    <Animated.Image source={ImagePathVariable.AppLogo} resizeMode='contain' style={[styles.logo,
                    {
                        transform: [
                            { translateX: moveLogo.x },
                            { translateY: moveLogo.y },
                            { scale: scaleLogo },

                        ]
                    }
                    ]} />
                </Animated.View>
            </Animated.View>

            <Animated.View style={{
                position: 'absolute',
                // top: 0,
                // bottom: 0,
                // left: 0,
                // right: 0,
                backgroundColor: 'white',
                zIndex: 0
            }}>
                <LoginScreen></LoginScreen>
            </Animated.View>
        </View>
    )
}
export default SplashScreen;