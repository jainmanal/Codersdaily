import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { Colors } from '../../Helper/Colors.js';
import IconPathVariable from '../../Helper/IconPathVariable/IconPathVariable';
import ImagePathVariable from '../../Helper/ImagePathVariable/ImagePathVariable';
import { styles } from './styles';
import { getApi, ratingApi } from '../../Helper/API_Call/API_Call';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Helper/DeviceDimentions/index'
import StarRating from 'react-native-star-rating';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

export const CourseDetail = ({ route, navigation }) => {

    const user = useSelector(state => state?.coders?.userDetails)
    console.log(user)
    // const id = parseInt(user.id)
    const [User, setUser] = useState(parseInt(user.id))
    // console.log('CourseDetail id ', route.params.course_detail)
    const course_detail = route.params.course_detail
    const [DATA, setDATA] = useState([]);
    const [loading, setLoading] = useState(false);
    const [author_name, setAuthorName] = useState(course_detail.author);
    const [tutorial_name, setTutorialName] = useState(course_detail.name)
    const [starCount, setStarCount] = useState(course_detail.rating)
    const [rateModal, setRateModal] = useState(false)
    const [Rating, setRating] = useState('0')
    const [courseId, setCourseId] = useState(parseInt(course_detail.id))

    useEffect(() => {
        getCourseDetail()
    }, [])

    const getCourseDetail = async _ => {
        let url = 'https://codersdaily.in/api/lessons/' + courseId
        getApi(url).then(async res => {
            let response = res;
            // console.log('getCourseDetail', response.data.results)
            setLoading(true)
            setDATA(response.data.results)
        }).catch(e => {
            let error = e;
            console.log(error)
        })
    }

    const handleRating = async () => {
        setRateModal(false)
        ratingApi(Rating, User, courseId).then(async (res) => {
            let response = res;
            console.log('response===', response.status)
            // if (response.) {

            // }
        })
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => {
            navigation.navigate('LessonDetails', { lesson_detail: item })
        }} style={{
            flexDirection: 'row',
            width: SCREEN_WIDTH * 0.9,
            borderRadius: 10,
            marginVertical: 6,
            padding: 15,
            alignItems: 'center',
            backgroundColor: Colors.White,
            elevation: 10,
            marginHorizontal: 5,
            paddingVertical: 20
        }}>
            <Image source={IconPathVariable.Book} style={{ height: 30, width: 30 }} />
            <Text style={styles.text}>{item.lesson_name}</Text>
        </TouchableOpacity>
    )

    return (
        <LinearGradient colors={['#fddd2f', '#faa726']}
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
            style={styles.linear}>
            <View style={{ padding: 15, alignItems: 'center', paddingVertical: 30 }}>
                <Text style={styles.heading}>{tutorial_name}</Text>
                <Text style={styles.txt}>Created By: <Text style={styles.name}>{author_name}</Text></Text>
                <View style={[styles.subContainer, { marginTop: 10 }]}>
                    <StarRating
                        disabled={false}
                        maxStars={5}
                        emptyStar={IconPathVariable.Star1}
                        fullStar={IconPathVariable.Fullstar1}
                        halfStar={IconPathVariable.Halfstar}
                        rating={starCount}
                        starSize={20}
                    />
                    <Text style={{ marginLeft: 8, color: '#fff' }}>({starCount})</Text>
                </View>
            </View>
            <View style={{ flex: 1, backgroundColor: '#fff', zIndex: 10, height: SCREEN_HEIGHT, borderTopStartRadius: 30, borderTopEndRadius: 30, paddingVertical: 10, }}>

                <ScrollView>
                {
                            loading == false ?
                                <View style={{ justifyContent: 'center', marginTop: 180 }}>
                                    <Spinner visible animation="fade" color={Colors.AppColor} />
                                </View>
                                :
                    <FlatList

                        scrollEnabled={false}
                        style={{ alignSelf: 'center', marginTop: 30, }}
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id.toString()}
                    />
                }
                </ScrollView>

            </View>
        </LinearGradient>

        // <View style={{ padding: 15 }}>
        //     <View style={styles.container}>
        //         <TouchableOpacity style={{ width: '10%' }} onPress={() => navigation.goBack()}>
        //             <Image source={IconPathVariable.Back} style={styles.menu} />
        //         </TouchableOpacity>
        //         <View style={{ width: '80%' }}>
        //             <Image source={ImagePathVariable.AppLogo} style={styles.logo} />
        //         </View>
        //         <TouchableOpacity style={{ width: '10%' }} onPress={() => { setRateModal(true) }}>
        //             <Image source={IconPathVariable.Fullstar} style={{ width: 40, height: 40 }} />
        //         </TouchableOpacity>
        //     </View>
        //     <ScrollView showsVerticalScrollIndicator={false}>
        //         <Modal
        //             animationType="slide"
        //             transparent={true}
        //             visible={rateModal}
        //             onRequestClose={() => {
        //                 setRateModal(false);
        //             }}
        //         >
        //             <View style={styles.centeredView}>
        //                 <View style={styles.modalView}>
        //                     <TouchableOpacity onPress={() => setRateModal(false)}
        //                         style={{ alignSelf: 'flex-end', width: 30, height: 30, alignItems: 'flex-end' }}>
        //                         <Image source={IconPathVariable.Close} style={{
        //                             height: 16,
        //                             width: 16
        //                         }} />
        //                     </TouchableOpacity>
        //                     <Text style={styles.modalText}>Rate the course</Text>
        //                     <StarRating
        //                         containerStyle={{ marginTop: '5%' }}
        //                         disabled={false}
        //                         maxStars={5}
        //                         emptyStar={IconPathVariable.Star}
        //                         fullStar={IconPathVariable.Fullstar}
        //                         halfStar={IconPathVariable.Halfstar}
        //                         rating={Rating}
        //                         starSize={45}
        //                         selectedStar={(rating) => setRating(rating)}
        //                     />
        //                     <TouchableOpacity style={[styles.button, styles.buttonClose]}
        //                         onPress={() => handleRating()}
        //                     >
        //                         <Text style={styles.textStyle}>Done</Text>
        //                     </TouchableOpacity>
        //                 </View>
        //             </View>
        //         </Modal>
        //         <View style={styles.maincontainer}>
        //             <LinearGradient style={styles.linearContainer}
        //             colors={['#fddd2f', '#faa726']}
        //                 start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
        //                 <Text style={styles.heading}>{tutorial_name}</Text>
        //                 <Text style={styles.txt}>Created By: <Text style={styles.name}>{author_name}</Text></Text>
        //                 <View style={[styles.subContainer, { marginTop: 10 }]}>
        //                     <StarRating
        //                         disabled={false}
        //                         maxStars={5}
        //                         emptyStar={IconPathVariable.Star1}
        //                         fullStar={IconPathVariable.Fullstar1}
        //                         halfStar={IconPathVariable.Halfstar}
        //                         rating={starCount}
        //                         starSize={20}
        //                     />
        //                     <Text style={{ marginLeft: 8, color:'#fff' }}>({starCount})</Text>
        //                 </View>
        //             </LinearGradient>

        //             <View style={{ marginTop: 25 }}>
        //                 {
        //                     loading == false ?
        //                         <View style={{ justifyContent: 'center', marginTop: 180 }}>
        //                             <Spinner visible animation="fade" color={Colors.AppColor} />
        //                         </View>
        //                         :
        //                         <FlatList
        //                             scrollEnabled={false}
        //                             style={{ alignSelf: 'center', }}
        //                             data={DATA}
        //                             renderItem={renderItem}
        //                             keyExtractor={item => item.id.toString()}
        //                         />
        //                 }
        //             </View>
        //         </View>
        //     </ScrollView>
        // </View>
    )
}
