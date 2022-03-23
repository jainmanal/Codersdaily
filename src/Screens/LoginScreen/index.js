import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from "./styles";
import ImagePathVariable from "../../Helper/ImagePathVariable/ImagePathVariable";
import IconPathVariable from "../../Helper/IconPathVariable/IconPathVariable";
import { CustomEmailTextInput } from "../../Component/CustomEmailTextInput";
import { CustomTextInput } from "../../Component/CustomTextInput";
import LinearGradient from "react-native-linear-gradient";

export const LoginScreen = ({ navigation }) => {

    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    const HandleLogin = () => {
        navigation.navigate('BottomTab')
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
                        MaterialCommunityIcons="email"
                        onSubmitEditing={() => inputEamilId.current.focus()}
                        TextInputProps={{
                            placeholder: "Your Email",
                            onChangeText: (text) => setEmail(text),
                            value: Email,
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
                <TouchableOpacity style={styles.contain}>
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