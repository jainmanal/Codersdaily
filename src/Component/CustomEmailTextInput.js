import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../Helper/Colors.js';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../Helper/DeviceDimentions';

const CustomEmailTextInput = ({ IconName, IconColor, Input,IconSize, TextInputProps, showReverse, HideIcon ,onSubmitEditing}) => {
    const [isFocused, setIsFocused] = useState(false)


    return (
        <View style={[showReverse ? styles.ReverseContainer : styles.Container,{borderColor: isFocused ? Colors.AppColor: '#EBEBEB'}]}>
            { HideIcon ?
                null
                :
    
                <MaterialCommunityIcons name={IconName ? IconName : 'email'} color={IconColor ? IconColor :  Colors.AppColor} size={IconSize ? IconSize : 20} />
          
           }
            <TextInput
                onSubmitEditing={onSubmitEditing}
                ref={Input}
               autoCapitalize='none'
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                style={HideIcon ? { width: SCREEN_WIDTH * 0.8 } : { width: SCREEN_WIDTH * 0.7 }}
                {...TextInputProps}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        height: 50,
        // borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: SCREEN_WIDTH * 0.9,
        borderBottomWidth: 1,
    },
    ReverseContainer: {
        height: 50,
        // borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: SCREEN_WIDTH * 0.9,
        borderBottomWidth: 1,
    },


})
export { CustomEmailTextInput };