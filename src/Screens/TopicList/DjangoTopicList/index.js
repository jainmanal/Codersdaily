import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import IconPathVariable from '../../../Helper/IconPathVariable/IconPathVariable';
import ImagePathVariable from '../../../Helper/ImagePathVariable/ImagePathVariable';
import { CustomHeader } from '../../../Component/CustomHeader';

export const DjangoTopicList = ({ navigation }) => {
    return (
        <View>
            <View>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={IconPathVariable.Back} style={styles.menu} />
                    </TouchableOpacity>
                    <Image source={ImagePathVariable.AppLogo} style={styles.logo} />
                </View>
                <View style={styles.maincontainer}>
                    <Text style={styles.heading}>Django Tutorial</Text>
                </View>
            </View>
        </View>
    )
}