import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { styles } from "./styles";
import IconPathVariable from "../../../Helper/IconPathVariable/IconPathVariable";
import { CustomHeader } from "../../../Component/CustomHeader";

export const JavaTopicList = ({navigation}) => {

    const [show, setShow] = useState(false)

    const DATA = [
        {
            id: 0,
            heading: 'Java Basics',
            subHeading: 'Introduction',
        },
    ]

    const renderItem = ({ item }) => (
        <View style={styles.Container}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{item.heading}</Text>
                {
                    show == false ?
                        <TouchableOpacity onPress={() => setShow(true)}>
                            <Image source={IconPathVariable.Down} style={styles.icon} />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => setShow(false)}>
                            <Image source={IconPathVariable.Up} style={styles.icon} />
                        </TouchableOpacity>
                }
            </View>
            {
                show == true ?
                    <View style={styles.hiddenSheet}>
                        <TouchableOpacity onPress={()=> navigation.navigate("JavaDescription")}>
                            <Text style={styles.tabText}>{item.subHeading}</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    null
            }
        </View>
    )

    return (
        <View>
            <CustomHeader />
            <View style={styles.maincontainer}>
                <Text style={styles.heading}>Java Tutorial</Text>

                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                />
            </View>
        </View>
    )
}