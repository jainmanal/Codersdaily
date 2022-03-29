import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from  '../Helper/Colors.js';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../Helper/DeviceDimentions';

const CustomTextInput = ({ IconName, IconColor, IconSize, TextInputProps, showReverse, HideIcon,Input ,onSubmitEditing, onChangeText }) => {
    const [isFocused, setIsFocused] = useState(false)


    return (
        <View style={[showReverse ? styles.ReverseContainer : styles.Container,{borderColor: isFocused ? Colors.AppColor: '#EBEBEB'}]}>
            { HideIcon ?
                null
                :
                
                <MaterialCommunityIcons name={IconName ? IconName : 'lock'} color={IconColor ? IconColor :  Colors.AppColor} size={IconSize ? IconSize : 24} />
            }
            <TextInput
               onSubmitEditing={onSubmitEditing}
                ref={Input}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChangeText={onChangeText}
                style={[HideIcon ? { width: SCREEN_WIDTH * 0.8 } : { width: SCREEN_WIDTH * 0.7 },{fontSize: 16}]} 
                {...TextInputProps}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: SCREEN_WIDTH * 0.9,
        borderBottomWidth: 1,
        marginTop: 30
    },
    ReverseContainer: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: SCREEN_WIDTH * 0.9,
        borderBottomWidth: 1,
        marginTop: 30
    },

})
export { CustomTextInput };