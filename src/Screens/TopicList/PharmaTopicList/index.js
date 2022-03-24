import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { CustomHeader } from '../../../Component/CustomHeader';
import IconPathVariable from '../../../Helper/IconPathVariable/IconPathVariable';
import { _taskHandle } from 'react-native/Libraries/Interaction/Batchinator';

export const PharmaTopicList = () => {

    const [show1, setShow1] = useState(false);
    const [bgColor, setBgColor] = useState("#fff")

    const DATA = [
        {
            id: 0,
            heading: 'Pharmacovigilance',
            subHeading: 'Corporate Pharma tech jobs in the Pharmaceutical Industry',
            subHeading1: 'Pharmaceutical companies & Pharma tech jobs',
            subHeading2: 'Wondering how to get the Highest-paying pharmaceutical jobs??',
            subHeading3: 'Pharma tech jobs & Pharmacovigilance companies in India',
        },
    ]

    const handleBgColor = () => {
       setBgColor('orange')
    }

    const renderItem = ({ item }) => (
        <View style={styles.Container}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{item.heading}</Text>
                {
                    show1 == false ?
                        <TouchableOpacity onPress={() => setShow1(true)}>
                            <Image source={IconPathVariable.Down} style={styles.icon} />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => setShow1(false)}>
                            <Image source={IconPathVariable.Up} style={styles.icon} />
                        </TouchableOpacity>
                }
            </View>
            {
                show1 == true ?
                    <View style={styles.hiddenSheet}>
                        <TouchableOpacity style={{backgroundColor: bgColor, paddingHorizontal: 6}} onPress={()=> handleBgColor()}>
                            <Text style={styles.tabText}>{item.subHeading}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.tabText}>{item.subHeading1}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.tabText}>{item.subHeading2}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.tabText}>{item.subHeading3}</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    null
            }
        </View>
    )

    return (
        <View>
            <View>
                <CustomHeader />
                <View style={styles.maincontainer}>
                    <Text style={styles.heading}>Pharmacovigilance Tutorial</Text>

                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                    />
                </View>
            </View>
        </View>
    )
}