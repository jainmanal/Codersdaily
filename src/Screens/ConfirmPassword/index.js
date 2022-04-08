import { NavigationContainer } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { CustomHeader } from "../../Component/CustomHeader";
import { CustomTextInput } from "../../Component/CustomTextInput";
import IconPathVariable from "../../Helper/IconPathVariable/IconPathVariable";
import { styles } from "./styles";

export const ConfirmPassword = ({ navigation }) => {

    const inputEmailId = useRef(null);
    const [oldPass, setOldPass] = useState('')
    const [newPass, setNewPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')


    return (
        <ScrollView>
            <View style={styles.mainContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={IconPathVariable.Back} style={styles.icon} />
                </TouchableOpacity>
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
                                onChangeText: (text) => setConfirmPass(text),
                                value: confirmPass,
                                returnKeyType: "done",
                            }}
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>RESET PASSWORD</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}