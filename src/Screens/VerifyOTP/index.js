import React, { useState } from "react";
import { View, Text, TouchableOpacity, ToastAndroid, Image } from "react-native";
import { CustomHeader } from "../../Component/CustomHeader";
import IconPathVariable from "../../Helper/IconPathVariable/IconPathVariable";
import ImagePathVariable from "../../Helper/ImagePathVariable/ImagePathVariable";
import { styles } from "./styles";
import OtpInputs from 'react-native-otp-inputs';
import { Colors } from "../../Helper/Colors.js";
import { ResendOtp, VerifyOtp } from '../../Helper/API_Call/API_Call';
import { useDispatch } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { saveUserDetails, saveUserToken } from '../../Redux/Actions/action.js';

export const VerifyOTP = ({ route, navigation }) => {

    // const {d} = route.params

    // const { UserData } = route.params;
    // const [Email, SetEmail] = useState(UserData.email);
    const [otp, setOtp] = useState('')
    const dispatch = useDispatch();

    // console.log("params", UserData.email)

    const verifyOtp = () => {
        console.log('Verify');
        console.log(otp)

        // VerifyOtp(otp).then(async (res) => {
        //     let response = res;
        //     console.log('Data===',response.data)
        //     if (response.status === 200) {
        //         const value = JSON.stringify(response.data.data.userdetailsdata)
        //         console.log('Value====', value)
        //         const token = response.data.data.token;
        //         console.log('token====', token);
        //         await AsyncStorage.setItem('value', value);
        //         await AsyncStorage.setItem('token', token);
        //         dispatch(saveUserDetails(JSON.parse(value)));
        //         dispatch(saveUserToken(token));
        //         navigation.navigate('BottomTab');
        //         ToastAndroid.show('Registered successfully',
        //             ToastAndroid.SHORT)
        //     } else {
        //         ToastAndroid.show(response.data.msg,
        //             ToastAndroid.SHORT)
        //     }
        // }).catch(err => {
        //     let error = err
        //     console.log('error===', error)
        // })
    }

    const resendOtp = async _ => {
        // console.log(Email);
        //   ResendOtp(Email).then(async (res) => {
        //       let response = res;
        //       console.log('resendOtp', response.data)
        //       ToastAndroid.show(response.data.message, 
        //       ToastAndroid.SHORT)
        //   }).catch(err => {
        //       let error = err
        //       console.log(error)
        //   })

    }

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            {/* <CustomHeader
                IconLeft={IconPathVariable.Back}
                headerTitle="Verify"
                onSubmitPress={() => navigation.goBack()}
            /> */}

            <Image style={styles.logo} source={ImagePathVariable.AppLogo} />

            <View style={styles.mainContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>Verify Your Password</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Please enter 4 digit code that was sent to your registered email
                    </Text>
                </View>
                <View style={{ height: 50, marginTop: 30, alignSelf: 'center' }}>
                    <OtpInputs
                        clearTextOnFocus
                        handleChange={(code) => setOtp(code)}
                        // keyboardType="none"
                        numberOfInputs={6}
                        selectTextOnFocus={false}
                        inputStyles={{ width: 30, marginHorizontal: 4, fontSize: 18, color: Colors.black, textAlign: 'center', borderBottomColor: Colors.AppColor, borderBottomWidth: 2 }}
                    />
                </View>
                <View style={styles.textContainer}>
                    <TouchableOpacity onPress={() => resendOtp()}>
                        <Text style={styles.code}>Resend code</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.textContainer}>
                    <TouchableOpacity onPress={() => verifyOtp()}
                        style={styles.button}>
                        <Text style={styles.confirm}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}