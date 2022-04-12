import React, { useEffect, useState } from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, ToastAndroid } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import ImagePathVariable from "../../../Helper/ImagePathVariable/ImagePathVariable";
import IconPathVariable from "../../../Helper/IconPathVariable/IconPathVariable";
import { styles } from "./styles";
import { useSelector } from "react-redux";
import { Colors } from "../../../Helper/Colors.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UpdateProfileApi } from "../../../Helper/API_Call/API_Call";

export const ProfileScreen = () => {

    const usertoken = useSelector(state => state?.coders?.userToken)

    const navigation = useNavigation();
    const [username, setUserName] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [params, setParams] = useState('');

    useEffect(() => {
        getUserData()
    }, [])

    const getUserData = async () => {
        console.log('hey')
        UpdateProfileApi(usertoken).then(async res => {
            let response = res;
            console.log('EditResponse', response.data)
            // setParams(response.data)
            setUserName(response.data.data.username);
            setFirstName(response.data.data.first_name)
            setLastName(response.data.data.last_name)  
            setEmail(response.data.data.email)

        }).catch(err => {
            let error = err;
            console.log(error)
        })
    }

    const handleLogout = async () => {
        console.log('logout')
        const token = await AsyncStorage.getItem('token')
        console.log('TOKEN===', token)
        await AsyncStorage.removeItem('token');
        navigation.navigate('Splash')
        ToastAndroid.show('Logged out successfully',
            ToastAndroid.SHORT)
    }

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={ImagePathVariable.HomeImage} resizeMode={'cover'}
                borderBottomLeftRadius={80} borderBottomRightRadius={80}
                style={styles.Container} >
                <View style={styles.textContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={IconPathVariable.Back} style={styles.icon1} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
                        <Image source={IconPathVariable.Edit} style={styles.icon} />
                    </TouchableOpacity>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={IconPathVariable.Profile} style={styles.image} />
                </View>
            </ImageBackground>
            <View style={styles.maincontainer}>
                <Text style={styles.name}>{username}</Text>
                <View style={styles.subContainer}>
                    <View style={styles.container}>
                        <MaterialCommunityIcons name={'account'} color={Colors.AppColor} size={24} />
                        <Text style={styles.text}>{firstname} {lastname}</Text>
                    </View>
                    <View style={styles.container}>
                        <MaterialCommunityIcons name={'email'} color={Colors.AppColor} size={24} />
                        <Text style={styles.text}>{email}</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={() => handleLogout()}
                style={styles.button}>
                <Text style={styles.logout}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    )
}