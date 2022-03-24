import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import IconPathVariable from '../../../Helper/IconPathVariable/IconPathVariable';
import { styles } from './styles';
import { CustomHeader } from '../../../Component/CustomHeader';

const JavaTopicDescription = () => {

    return (
        <View style={styles.bottom}>
            <CustomHeader />
            <ScrollView>
                <View style={styles.mainContainer}>
                    <Text style={styles.heading}>Java Tutorial</Text>
                    <View style={styles.subContainer}>
                        <Text style={styles.text}>Java is a programming language and a platform. Java is a high level, robust, object-oriented and secure programming language.</Text>
                        <Text style={styles.text}>Java was developed by Sun Microsystems (which is now the subsidiary of Oracle) in the year 1995. James Gosling is known as the father of Java. Before Java, its name was Oak. Since Oak was already a registered company, so James Gosling and his team changed the name from Oak to Java.</Text>
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
export default JavaTopicDescription;