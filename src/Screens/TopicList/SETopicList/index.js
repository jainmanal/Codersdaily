import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Colors } from '../../../Helper/Colors.js';
import IconPathVariable from '../../../Helper/IconPathVariable/IconPathVariable';
import ImagePathVariable from '../../../Helper/ImagePathVariable/ImagePathVariable';
import { styles } from './styles';

export const SETopicList = ({ navigation }) => {

    const DATA = [
        { id: 0, topic: 'Introduction to Python' },
        { id: 1, topic: 'Python Basic' },
        { id: 2, topic: 'Python Loops' },
        { id: 3, topic: 'Data Structures' },
    ]

    const renderItem = ({ item }) => (
        <TouchableOpacity style={[styles.subContainer, { justifyContent: 'space-between', marginVertical: 10 }]}>
            <View style={[styles.subContainer, { justifyContent: 'space-between' }]}>
                <Image source={IconPathVariable.Book} style={styles.icon} />
                <Text style={styles.text}>{item.topic}</Text>
            </View>
            <View style={styles.iconContainer}>
                <Image source={IconPathVariable.Lock} style={{ height: 20, width: 20, tintColor: Colors.AppColor }} />
            </View>
        </TouchableOpacity>
    )

    return (
        <View style={{ padding: 15 }}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={IconPathVariable.Back} style={styles.menu} />
                </TouchableOpacity>
                <Image source={ImagePathVariable.AppLogo} style={styles.logo} />
            </View>
            <View style={styles.maincontainer}>
                <Text style={styles.heading}>Selenium Automation Testing Tutorial</Text>
                <Text style={styles.txt}>Created By <Text style={styles.name}>Monika Ojha</Text></Text>
                <View style={[styles.subContainer, { marginTop: 10 }]}>
                    <Image source={IconPathVariable.Star} style={[styles.icon, { tintColor: 'grey', }]} />
                    <Text style={{ marginLeft: 8 }}>4.8</Text>
                </View>
                <View style={{ marginTop: 25 }}>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                    />
                </View>
            </View>
        </View>
    )
}