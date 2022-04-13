import React, { useRef, useEffect, useState } from 'react';
import { View, Text, Image, Animated, Dimensions, Modal, TouchableOpacity } from 'react-native';
import { styles } from './styles.js';
import ImagePathVariable from '../../Helper/ImagePathVariable/ImagePathVariable.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { saveUserDetail, saveUserToken } from '../../Redux/Actions/action.js';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LoginScreen } from '../LoginScreen/index.js';
import IconPathVariable from '../../Helper/IconPathVariable/IconPathVariable.js';
import AnimatedLottieView from 'lottie-react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from '../../Helper/Colors.js/index.js';
import { SCREEN_HEIGHT } from 'react-native-normalize';

const SplashScreen = ({ navigation }) => {

    const [animation, setAnimation] = useState(new Animated.Value(0));
    const moveLogo = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
    const { height } = Dimensions.get("window");
    const [show, setShow] = useState(false)

    const dispatch = useDispatch();

    useEffect(() => {
        // setTimeout(() => {
        //     slideImage()
        // }, 1000);
        setTimeout(() => {
            modalVisible(),
            slideImage()
        }, 1000);
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
        // else {
        //     navigation.navigate('AppIntro');
        // }
    }

    const slideImage = () => {
        Animated.timing(moveLogo, {
            toValue: {
                x: (Dimensions.get('window').width),
                y: (Dimensions.get("window").height) 
            },
            useNativeDriver: true
        })
    }

    const modalVisible = () => {
        // setShow(true)
        Animated.timing(animation, {
            toValue: 1,
            duration: 500,
            useNativeDriver: false
        }).start()
    }

    const color = animation.interpolate({
        inputRange: [0, 0.2, 1.0, 2],
        outputRange: [
            "rgba(255, 255, 255, 0.0)",
            "rgba(45,57,82,0.5)",
            "rgba(45, 57, 82, 0.8)",
            "rgba(255, 255, 255, 0.0)"
        ]
    })

    const openModal = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolate: "clamp",
    })

    const saveModal = animation.interpolate({
        inputRange: [1, 2],
        outputRange: [0, -height],
        extrapolate: "clamp",
    })

    const open = {
        transform: [
            { scale: openModal },
            { translateY: saveModal }
        ]
    }

    return (
        <View style={{ flex: 1, padding: 15, }}>
            <Animated.Image source={require('../../assets/animation/anim.gif')}
                style={{
                    height: 150,
                    width: 150,
                    alignSelf: 'center',
                    // marginTop: show == false ? SCREEN_HEIGHT * 0.4 : SCREEN_HEIGHT * 0.09
                    marginTop: SCREEN_HEIGHT * 0.4,
                    transform: [
                        { translateX: moveLogo.x },
                        { translateY: moveLogo.y }
                    ]
                }} />
            <Animated.View style={[styles.modal, open]}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}
                    style={[styles.button, { backgroundColor: '#fff' }]}>
                    <Text style={[styles.buttonText, { color: Colors.AppColor }]}>Log in</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}
                    style={[styles.button, { backgroundColor: Colors.AppColor }]}>
                    <Text style={[styles.buttonText, { color: Colors.White }]}>Sign Up</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    )
}
export default SplashScreen;