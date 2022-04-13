import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, ScrollView, useWindowDimensions } from 'react-native';
import { CustomHeader } from '../../Component/CustomHeader';
import { Colors } from '../../Helper/Colors.js';
import IconPathVariable from '../../Helper/IconPathVariable/IconPathVariable';
import ImagePathVariable from '../../Helper/ImagePathVariable/ImagePathVariable';
import { styles } from './tyles';
import { SCREEN_HEIGHT } from '../../Helper/DeviceDimentions';
import HTMLView from 'react-native-htmlview'
import RenderHtml from 'react-native-render-html';
import LinearGradient from 'react-native-linear-gradient';



export const LessonDetails = ({ route, navigation }) => {
    const { width } = useWindowDimensions();

    const [loading, setLoading] = useState(false);
    // console.log('LessonDetails',route.params.lesson_detail)
    const lesson_detail = route.params.lesson_detail

    const [LessonName, setLessonName] = useState(lesson_detail.lesson_name)
    const [Content, setContent] = useState(lesson_detail.content)
    const [ShortDesc, setShortDesc] = useState(lesson_detail.short_desc)

    const source = {
        html: lesson_detail.content
    };

    return (
        <LinearGradient colors={['#fddd2f', '#faa726']}
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
            style={styles.linear}>
            <View style={{ padding: 15, alignItems: 'center', paddingVertical: 30 }}>
                <Text style={styles.heading}>{LessonName}</Text>

            </View>

            <View style={{ flex: 1, backgroundColor: '#fff', zIndex: 10, height: SCREEN_HEIGHT, borderTopStartRadius: 30, borderTopEndRadius: 30, paddingVertical: 10, paddingHorizontal: 10 }}>
                <ScrollView>
                    {/* {
                        loading == false ?
                            <View style={{ justifyContent: 'center', marginTop: 180 }}>
                                <Image source={require('../../assets/animation/loader.gif')}
                                    style={{
                                        height: 120,
                                        width: 120,
                                        alignSelf: 'center'
                                    }} />
                            </View>
                            :  */}
                            <View>
                                
                                <Text style={styles.text}>{ShortDesc}</Text>
                                <RenderHtml source={source}
                                    contentWidth={width}
                                />
                            </View>
                    {/* } */}
                </ScrollView>
            </View>
        </LinearGradient>
    )
}
