import React, { useState, createRef, useRef } from 'react';
import { Image, Text, ToastAndroid, View, TouchableOpacity } from 'react-native';
import { CustomEmailTextInput } from '../../Component/CustomEmailTextInput';
import ImagePathVariable from '../../Helper/ImagePathVariable/ImagePathVariable.js';
// import { ForgotPasswordApi, LoginApi } from '../../Helper/API_Call/API_Call.js';
import { styles } from './styles.js';
import LinearGradient from 'react-native-linear-gradient';

const ForgetPassword = ({ navigation }) => {

    const [Email, SetEmail] = useState("");

    const onSubmit = () => {
        navigation.navigate('verifyOTP');

        // console.log('hii')
        // if (!Email) {
        //     ToastAndroid.show('Please enter email',
        //     ToastAndroid.SHORT)
        // }
        //     else {
        //         ForgotPasswordApi(Email).then(async (res) => {
        //             let response = res;
        //             console.log(response.data)
        //             // navigation.replace("ConfirmPassword")
        //         })
        //             .catch(err => {
        //                 let error = err
        //                 console.log(error)

        //             })
        //     }
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={ImagePathVariable.AppLogo} />

            <View style={styles.headerview}>
                <View style={styles.Iconstyle}>
                    <Text style={styles.textstyle}>Forgot Password</Text>
                </View>
            </View>
            <View style={styles.DataContainer}>
                <Text style={styles.TextStyle_1}>Please enter email address associated with your account</Text>
                <View >


                    <View style={styles.TextInputEmailContainer}>
                        <CustomEmailTextInput
                            autoCapitalize='none'
                            keyboardType='email-address'
                            MaterialCommunityIcons="email"
                            TextInputProps={{
                                placeholder: "Your Email",
                                onChangeText: (text) => SetEmail(text),
                                value: Email,
                            }}
                        />
                    </View>

                    <View style={styles.TextInputEmailContainer} >
                        <TouchableOpacity
                            onPress={() => onSubmit()}>
                            <LinearGradient colors={['#fddd2f', '#faa726']}
                                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                style={styles.ButtonStyle}
                            >
                                <Text style={styles.forgotpassword_Text}>Reset Password</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                    </View>

                </View>
            </View>
        </View>
    );
}

export default ForgetPassword;

