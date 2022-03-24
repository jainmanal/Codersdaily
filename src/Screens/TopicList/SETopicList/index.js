import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { CustomHeader } from '../../../Component/CustomHeader';
import { styles } from './styles';

export const SETopicList = () => {

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
            <CustomHeader />
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