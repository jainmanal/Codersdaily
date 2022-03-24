import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import IconPathVariable from '../../../Helper/IconPathVariable/IconPathVariable';
import { CustomHeader } from '../../../Component/CustomHeader';
import { styles } from './styles';

const PythonTopicDescription = () => {

    const DATA = [
        {
            id: 0,
            icon: IconPathVariable.Dot,
            description: "Python is an interpreted, object-oriented, high-level programming language with dynamic semantics."
        },
        {
            id: 1,
            icon: IconPathVariable.Dot,
            description: "Python is an interpreted, object-oriented, high-level programming language with dynamic semantics."
        },
        {
            id: 2,
            icon: IconPathVariable.Dot,
            description: "Python is an interpreted, object-oriented, high-level programming language with dynamic semantics."
        },
        {
            id: 3,
            icon: IconPathVariable.Dot,
            description: "Python is an interpreted, object-oriented, high-level programming language with dynamic semantics."
        },
        {
            id: 4,
            icon: IconPathVariable.Dot,
            description: "Python is an interpreted, object-oriented, high-level programming language with dynamic semantics."
        },
    ]

    const DATA1 = [
        { id: 0, icon: IconPathVariable.Dot, name: 'Industrial Light and Magic.' },
        { id: 1, icon: IconPathVariable.Dot, name: 'Google.' },
        { id: 2, icon: IconPathVariable.Dot, name: 'Facebook' },
        { id: 3, icon: IconPathVariable.Dot, name: 'Instagram' },
        { id: 4, icon: IconPathVariable.Dot, name: 'Spotify' },
    ]

    const renderItem = ({ item }) => (
        <View style={styles.list}>
            <Image source={item.icon} style={styles.dot} />
            <Text style={styles.description}>{item.description}</Text>
        </View>
    )

    const Item = ({ item }) => (
        <View style={styles.list}>
            <Image source={item.icon} style={styles.dot} />
            <Text style={styles.description}>{item.name}</Text>
        </View>
    )


    return (
        <View style={styles.main}>
            <CustomHeader />
            <ScrollView>
                <View style={styles.mainContainer}>
                    <Text style={styles.heading}>Python Tutorial</Text>
                    <View style={styles.subContainer}>
                        <Text style={styles.q}>What is Python</Text>
                        <FlatList
                            data={DATA}
                            renderItem={renderItem}
                        />
                    </View>
                    <View style={styles.subContainer}>
                        <Text style={styles.q}>Companies Who are using Python</Text>
                        <FlatList
                            data={DATA1}
                            renderItem={Item}
                        />
                    </View>
                </View>
            </ScrollView>
            <View style={styles.bottom}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.button}>
                        <Image source={IconPathVariable.Left} style={styles.icon} />
                        <Text style={styles.buttonText}>Previous</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Next</Text>
                        <Image source={IconPathVariable.Arrow} style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default PythonTopicDescription;