import React from 'react';
import { View, Text, ImageBackground, FlatList, TouchableOpacity, Image, ImageBackgroundBase, ScrollView } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { CustomHeader } from '../../Component/CustomHeader';
import ImagePathVariable from '../../Helper/ImagePathVariable/ImagePathVariable';
import IconPathVariable from '../../Helper/IconPathVariable/IconPathVariable';

export const HomeScreen = () => {
    const navigation = useNavigation();

    const DATA = [
        { id: 0, image: ImagePathVariable.SE, title: 'Selenium Automation Testing', description: 'Selenium is a popular open-source web-based automation tool.', button: 'Learn' },
        { id: 1, image: ImagePathVariable.DJ, title: 'Django', description: 'Django', button: 'Learn' },
        { id: 2, image: ImagePathVariable.Pharma, title: 'Pharmacovigilance', description: 'Pharmacovigilance is an emerging field for life science graduates', button: 'Learn' },
        { id: 3, image: ImagePathVariable.Python, title: 'Python', description: 'Python is an interpreted high-level general-purpose programming language.', button: 'Learn' },
        { id: 4, image: ImagePathVariable.Java, title: 'Java', description: 'Java is an object-oriented, class-based, concurrent, secured and general-purpose computer-programming language.', button: 'Learn' },
    ]

    const DATA1 = [
        { id: 0, image: ImagePathVariable.College1, title: 'Indian Institute of Technology Bombay' },
        { id: 1, image: ImagePathVariable.College2, title: 'Jaypee University of Engineering and Technology - Guna' },
        { id: 2, image: ImagePathVariable.College1, title: 'Indian Institute of Technology Bombay' },

    ]

    const handleNavigation = (id) => {
        if (id == 0) {
            navigation.navigate('SETopic')
        } else if (id == 1) {
            navigation.navigate("DjangoTopic")
        } else if (id == 2) {
            navigation.navigate("PharmaTopic")
        } else if (id == 3) {
            navigation.navigate("PythonTopic")
        } else if (id == 4) {
            navigation.navigate("javaTopic")
        }
    }

    const renderItem = ({ item }) => (
        <View style={styles.subContainer}>
            <Image source={item.image} style={styles.icon} />
            <Text style={styles.title}>{item.title}</Text>
            <View >
                <TouchableOpacity onPress={() => handleNavigation(item.id)}
                    style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>{item.button}</Text>
                    <Image source={IconPathVariable.Arrow} style={styles.icon1} />
                </TouchableOpacity>
            </View>
        </View>
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
        <View>
            <CustomHeader />
            <ScrollView>
                <View style={styles.maincontainer}>
                    <ImageBackground blurRadius={6} source={ImagePathVariable.BGimage}
                        style={styles.bgImage}>
                            {/* <View style={{backgroundColor:'black', opacity: 0.5}}>
                              <Text style={{color:'yellow', elevation: 10}}>kjhgfh</Text>
                                <Text style={{color:'white', opacity: 9, fontWeight:'bold'}}>kjhgfh</Text>
                                <Text style={{color:'red'}}>kjhgfh</Text>
                                <Text style={{color:'red'}}>kjhgfh</Text>

                            </View> */}
                        <Text style={styles.heading}>Learn Coding</Text>
                        <Text style={styles.description}>Kickstart your career with Codersdaily.</Text>
                    </ImageBackground>

                    <View style={styles.container}>
                        <View style={styles.contain}>
                            <Text style={styles.cource}>Cources</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('CourseTab')}>
                                <Text style={styles.text}>See More</Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            horizontal={true}
                            data={DATA}
                            renderItem={renderItem}
                        />
                    </View>

                    <View style={styles.container}>
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
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}