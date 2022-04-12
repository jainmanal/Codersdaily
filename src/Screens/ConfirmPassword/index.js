import { NavigationContainer } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, Image, ToastAndroid } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import { SCREEN_HEIGHT } from "../../Helper/DeviceDimentions";
import { CustomHeader } from "../../Component/CustomHeader";
import { CustomTextInput } from "../../Component/CustomTextInput";
import IconPathVariable from "../../Helper/IconPathVariable/IconPathVariable";
import { styles } from "./styles";
import { confirmPassword } from "../../Helper/API_Call/API_Call";
import ImagePathVariable from "../../Helper/ImagePathVariable/ImagePathVariable";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { saveUserDetail } from "../../Redux/Actions/action";

export const ConfirmPassword = ({ route, navigation }) => {

    const inputEmailId = useRef(null);
    // const [Email, setEmail] = useState(UserData)
    const [oldPass, setOldPass] = useState('')
    const [newPass, setNewPass] = useState('')
    const [ConfirmPassword, setConfirmPassword] = useState('')
    const { Email } = route.params;
    console.log('mail====', Email)

    const dispatch = useDispatch();

    const resetPassword = () => {
        if (!(oldPass)) {
            ToastAndroid.show('Please enter old password',
                ToastAndroid.SHORT)
        }
        else if (!(newPass)) {
            ToastAndroid.show('Please enter new passwor',
                ToastAndroid.SHORT)
        }
        else if (ConfirmPassword !== newPass) {
            ToastAndroid.show('Password not matched',
                ToastAndroid.SHORT)
        }
        else {
            confirmPassword(ConfirmPassword, Email).then(async (res) => {
                console.log('email;;;;', Email)
                let response = res;
                console.log('passResponse', response)
                if (response.data.status_code == 200) {
                    const value = JSON.stringify(response.data.data.data)
                    console.log('data====', response.data.data.data)
                    await AsyncStorage.setItem('value', value)
                    dispatch(saveUserDetail(JSON.parse(value)));
                    navigation.navigate('Login')
                    ToastAndroid.show('Your password updated',
                        ToastAndroid.SHORT)
                }
                else {
                    ToastAndroid.show(JSON.stringify(response.data.data),
                        ToastAndroid.SHORT)
                }
            }).catch(e => {
                let error = e;
                console.log(error)
            })
        }
    }

    return (
        <ScrollView>
            <View style={styles.mainContainer}>
                {/* <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={IconPathVariable.Back} style={styles.icon} />
                </TouchableOpacity> */}
                <Image source={ImagePathVariable.AppLogo} resizeMode='contain' style={styles.logo} />
                <Text style={styles.text}>Reset Password</Text>

                <View style={styles.subContainer}>
                    <View style={styles.container}>
                        <CustomTextInput
                            IconName="lock"
                            Input={inputEmailId}
                            TextInputProps={{
                                placeholder: "Old Password",
                                secureTextEntry: true,
                                onChangeText: (text) => setOldPass(text),
                                value: oldPass,
                                returnKeyType: "done",
                            }}
                        />
                    </View>
                    <View style={styles.container}>
                        <CustomTextInput
                            IconName="lock"
                            Input={inputEmailId}
                            TextInputProps={{
                                placeholder: "New Password",
                                secureTextEntry: true,
                                onChangeText: (text) => setNewPass(text),
                                value: newPass,
                                returnKeyType: "done",
                            }}
                        />
                    </View>
                    <View style={styles.container}>
                        <CustomTextInput
                            IconName="lock"
                            Input={inputEmailId}
                            TextInputProps={{
                                placeholder: "Confirm New Password",
                                secureTextEntry: true,
                                onChangeText: (text) => setConfirmPassword(text),
                                value: ConfirmPassword,
                                returnKeyType: "done",
                            }}
                        />
                    </View>
                </View>
                <TouchableOpacity onPress={() => resetPassword()}
                    style={{
                        backgroundColor: 'red',
                        marginTop: SCREEN_HEIGHT * 0.1,
                        alignSelf: 'center', borderRadius: 20
                    }}>
                    <LinearGradient style={styles.button}
                        colors={['#fddd2f', '#faa726']}
                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                        <Text style={styles.buttonText}>RESET PASSWORD</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}