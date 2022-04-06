import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, FlatList, TouchableOpacity, Image, ScrollView, ToastAndroid, ActivityIndicator } from 'react-native';
import { LogBox } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import LinearGradient from 'react-native-linear-gradient';
import { CustomHeader } from '../../Component/CustomHeader';
import ImagePathVariable from '../../Helper/ImagePathVariable/ImagePathVariable';
import IconPathVariable from '../../Helper/IconPathVariable/IconPathVariable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput } from 'react-native-gesture-handler';
import { SCREEN_WIDTH } from '../../Helper/DeviceDimentions';
import { getCoursesApi } from '../../Helper/API_Call/API_Call';
import { Colors } from '../../Helper/Colors.js';

export const HomeScreen = ({ route }) => {

    const [userName, setUserName] = useState()
    const [DATA, setDATA] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
        LogBox.ignoreLogs(["[react-native-gesture-handler]"]);
        getCourseList()
    }, [])

    const getCourseList = async _ => {
        getCoursesApi()
            .then(async res => {
                let response = res;
                // console.log('List', response.data)
                setLoading(true)
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
        console.log('item==', item)
        navigation.navigate('CourseDetail', { course_detail: item })
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
                <Text style={styles.title} numberOfLines={1}>{item.name}</Text>
                <Text style={styles.lesson}>{item.lesson_count} Lessons</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={item.rating == 0 ? IconPathVariable.Star : IconPathVariable.Fullstar} style={[styles.rateicon]} />
                    <Text style={{ marginLeft: 8, alignSelf: 'center' }}>({item.rating})</Text>
                </View>
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
            <ImageBackground source={ImagePathVariable.HomeImage} borderRadius={20} resizeMode='cover'
                style={styles.header}>
                <View style={[styles.headerContent, { justifyContent: 'space-between' }]}>
                    <View>
                        <Text style={[styles.font, { fontSize: 25 }]}>Hello,</Text>
                        <Text style={[styles.font, { fontSize: 20, fontWeight: 'normal' }]}>
                            {userName}
                        </Text>
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
                        {
                            loading == false ?
                                <View style={{ justifyContent: 'center', marginTop: 180 }}>
                                    <Spinner visible animation="fade" color={Colors.AppColor} />
                                </View>
                                :
                                <FlatList
                                    scrollEnabled={false}
                                    style={{ alignSelf: 'center', }}
                                    numColumns={2}
                                    data={DATA}
                                    renderItem={renderCourseList}
                                    keyExtractor={item => item.id.toString()}
                                />
                        }

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
