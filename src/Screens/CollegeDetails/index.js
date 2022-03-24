import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { CustomHeader } from '../../Component/CustomHeader';
import { Colors } from '../../Helper/Colors.js';
import IconPathVariable from '../../Helper/IconPathVariable/IconPathVariable';
import ImagePathVariable from '../../Helper/ImagePathVariable/ImagePathVariable';
import { styles } from './styles';

export const CollegeDetails = () => {

    const [show, setShow] = useState(false)

    const DATA = [
        { id: 0, heading: 'Introduction ' },
        { id: 1, heading: 'General Information ' },
        { id: 2, heading: 'Courses Offered ' },
        { id: 3, heading: 'Branches offered inBTECH' },
        { id: 4, heading: 'Facilities in Campus ' },
        { id: 5, heading: 'Jee Advance cut-off in 2020 IIT Bombay ' },
        { id: 6, heading: 'IIT Bombay top Alumini' },
    ]

    const renderItem = ({ item }) => (
        <View style={styles.listContainer}>
            <Text style={styles.headings}>{item.heading}</Text>
            {
                show == false ?
                    <TouchableOpacity onPress={() => setShow(true)}>
                        <Image source={IconPathVariable.Down} style={styles.icon1} />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={()=> setShow(false)}>
                        <Image source={IconPathVariable.Up} style={styles.icon1} />
                    </TouchableOpacity>
            }

        </View>
    )

    return (
        <View>
            <CustomHeader />
            <View style={styles.mainContainer}>
                <View style={{ marginTop: 20 }}>
                    <View style={styles.topContainer}>
                        <View style={styles.logoContainer}>
                            <Image source={ImagePathVariable.CollegeLogo1} style={styles.logo} />
                        </View>
                        <View style={{ width: '50%', marginTop: 6 }}>
                            <Text style={styles.name}>Indian Institute of Technology Bombay</Text>
                            <View style={styles.container}>
                                <Image source={IconPathVariable.Location} style={styles.icon} />
                                <View>
                                    <Text style={styles.location}>Mumbai, webmini.State.None </Text>
                                    <TouchableOpacity style={[styles.topContainer, { alignItems: 'center' }]}>
                                        <Image source={IconPathVariable.Download} style={[styles.icon, { tintColor: Colors.AppColor }]} />
                                        <Text style={styles.subText}>Download Brochure</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.subContainer}>
                    <Text style={styles.heading}>Table of Content</Text>
                    <View>
                        <FlatList
                            // horizontal={true}
                            scrollEnabled
                            data={DATA}
                            renderItem={renderItem}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}