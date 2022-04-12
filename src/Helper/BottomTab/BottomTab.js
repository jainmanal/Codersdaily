import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, BackHandler, Alert } from 'react-native';
import { HomeScreen } from '../../Screens/HomeScreen/index.js';
import { CourseScreen } from '../../Screens/BottomTabScreens/CourseScreen/index.js';
import { CollegesScreen } from '../../Screens/BottomTabScreens/CollegesScreen/index.js';
import { ProfileScreen } from '../../Screens/BottomTabScreens/ProfileScreen/index.js';
import { Colors } from '../Colors.js';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../DeviceDimentions/index';
import IconsPathVariable from '../IconPathVariable/IconPathVariable';

const BottomTab = ({ route, navigation }) => {

    // useEffect(() => {
    //     const backAction = () => {
    //         Alert.alert("Hold on!", "Are you sure you want to go back?", [
    //             {
    //                 text: "Cancel",
    //                 onPress: () => null,
    //                 style: "cancel"
    //             },
    //             { text: "YES", onPress: () => BackHandler.exitApp() }
    //         ]);
    //         return true;
    //     };

    //     const backHandler = BackHandler.addEventListener(
    //         "hardwareBackPress",
    //         backAction
    //     );

    //     return () => backHandler.remove();
    // }, []);

    const [homeTabdata, setHomeTabData] = useState(true);
    const [courseTabData, setCourseTabData] = useState(false);
    const [collegeTabData, setCollegeTabData] = useState(false);
    const [profileTabData, setProfileTabData] = useState(false);

    const HomeTabData = async _ => {
        setHomeTabData(true);
        setCourseTabData(false);
        setCollegeTabData(false);
        setProfileTabData(false);
    }

    const CourseTab = async _ => {
        setHomeTabData(false);
        setCourseTabData(true);
        setCollegeTabData(false);
        setProfileTabData(false);
    }

    const CollegeTab = async _ => {
        setHomeTabData(false);
        setCourseTabData(false);
        setCollegeTabData(true);
        setProfileTabData(false);
    }



    const ProfileTab = async _ => {
        setHomeTabData(false);
        setCourseTabData(false);
        setCollegeTabData(false);
        setProfileTabData(true);
    }

    return (
        <View style={styles.containerMain}>

            <View style={{ flex: 1, width: '100%' }}>

                {
                    homeTabdata ?

                        <HomeScreen
                        ></HomeScreen>
                        :
                        null
                }

                {
                    courseTabData ?
                        <CourseScreen></CourseScreen>
                        :
                        null
                }

                {
                    collegeTabData ?

                        <CollegesScreen></CollegesScreen>
                        :
                        null
                }

                {
                    profileTabData ?

                        <ProfileScreen></ProfileScreen>
                        :
                        null
                }

            </View>
            <View style={styles.bottomView}>
                <View style={{
                    flexDirection: 'row', alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <View style={{
                        flex: 1, alignItems: 'center',
                        justifyContent: 'center',
                    }}>

                        <TouchableOpacity onPress={() => HomeTabData()}>
                            {
                                homeTabdata ?
                                    <View style={styles.Ellipse}>
                                        <Image style={styles.icon} source={IconsPathVariable.Home} />

                                        <Text style={{
                                            fontSize: 12,
                                            color: Colors.AppColor,
                                        }}>Home</Text>
                                    </View>
                                    :
                                    <View style={{
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Image style={styles.icon1} source={IconsPathVariable.Home} />

                                        <Text style={{
                                            fontSize: 12,
                                            color: Colors.TextGrey,
                                        }}>Home</Text>
                                    </View>
                            }
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flex: 1, alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <TouchableOpacity onPress={() => CourseTab()}>
                            {
                                courseTabData ?

                                    <View style={styles.Ellipse}>
                                        <Image style={styles.icon} source={IconsPathVariable.Course} />
                                        <Text style={{
                                            fontSize: 12,
                                            color: Colors.AppColor,
                                        }}>Course</Text>
                                    </View>
                                    :
                                    <View style={{
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Image style={[styles.icon1]} source={IconsPathVariable.Course} />
                                        <Text style={{
                                            fontSize: 12,
                                            color: Colors.TextGrey,
                                        }}>Course</Text>
                                    </View>
                            }
                        </TouchableOpacity>

                    </View>

                    <View style={{
                        flex: 1, alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <TouchableOpacity onPress={() => CollegeTab()}>
                            {
                                collegeTabData ?

                                    <View style={styles.Ellipse}>
                                        <Image style={styles.icon} source={IconsPathVariable.College} />
                                        <Text style={{
                                            fontSize: 10,
                                            color: Colors.AppColor,
                                        }}>Colleges</Text>

                                    </View>

                                    :
                                    <View style={{
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Image style={[styles.icon1]} source={IconsPathVariable.College} />
                                        <Text style={{
                                            fontSize: 12,
                                            color: Colors.TextGrey,
                                        }}>Colleges</Text>

                                    </View>
                            }
                        </TouchableOpacity>

                    </View>

                    <View style={{
                        flex: 1, alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <TouchableOpacity onPress={() => ProfileTab()}>
                            {
                                profileTabData ?

                                    <View style={styles.Ellipse}>
                                        <Image style={styles.icon} source={IconsPathVariable.User} />
                                        <Text style={{
                                            fontSize: 12,
                                            color: Colors.AppColor,
                                        }}>Profile</Text>
                                    </View>
                                    :
                                    <View style={{
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Image style={styles.icon1} source={IconsPathVariable.User} />
                                        <Text style={{
                                            fontSize: 12,
                                            color: Colors.TextGrey,
                                        }}>Profile</Text>
                                    </View>
                            }
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default BottomTab;

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomView: {
        width: '100%',
        height: 70,
        backgroundColor: Colors.White,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    icon1: {
        width: SCREEN_WIDTH * 0.046,
        height: SCREEN_HEIGHT * 0.026,
        alignItems: 'center',
        justifyContent: 'center',
        tintColor: Colors.TextGrey

    },
    icon: {
        width: SCREEN_WIDTH * 0.046,
        height: SCREEN_HEIGHT * 0.026,
        alignItems: 'center',
        justifyContent: 'center',
        tintColor: Colors.AppColor
    },
    Ellipse: {
        alignItems: 'center'
    }

});
