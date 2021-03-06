import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { CustomHeader } from '../../../Component/CustomHeader';
import ImagePathVariable from "../../../Helper/ImagePathVariable/ImagePathVariable";
import IconPathVariable from "../../../Helper/IconPathVariable/IconPathVariable";
import { styles } from "./styles";
import { useNavigation } from '@react-navigation/native';
import BottomTab from "../../../Helper/BottomTab/BottomTab";
import { getCoursesApi } from "../../../Helper/API_Call/API_Call";


export const CourseScreen = () => {

    const navigation = useNavigation();
    const [DATA, setDATA] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleNavigation = (item) => {
        // console.log('item', item)
        navigation.navigate('CourseDetail', { course_detail: item })
    }

    useEffect(() => {
        handleGetCourseList()
    }, [])

    const handleGetCourseList = async _ => {
        getCoursesApi()
            .then(async res => {
                let response = res;
                console.log('List', response.data)
                setLoading(true);
                setDATA(response.data.results)
            }).catch(e => {
                let error = e;
                console.log(error)
            })
    }

    const renderCourseList = ({ item }) => (
        <View style={styles.subContainer}>
            <Image source={{ uri: item.logo_img }} style={styles.icon} />
            <Text style={styles.title}>{item.name}</Text>
            <View style={styles.descContainer}>
                <Text style={styles.description}>{item.short_desc}</Text>
            </View>
            <TouchableOpacity onPress={() => handleNavigation(item)}
                style={styles.botomContainer}>
                <Text style={styles.text}>Learn More</Text>
            </TouchableOpacity>
        </View>
    )

    return (
        <View>
            <CustomHeader />
            <View style={styles.maincontainer}>
                {
                    loading == false ?
                        <View style={{ justifyContent: 'center', marginTop: 180 }}>
                            <Image source={require('../../../assets/animation/loader.gif')}
                                style={{
                                    height: 100,
                                    width: 100,
                                    alignSelf: 'center'
                                }} />
                        </View>
                        :
                        <FlatList
                            style={{ marginBottom: 60 }}
                            data={DATA}
                            renderItem={renderCourseList}
                        />
                }
            </View>
            {/* <BottomTab/> */}
        </View>
    )
}