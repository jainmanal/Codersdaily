import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { CustomHeader } from '../../../Component/CustomHeader';
import ImagePathVariable from "../../../Helper/ImagePathVariable/ImagePathVariable";
import IconPathVariable from "../../../Helper/IconPathVariable/IconPathVariable";
import { styles } from "./styles";
import { useNavigation } from '@react-navigation/native';
import BottomTab from "../../../Helper/BottomTab/BottomTab";


export const CourseScreen = () => {

    const navigation = useNavigation();

    const DATA = [
        { id: 0, image: ImagePathVariable.SE, title: 'Selenium Automation Testing', description: 'Selenium is a popular open-source web-based automation tool.', button: 'Click here to start the course' },
        { id: 1, image: ImagePathVariable.DJ, title: 'Django', description: 'Django', button: 'Click here to start the course' },
        { id: 2, image: ImagePathVariable.Pharma, title: 'Pharmacovigilance', description: 'Pharmacovigilance is an emerging field for life science graduates', button: 'Click here to start the course' },
        { id: 3, image: ImagePathVariable.Python, title: 'Python', description: 'Python is an interpreted high-level general-purpose programming language.', button: 'Click here to start the course' },
        { id: 4, image: ImagePathVariable.Java, title: 'Selenium Automation Testing', description: 'Java is an object-oriented, class-based, concurrent, secured and general-purpose computer-programming language.', button: 'Click here to start the course' },
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

    return (
        <View>
            <CustomHeader />
            <View style={styles.maincontainer}>
                <FlatList
                    style={{ marginBottom: 60 }}
                    data={DATA}
                    renderItem={renderItem}
                />
            </View>
            {/* <BottomTab/> */}
        </View>
    )
}