import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, FlatList, TouchableOpacity, Image, ScrollView, ToastAndroid, ActivityIndicator, BackHandler, Alert } from 'react-native';
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
import { useSelector } from 'react-redux';
import AnimatedLottieView from 'lottie-react-native';


export const HomeScreen = (props) => {

    // useEffect(() => {
    //         const backAction = () => {
    //             Alert.alert("Hold on!", "Are you sure you want to go back?", [
    //                 {
    //                     text: "Cancel",
    //                     onPress: () => null,
    //                     style: "cancel"
    //                 },
    //                 { text: "YES", onPress: () => BackHandler.exitApp() }
    //             ]);
    //             return true;
    //         };

    //         const backHandler = BackHandler.addEventListener(
    //             "hardwareBackPress",
    //             backAction
    //         );

    //         return () => backHandler.remove();
    //     }, []);

    const user = useSelector(state => state?.coders?.userDetails)
    // console.log('props', props.data)
    const [userName, setUserName] = useState(user.username)
    const [DATA, setDATA] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false)
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

    const handleNavigation = async (item) => {
        // console.log('item==', item)
        navigation.navigate('CourseDetail', { course_detail: item })
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
                        <TouchableOpacity>
                            <Image source={IconPathVariable.Notification} style={styles.bellIcon} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.textBox, {}]}>
                    <Image source={require('../../assets/animation/search.gif')}
                        style={{ height: 48, width: 48 }} />
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
                                    <Image source={require('../../assets/animation/loader.gif')} style={{ height: 120, width: 120, alignSelf: 'center' }} />
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
                </View>
            </ScrollView>
        </View>
    )
}
