import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, FlatList, TouchableOpacity, Image, ScrollView, ToastAndroid } from 'react-native';
import { LogBox } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { CustomHeader } from '../../Component/CustomHeader';
import ImagePathVariable from '../../Helper/ImagePathVariable/ImagePathVariable';
import IconPathVariable from '../../Helper/IconPathVariable/IconPathVariable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput } from 'react-native-gesture-handler';
import { SCREEN_WIDTH } from '../../Helper/DeviceDimentions';
import { getCoursesApi } from '../../Helper/API_Call/API_Call';

export const HomeScreen = () => {
    const navigation = useNavigation();

    const [DATA, setDATA] = useState([]);

    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
        LogBox.ignoreLogs(["[react-native-gesture-handler]"]);
    }, [])

    useEffect(() => {
        getCourseList()
    }, [])

    const getCourseList = async _ => {
        getCoursesApi()
            .then(async res => {
                let response = res;
                // console.log('List', response.data)
                setDATA(response.data.results)
            }).catch(e => {
                let error = e;
                console.log(error)
            })
    }

    const handleLogout = async () => {
        console.log('logout')
        // const value = await AsyncStorage.getItem('value')
        const token = await AsyncStorage.getItem('token')
        console.log('TOKEN===', token)
        await AsyncStorage.removeItem('token');
        // await AsyncStorage.removeItem('value');
        navigation.reset({ index: 0, routes: [{ name: 'Login' }] })
        ToastAndroid.show('Logged out',
            ToastAndroid.SHORT)
    }

    const handleNavigation = async (item) => {
        navigation.navigate('CourseDetail')
        // console.log('item==', item)
        // navigation.navigate(item.nav);
        // const value = item.nav;
        // console.log('value======', value)
        // try {
        //     await AsyncStorage.setItem('subName', value)
        // } catch (error) {
        //     console.log(error)
        // }
    }

    const renderCourseList = ({ item }) => (
        <TouchableOpacity onPress={() => handleNavigation(item)}
            style={styles.subContainer}>
            <Image source={{ uri: item.logo_img }} style={styles.icon} />
            <View style={[styles.textContainer, { marginTop: 30 }]}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.lesson}>20 Lessons</Text>
            </View>
            <View >
            </View>
        </TouchableOpacity>
    )

    const renderItem1 = ({ item }) => (
        <View style={styles.subContainer1}>
            <ImageBackground blurRadius={1}
                borderTopRightRadius={10}
                borderTopLeftRadius={10}
                source={item.image} style={styles.image} >
                <Text style={styles.name}>{item.title}</Text>
            </ImageBackground>
            <TouchableOpacity style={styles.textContainer}>
                <Text style={styles.txt}>View All Courses and fees</Text>
            </TouchableOpacity>
        </View>
    )

    return (
        <View style={{ padding: 8, }}>
            {/* <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                colors={['#fcd02d', '#fbb728',]}
                style={styles.header}>
                <View style={[styles.headerContent, { justifyContent: 'space-between' }]}>
                    <View>
                        <Text style={[styles.font, { fontSize: 25 }]}>Hello ,</Text>
                        <Text style={[styles.font, { fontSize: 20 }]}>Pratibha</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Image source={IconPathVariable.Notification} style={styles.bellIcon} />
                    </View>
                </View>
                <View style={[styles.textBox, {}]}>
                    <Image source={IconPathVariable.Search1} style={[styles.bellIcon, { tintColor: '#fcd02d' }]} />
                    <TextInput
                        style={styles.input}
                        placeholder='Search your topic'
                    />
                </View>
            </LinearGradient> */}
            <ImageBackground source={require('../../assets/image/image.jpg')} borderRadius={20} resizeMode='cover'
                style={styles.header}>
                <View style={[styles.headerContent, { justifyContent: 'space-between' }]}>
                    <View>
                        <Text style={[styles.font, { fontSize: 25 }]}>Hello,</Text>
                        <Text style={[styles.font, { fontSize: 20, fontWeight: 'normal' }]}>Pratibha</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity onPress={() => handleLogout()}>
                            <Image source={IconPathVariable.Logout} style={styles.bellIcon} />
                        </TouchableOpacity>
                        {/* <Image source={IconPathVariable.Notification} style={styles.bellIcon} /> */}
                    </View>
                </View>
                <View style={[styles.textBox, {}]}>
                    <Image source={IconPathVariable.Search1} style={[styles.bellIcon, { tintColor: '#fcd02d' }]} />
                    <TextInput
                        style={styles.input}
                        placeholder='Search your topic'
                    />
                </View>
            </ImageBackground>
            <ScrollView>
                <View style={styles.maincontainer}>
                    <View style={styles.container}>
                        <View style={styles.contain}>
                            <Text style={styles.cource}>Explore Courses</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('CourseTab')}>
                                <Text style={styles.text}>See All</Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            scrollEnabled={false}
                            style={{ alignSelf: 'center', }}
                            numColumns={2}
                            data={DATA}
                            renderItem={renderCourseList}
                            keyExtractor={item => item.id.toString()}
                        />
                    </View>
                    {/* <View style={styles.container}>
                        <View style={styles.contain}>
                            <Text style={styles.cource}>Colleges</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('CollegeTab')}>
                                <Text style={styles.text}>See More</Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            horizontal={true}
                            data={DATA1}
                            renderItem={renderItem1}
                        />
                    </View> */}
                </View>
            </ScrollView>
        </View>
    )
}