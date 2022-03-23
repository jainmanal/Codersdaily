import React from "react";
import { View, Text, FlatList } from 'react-native';
import { styles } from "./styles";
import { CustomHeader } from "../../Component/CustomHeader";

export const CourseDetail = () => {

    const DATA = [
        {
            id: 0,
            heading: 'Python Basic',
            subHeading: 'Python Overview',
            subHeading1: 'Python Installation',
        },
        {
            id: 0,
            heading: 'Python',
            subHeading: 'Python Overview',
        },
    ]

    const renderItem = ({item}) =>(
<View>
    <Text>{item.heading}</Text>
    <Text>{item.subHeading}</Text>
    <Text>{item.subHeading1} </Text>
</View>
    )

    return (
        <View>
            <CustomHeader />
            <View style={styles.maincontainer}>
                <Text style={styles.heading}>Python Tutorial</Text>
            
            <FlatList
            data={DATA}
            renderItem={renderItem}
            />
            </View>
        </View>
    )
}