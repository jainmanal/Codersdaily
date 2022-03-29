import React from 'react';
import { View, Text, ImageBackground, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { CustomHeader } from '../../Component/CustomHeader';
import ImagePathVariable from '../../Helper/ImagePathVariable/ImagePathVariable';
import IconPathVariable from '../../Helper/IconPathVariable/IconPathVariable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput } from 'react-native-gesture-handler';
import { SCREEN_WIDTH } from '../../Helper/DeviceDimentions';

export const HomeScreen = () => {
    const navigation = useNavigation();

    const DATA = [
        { id: 0, image: ImagePathVariable.SE, title: 'SE Testing', nav: 'SETopic', description: 'Selenium is a popular open-source web-based automation tool.', button: 'Learn' },
        { id: 1, image: ImagePathVariable.DJ, title: 'Django', nav: 'DjangoTopic', description: 'Django', button: 'Learn' },
        { id: 2, image: ImagePathVariable.Pharma, title: 'Pharmacovigilance', nav: 'PharmaTopic', description: 'Pharmacovigilance is an emerging field for life science graduates', button: 'Learn' },
        { id: 3, image: ImagePathVariable.Python, title: 'Python', nav: 'PythonTopic', description: 'Python is an interpreted high-level general-purpose programming language.', button: 'Learn' },
        { id: 4, image: ImagePathVariable.Java, title: 'Java', nav: 'javaTopic', description: 'Java is an object-oriented, class-based, concurrent, secured and general-purpose computer-programming language.', button: 'Learn' },
    ]

    const DATA1 = [
        { id: 0, image: ImagePathVariable.College1, title: 'Indian Institute of Technology Bombay' },
        { id: 1, image: ImagePathVariable.College2, title: 'Jaypee University of Engineering and Technology - Guna' },
        { id: 2, image: ImagePathVariable.College1, title: 'Indian Institute of Technology Bombay' },
    ]

    const handleNavigation = async (item) => {
        console.log('item==', item)
        navigation.navigate(item.nav);
        const value = item.nav;
        console.log('value======', value)
        try {
            await AsyncStorage.setItem('subName', value)
        } catch (error) {
            console.log(error)
        }
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleNavigation(item)}
            style={styles.subContainer}>
            <Image source={item.image} style={styles.icon} />
            <View style={[styles.textContainer, { marginTop: 30 }]}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.lesson}>20 Lessons</Text>
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
            {/* <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                colors={['#fcd02d', '#fbb728',]}
                style={styles.header}>
                <View style={[styles.headerContent, { justifyContent: 'space-between' }]}>
                    <View>
                        <Text style={[styles.font, { fontSize: 25 }]}>Hello ,</Text>
                        <Text style={[styles.font, { fontSize: 20 }]}>Pratibha</Text>
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
            </LinearGradient> */}
            <ImageBackground source={require('../../Assets/image/image.jpg')} borderRadius={20} resizeMode='cover'
                style={styles.header}>
                <View style={[styles.headerContent, { justifyContent: 'space-between' }]}>
                    <View>
                        <Text style={[styles.font, { fontSize: 25 }]}>Hello ,</Text>
                        <Text style={[styles.font, { fontSize: 20 }]}>Pratibha</Text>
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
                        <FlatList
                            style={{ alignSelf: 'center', }}
                            numColumns={2}
                            data={DATA}
                            renderItem={renderItem}
                        />
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