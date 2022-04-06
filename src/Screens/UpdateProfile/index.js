import React, { useState, useRef } from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CustomTextInput } from "../../Component/CustomTextInput";
import ImagePathVariable from "../../Helper/ImagePathVariable/ImagePathVariable";
import IconPathVariable from "../../Helper/IconPathVariable/IconPathVariable";
import { styles } from "./styles";
import { SCREEN_HEIGHT } from "../../Helper/DeviceDimentions";
import { Colors } from "../../Helper/Colors.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UpdateProfileApi } from "../../Helper/API_Call/API_Call";
import { useSelector } from "react-redux";
import { CustomEmailTextInput } from "../../Component/CustomEmailTextInput";
import LinearGradient from "react-native-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";

export const UpdateProfile = () => {

    const navigation = useNavigation();
    const usertoken = useSelector(state => state?.coders?.userToken)

    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [UserName, setUserName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    const inputFirstName = useRef(null);
    const inputLastName = useRef(null);
    const inputUserName = useRef(null);
    const inputEmailId = useRef(null);
    const inputPassword = useRef(null);

    const handleEditProfile = async => {
        console.log('hey')
        UpdateProfileApi(usertoken).then(async res => {
            let response = res;
            console.log('EditResponse', response.data)
        })
    }

    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
                <ImageBackground source={ImagePathVariable.HomeImage} resizeMode={'cover'}
                    borderBottomLeftRadius={80} borderBottomRightRadius={80}
                    style={styles.Container} >
                    <View style={styles.textContainer}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={IconPathVariable.Back} style={styles.icon1} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image source={IconPathVariable.Profile} style={styles.image} />
                    </View>
                </ImageBackground>
                <View style={styles.maincontainer}>
                    <View style={{ marginTop: 30 }}>
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
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <CustomEmailTextInput
                            autoCapitalize='none'
                            keyboardType='email-address'
                            IconName={'account'}
                            onSubmitEditing={() => inputLastName.current.focus()}
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
                            TextInputProps={{
                                placeholder: "User name",
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
                            IconName={'email'}
                            onSubmitEditing={() => inputEmailId.current.focus()}
                            TextInputProps={{
                                placeholder: "Email",
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
                            placeholder: "Confirm Password",
                            secureTextEntry: true,
                            onChangeText: (text) => setPassword(text),
                            value: Password,
                            returnKeyType: "done",
                        }}
                    />
                </View>
                <TouchableOpacity onPress={() => handleEditProfile()}
                    style={{
                        backgroundColor: 'red', marginTop: SCREEN_HEIGHT * 0.07,
                        alignSelf: 'center', borderRadius: 20
                    }}>
                    <LinearGradient style={styles.button}
                        colors={['#fddd2f', '#faa726']}
                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                        <Text style={styles.logout}>Update Profile</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </ScrollView>

    )
}