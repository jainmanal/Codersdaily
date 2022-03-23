import React from "react";
import { View, Text } from 'react-native';
import { CustomHeader } from '../../../Component/CustomHeader';
import { styles } from "./styles";

export const ProfileScreen = () => {
    return (
        <View>
            <CustomHeader />
            <View style={styles.maincontainer}>
                <Text>hjbj</Text>
            </View>
        </View>
    )
}