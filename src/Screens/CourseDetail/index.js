import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { Colors } from '../../Helper/Colors.js';
import IconPathVariable from '../../Helper/IconPathVariable/IconPathVariable';
import ImagePathVariable from '../../Helper/ImagePathVariable/ImagePathVariable';
import { styles } from './styles';
import { getApi } from '../../Helper/API_Call/API_Call';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Helper/DeviceDimentions/index'
import StarRating from 'react-native-star-rating';

export const CourseDetail = ({ route, navigation }) => {

    console.log('CourseDetail id ', route.params.course_detail)
    const course_detail = route.params.course_detail
    const [DATA, setDATA] = useState([]);
    const [loading, setLoading] = useState(false);
    const [author_name, setAuthorName] = useState(course_detail.author);
    const [tutorial_name, setTutorialName] = useState(course_detail.slug)
    const [starCount, setStarCount] = useState(course_detail.rating)
    const [rateModal, setRateModal] = useState(false)
    const [rateStar, setRateStar] = useState('0')
    const [courseId, setCourseId] = useState(course_detail.id)
    useEffect(() => {
        getCourseDetail()
    }, [])

    const getCourseDetail = async _ => {
        let url = 'https://codersdaily.in/api/lessons/' + courseId
        getApi(url).then(async res => {
            let response = res;
            console.log('getCourseDetail', response.data.results)
            setLoading(true)
            setDATA(response.data.results)
        }).catch(e => {
            let error = e;
            console.log(error)
        })
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => {
            navigation.navigate('LessonDetails', { lesson_detail: item })
        }} style={{ flexDirection: 'row', width: SCREEN_WIDTH * 95 / 100, paddingVertical: SCREEN_WIDTH * 1 / 100 }}>
            <View style={{ width: '10%', alignSelf: 'center', alignItems: 'center' }}>
                <Image source={IconPathVariable.Book} style={{ height: 20, width: 20, tintColor: Colors.AppColor }} />
            </View>
            <Text style={styles.text}>{item.lesson_name}</Text>
            <View style={styles.iconContainer}>
                <Image source={IconPathVariable.Lock} style={{ height: 20, width: 20, tintColor: Colors.AppColor }} />
            </View>
        </TouchableOpacity>
    )

    return (
        <View style={{ padding: 15 }}>
            <View style={styles.container}>
                <TouchableOpacity style={{ width: '10%' }} onPress={() => navigation.goBack()}>
                    <Image source={IconPathVariable.Back} style={styles.menu} />
                </TouchableOpacity>
                <View style={{ width: '80%' }}>
                    <Image source={ImagePathVariable.AppLogo} style={styles.logo} />
                </View>
                <TouchableOpacity style={{ width: '10%' }} onPress={() => { setRateModal(true) }}>
                    <Image source={IconPathVariable.Fullstar} style={{ width: 40, height: 40 }} />
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={rateModal}
                    onRequestClose={() => {
                        setRateModal(false);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Rate the course</Text>
                            <StarRating
                                containerStyle={{ marginTop: '5%' }}
                                disabled={false}
                                maxStars={5}
                                emptyStar={IconPathVariable.Star}
                                fullStar={IconPathVariable.Fullstar}
                                halfStar={IconPathVariable.Halfstar}
                                rating={rateStar}
                                starSize={45}
                                selectedStar={(rating) => setRateStar(rating)}
                            />
                            <TouchableOpacity style={[styles.button, styles.buttonClose]}
                                onPress={() => setRateModal(false)}
                            >
                                <Text style={styles.textStyle}>Done</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <View style={styles.maincontainer}>
                    <Text style={styles.heading}>{tutorial_name}</Text>
                    <Text style={styles.txt}>Created By <Text style={styles.name}>{author_name}</Text></Text>
                    <View style={[styles.subContainer, { marginTop: 10 }]}>
                        {/* <Image source={IconPathVariable.Star} style={[styles.icon, { tintColor: 'grey', }]} /> */}
                        <StarRating
                            disabled={false}
                            maxStars={5}
                            emptyStar={IconPathVariable.Star}
                            fullStar={IconPathVariable.Fullstar}
                            halfStar={IconPathVariable.Halfstar}
                            rating={starCount}
                            starSize={20}
                        />
                        <Text style={{ marginLeft: 8 }}>({starCount})</Text>
                    </View>
                    <View style={{ marginTop: 25 }}>
                        {
                            loading == false ?
                                <View style={{ justifyContent: 'center', marginTop: 180 }}>
                                    <Spinner visible animation="fade" color={Colors.AppColor} />
                                </View>
                                :
                                <FlatList
                                    scrollEnabled={false}
                                    style={{ alignSelf: 'center', }}
                                    data={DATA}
                                    renderItem={renderItem}
                                    keyExtractor={item => item.id.toString()}
                                />
                        }
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
