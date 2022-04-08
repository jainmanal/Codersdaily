import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity ,ScrollView} from 'react-native';
import { CustomHeader } from '../../Component/CustomHeader';
import { Colors } from '../../Helper/Colors.js';
import IconPathVariable from '../../Helper/IconPathVariable/IconPathVariable';
import ImagePathVariable from '../../Helper/ImagePathVariable/ImagePathVariable';
import { styles } from './tyles';
import HTMLView   from 'react-native-htmlview'

export const LessonDetails = ({route,navigation}) => {

    // console.log('LessonDetails',route.params.lesson_detail)
    const lesson_detail = route.params.lesson_detail

    const [LessonName,setLessonName] = useState(lesson_detail.lesson_name)
    const [Content,setContent] = useState(lesson_detail.content)
    const [ShortDesc,setShortDesc] = useState(lesson_detail.short_desc)

    return (
        <View style={styles.bottom}>
            <CustomHeader/>
            <ScrollView>
                <View style={styles.mainContainer}>
                    <Text style={styles.heading}>{LessonName}</Text>
                    <View style={styles.subContainer}>
                        <Text style={styles.text}>{ShortDesc}</Text>
                        <Text style={styles.text}>{Content}</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
