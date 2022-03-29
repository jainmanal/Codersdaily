import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from "./styles";
import ImagePathVariable from "../../Helper/ImagePathVariable/ImagePathVariable";
import IconPathVariable from "../../Helper/IconPathVariable/IconPathVariable";
import { CustomEmailTextInput } from "../../Component/CustomEmailTextInput";
import { CustomTextInput } from "../../Component/CustomTextInput";
import LinearGradient from "react-native-linear-gradient";

export const SignUpScreen = ({ navigation }) => {

    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    const HandleSignUp = () => {
        navigation.navigate('BottomTab')
    }

    return (
        <ScrollView>
        <View style={styles.mainContainer}>
            <Image source={ImagePathVariable.AppLogo} style={styles.logo}/>
            <View style={styles.container}>
                <Text style={styles.login}>Create Account</Text>
                <View style={{ marginTop: 20 }}>
                    <CustomEmailTextInput
                        autoCapitalize='none'
                        keyboardType='email-address'
                        IconName={'account'}
                        // MaterialCommunityIcons="lock"
                        onSubmitEditing={() => inputEamilId.current.focus()}
                        TextInputProps={{
                            placeholder: "First Name",
                            onChangeText: (text) => setEmail(text),
                            value: Email,
                            returnKeyType: "next",
                        }}
                    />
                    <View style={{ marginTop: 30 }}>
                    <CustomEmailTextInput
                        autoCapitalize='none'
                        keyboardType='email-address'
                        IconName={'account'}
                        // MaterialCommunityIcons="lock"
                        onSubmitEditing={() => inputEamilId.current.focus()}
                        TextInputProps={{
                            placeholder: "Last Name",
                            onChangeText: (text) => setEmail(text),
                            value: Email,
                            returnKeyType: "next",
                        }}
                    />
                    </View>
                    <View style={{ marginTop: 30 }}>
                    <CustomEmailTextInput
                        autoCapitalize='none'
                        keyboardType='email-address'
                        IconName={'account'}
                        // MaterialCommunityIcons="lock"
                        onSubmitEditing={() => inputEamilId.current.focus()}
                        TextInputProps={{
                            placeholder: "User Name",
                            onChangeText: (text) => setEmail(text),
                            value: Email,
                            returnKeyType: "next",
                        }}
                    />
                    </View>
                    <View style={{ marginTop: 30 }}>
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
                    </View>
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
                    <CustomTextInput
                        IconName="lock"
                        TextInputProps={{
                            placeholder: "Confirm Password",
                            secureTextEntry: true,
                            onChangeText: (text) => setPassword(text),
                            value: Password,
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