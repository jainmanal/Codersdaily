import React from 'react';
import { View, Text, ImageBackground, FlatList, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { CustomHeader } from '../../Component/CustomHeader';
import ImagePathVariable from '../../Helper/ImagePathVariable/ImagePathVariable';
import IconPathVariable from '../../Helper/IconPathVariable/IconPathVariable';

export const HomeScreen = () => {
    const navigation = useNavigation();

    const DATA = [
        {id:0, image: ImagePathVariable.SE, title: 'Selenium Automation Testing' , description: 'Selenium is a popular open-source web-based automation tool.', button: 'Learn'},
        {id:1, image: ImagePathVariable.DJ, title: 'Django' , description: 'Django', button: 'Learn'},
        {id:2, image: ImagePathVariable.Pharma, title: 'Pharmacovigilance' , description: 'Pharmacovigilance is an emerging field for life science graduates', button: 'Learn'},
        {id:3, image: ImagePathVariable.Pharma, title: 'Python' , description: 'Python is an interpreted high-level general-purpose programming language.', button: 'Learn'},
        {id:4, image: ImagePathVariable.Java, title: 'Selenium Automation Testing' , description: 'Java is an object-oriented, class-based, concurrent, secured and general-purpose computer-programming language.', button: 'Learn'},
    ]

    const renderItem = ({item}) =>(
        <View style={styles.subContainer}>
            <Image source={item.image} style={styles.icon}/>
            <Text style={styles.title}>{item.title}</Text>
            <View >
                <TouchableOpacity onPress={()=> navigation.navigate('CourseDetail')}
                style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>{item.button}</Text>
                    <Image source={IconPathVariable.Arrow} style={styles.icon1}/>
                </TouchableOpacity>
            </View>
        </View>
    )

    return (
        <View>
            <CustomHeader />
            <View style={styles.maincontainer}>
                <ImageBackground blurRadius={6} source={ImagePathVariable.BGimage}
                    style={styles.bgImage}>
                        <Text style={styles.heading}>Learn Coding</Text>
                        <Text style={styles.description}>Kickstart your career with Codersdaily.</Text>
                </ImageBackground>

                <View style={styles.container}>
                    <View style={styles.contain}>
                    <Text style={styles.cource}>Cources</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('Course')}>
                    <Text style={styles.text}>See More</Text>
                    </TouchableOpacity>
                    </View>
               <FlatList
               horizontal={true}
               data={DATA}
               renderItem={renderItem}
               />
                </View>
            </View>
        </View>
    )
}