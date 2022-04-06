import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ToastAndroid } from 'react-native';
import { styles } from "./styles";
import ImagePathVariable from "../../Helper/ImagePathVariable/ImagePathVariable";
import IconPathVariable from "../../Helper/IconPathVariable/IconPathVariable";
import { CustomEmailTextInput } from "../../Component/CustomEmailTextInput";
import { CustomTextInput } from "../../Component/CustomTextInput";
import LinearGradient from "react-native-linear-gradient";
import { LoginApi } from "../../Helper/API_Call/API_Call";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { saveUserToken } from "../../Redux/Actions/action";

export const LoginScreen = ({ navigation }) => {

    const [UserName, setUserName] = useState('')
    const [Password, setPassword] = useState('')

    const dispatch = useDispatch()

    const HandleLogin = () => {
        if (!UserName) {
            ToastAndroid.show('Please enter User Name',
                ToastAndroid.SHORT)
        }
        else if (!Password) {
            ToastAndroid.show('Please enter Password',
                ToastAndroid.SHORT)
        }
        else {
            LoginApi(UserName, Password).then(async (resp) => {
                let response = resp;
                if (response.status == 200) {
                    const token = response.data.access
                    await AsyncStorage.setItem('token', token)
                    dispatch(saveUserToken(token));
                    navigation.reset({ index: 0, routes: [{ name: 'BottomTab' }] })
                    ToastAndroid.show('Logged in Successfully',
                        ToastAndroid.SHORT)
                }
                else {
                    ToastAndroid.show(response.data.detail,
                        ToastAndroid.SHORT)
                }
            }).catch(e => {
                console.log('error', e)
                ToastAndroid.show(e,
                    ToastAndroid.SHORT)
            })
        }
    }

    return (
        <View style={styles.mainContainer}>
            <Image source={ImagePathVariable.AppLogo} style={styles.logo} />
            <View style={styles.container}>
                <Text style={styles.login}>Login</Text>
                <Text style={styles.text}>Please sign in to continue.</Text>
                <View style={{ marginTop: 50 }}>
                    <CustomEmailTextInput
                        autoCapitalize='none'
                        keyboardType='email-address'
                        IconName={'account'}
                        // MaterialCommunityIcons="lock"
                        TextInputProps={{
                            placeholder: "User Name",
                            onChangeText: (text) => setUserName(text),
                            value: UserName,
                            returnKeyType: "next",
                        }}
                    />
                    <CustomTextInput
                        IconName="lock"
                        TextInputProps={{
                            placeholder: "Password",
                            secureTextEntry: true,
                            onChangeText: (text) => setPassword(text),
                            value: Password,
                            returnKeyType: "done",
                        }}
                    />
                </View>
                <TouchableOpacity onPress={()=> navigation.navigate('ForgetPassword')}
                style={styles.contain}>
                    <Text style={styles.forgot}>FORGOT</Text>
                </TouchableOpacity>

                <View style={{ alignSelf: 'flex-end' }}>
                    <TouchableOpacity onPress={() => HandleLogin()}>
                        <LinearGradient colors={['#fddd2f', '#faa726']}
                            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                            style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>LOGIN</Text>
                            <Image source={IconPathVariable.Next} style={styles.icon} />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

                <View style={styles.botomContainer}>
                    <Text style={styles.bottomText}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}><Text style={styles.signup}> Sign up</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}