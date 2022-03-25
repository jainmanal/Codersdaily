import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import IconPathVariable from '../../../Helper/IconPathVariable/IconPathVariable';
import ImagePathVariable from '../../../Helper/ImagePathVariable/ImagePathVariable';
import { styles } from './styles';

export const SETopicList = ({navigation}) => {

    const DATA = [
        {
            id: 0,
            heading: 'Python Basic',
            subHeading: 'Python Overview',
            subHeading1: 'Python Installation',
        },
        {
            id: 1,
            heading: 'Python',
            subHeading: 'Python Overview',
        },
    ]

    const renderItem = ({ item }) => (
        <View>
            <Text>{item.heading}</Text>
            <Text>{item.subHeading}</Text>
            <Text>{item.subHeading1}</Text>
        </View>
    )

    return (
        <View>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image source={IconPathVariable.Menu} style={styles.menu} />
                </TouchableOpacity>
                <Image source={ImagePathVariable.AppLogo} style={styles.logo} />
            </View>
            <View style={styles.maincontainer}>
                <Text style={styles.heading}>Selenium Automation Testing Tutorial</Text>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                />
            </View>
        </View>
    )
}