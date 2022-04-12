import React, { useState, useRef } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, ToastAndroid } from 'react-native';
import { styles } from "./styles";
import ImagePathVariable from "../../Helper/ImagePathVariable/ImagePathVariable";
import IconPathVariable from "../../Helper/IconPathVariable/IconPathVariable";
import { CustomEmailTextInput } from "../../Component/CustomEmailTextInput";
import { CustomTextInput } from "../../Component/CustomTextInput";
import LinearGradient from "react-native-linear-gradient";
import { SignUpApi } from "../../Helper/API_Call/API_Call";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { saveUserDetail, saveUserToken } from "../../Redux/Actions/action";

export const SignUpScreen = ({ navigation }) => {

    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [UserName, setUserName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')

    const dispatch = useDispatch();

    const inputFirstName = useRef(null);
    const inputLastName = useRef(null);
    const inputUserName = useRef(null);
    const inputEmailId = useRef(null);
    const inputPassword = useRef(null);
    const inputRePassword = useRef(null);

    const HandleSignUp = () => {
        if (!FirstName) {
            ToastAndroid.show('Please enter first name',
                ToastAndroid.SHORT)
        }
        else if (!LastName) {
            ToastAndroid.show('Please enter last name',
                ToastAndroid.SHORT)
        }
        else if (!UserName) {
            ToastAndroid.show('Please enter user name',
                ToastAndroid.SHORT)
        }
        else if (!Email) {
            ToastAndroid.show('Please enter email',
                ToastAndroid.SHORT)
        }
        else if (!(Password)) {
            ToastAndroid.show('Please enter password',
                ToastAndroid.SHORT)
        }
        else if (rePassword !== Password) {
            ToastAndroid.show('Password not matched',
                ToastAndroid.SHORT)
        }
        else {
            SignUpApi(FirstName, LastName, UserName, Email, Password).then(async (resp) => {
                let response = resp;
                const jsonvalue = (response.data)
                // console.log('Respone====', jsonvalue)
                if (response.status === 200) {
                    const value = JSON.stringify(response.data.data.user_details)
                    console.log('userdetails', value)
                    const UserName = JSON.stringify(response.data.data.user_details.username)
                    console.log('usernme', UserName)
                    await AsyncStorage.setItem('UserName', UserName)
                    const token = response.data.data.token.access;
                    // console.log('Token==', token)
                    await AsyncStorage.setItem('value', value);
                    await AsyncStorage.setItem('token', token);
                    dispatch(saveUserDetail(JSON.parse(value)));
                    dispatch(saveUserToken(token));
                    const UserData = response.data.data.user_details
                    console.log('UserData', UserData)
                    // navigation.navigate('BottomTab')
                    navigation.reset({ index: 0, routes: [{ name: 'BottomTab' }] })
                    ToastAndroid.show('Registered Successfully',
                        ToastAndroid.SHORT)
                }
                else {
                    ToastAndroid.show(response.data.message,
                        ToastAndroid.SHORT)
                }
            }).catch(e => {
                let erroe = e
                console.log(erroe)
            })

        }
        // navigation.navigate('BottomTab', {myName: 'preet'})
    }

    return (
        <ScrollView>
            <View style={styles.mainContainer}>
                <Image source={ImagePathVariable.AppLogo} style={styles.logo} />
                <View style={styles.container}>
                    <Text style={styles.login}>Create Account</Text>
                    <View style={{ marginTop: 20 }}>
                        <CustomEmailTextInput
                            autoCapitalize='none'
                            keyboardType='email-address'
                            IconName={'account'}
                            onSubmitEditing={() => inputFirstName.current.focus()}
                            TextInputProps={{
                                placeholder: "First Name",
                                onChangeText: (text) => setFirstName(text),
                                value: FirstName,
                                returnKeyType: "next",
                            }}
                        />
                        <View style={{ marginTop: 30 }}>
                            <CustomEmailTextInput
                                autoCapitalize='none'
                                keyboardType='email-address'
                                IconName={'account'}
                                onSubmitEditing={() => inputLastName.current.focus()}
                                Input={inputFirstName}
                                TextInputProps={{
                                    placeholder: "Last Name",
                                    onChangeText: (text) => setLastName(text),
                                    value: LastName,
                                    returnKeyType: "next",
                                }}
                            />
                        </View>
                        <View style={{ marginTop: 30 }}>
                            <CustomEmailTextInput
                                autoCapitalize='none'
                                keyboardType='email-address'
                                IconName={'account'}
                                onSubmitEditing={() => inputUserName.current.focus()}
                                Input={inputLastName}
                                TextInputProps={{
                                    placeholder: "User Name",
                                    onChangeText: (text) => setUserName(text),
                                    value: UserName,
                                    returnKeyType: "next",
                                }}
                            />
                        </View>
                        <View style={{ marginTop: 30 }}>
                            <CustomEmailTextInput
                                autoCapitalize='none'
                                keyboardType='email-address'
                                MaterialCommunityIcons="email"
                                onSubmitEditing={() => inputEmailId.current.focus()}
                                Input={inputUserName}
                                TextInputProps={{
                                    placeholder: "Your Email",
                                    onChangeText: (text) => setEmail(text),
                                    value: Email,
                                    returnKeyType: "next",
                                }}
                            />
                        </View>
                        <CustomTextInput
                            IconName="lock"
                            Input={inputEmailId}
                            TextInputProps={{
                                placeholder: "Password",
                                secureTextEntry: true,
                                onChangeText: (text) => setPassword(text),
                                value: Password,
                                returnKeyType: "done",
                            }}
                        />
                        <CustomTextInput
                            IconName="lock"
                            Input={inputPassword}
                            TextInputProps={{
                                placeholder: "Confirm Password",
                                secureTextEntry: true,
                                onChangeText: (text) => setRePassword(text),
                                value: rePassword,
                                returnKeyType: "done",
                            }}
                        />
                    </View>

                    <View style={{ alignSelf: 'flex-end', marginVertical: 15 }}>
                        <TouchableOpacity onPress={() => HandleSignUp()}>
                            <LinearGradient colors={['#fddd2f', '#faa726']}
                                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                style={styles.buttonContainer}>
                                <Text style={styles.buttonText}>SIGN UP</Text>
                                <Image source={IconPathVariable.Next} style={styles.icon} />
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.botomContainer}>
                        <Text style={styles.bottomText}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={styles.signup}> Sign in</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}