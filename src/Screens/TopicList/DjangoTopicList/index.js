import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { CustomHeader } from '../../../Component/CustomHeader';

export const DjangoTopicList = () => {
    return (
        <View>
            <View>
                <CustomHeader />
                <View style={styles.maincontainer}>
                    <Text style={styles.heading}>Django Tutorial</Text>
                </View>
            </View>
        </View>
    )
}