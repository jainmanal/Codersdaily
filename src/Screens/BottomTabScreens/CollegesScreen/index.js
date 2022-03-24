import React, { useState } from "react";
import { View, Text, FlatList, ImageBackground, TouchableOpacity, Image, TextInput } from 'react-native';
import { CustomHeader } from '../../../Component/CustomHeader';
import { Colors } from "../../../Helper/Colors.js";
import IconPathVariable from "../../../Helper/IconPathVariable/IconPathVariable";
import ImagePathVariable from "../../../Helper/ImagePathVariable/ImagePathVariable";
import { styles } from "./styles";
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';

export const CollegesScreen = () => {

    const navigation = useNavigation();

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Indore M.P.', value: 'Indore M.P.' },
        { label: 'Bombay', value: 'Bombay' },
        { label: 'Delhi', value: 'Delhi' },
        { label: 'Chennai', value: 'Chennai' },
        { label: 'Kolkatta', value: 'Kolkatta' },
        { label: 'Surat', value: 'Surat' },
        { label: 'Heydrabad', value: 'Heydrabad' },
        { label: 'Kota', value: 'kota' },
    ]);

    const DATA1 = [
        {
            id: 0,
            image: ImagePathVariable.College1,
            title: 'Indian Institute of Technology Bombay',
            location: 'Mumbai, webmini.State.None'
        },
        {
            id: 1,
            image: ImagePathVariable.College2,
            title: 'Jaypee University of Engineering and Technology - Guna',
            location: ' Guna, webmini.State.None'
        },
        {
            id: 2,
            image: ImagePathVariable.College1,
            title: 'Indian Institute of Technology Bombay',
            location: 'Mumbai, webmini.State.None'
        },
        {
            id: 3,
            image: ImagePathVariable.College2,
            title: 'Jaypee University of Engineering and Technology - Guna',
            location: ' Guna, webmini.State.None'
        },
    ]

    const handleNavigation = () =>{
        navigation.navigate('CollegeDetails')
    }

    const renderItem = ({ item }) => (

        <TouchableOpacity onPress={()=> handleNavigation()}
         style={styles.subContainer1}>
            <ImageBackground
                borderTopRightRadius={10}
                borderTopLeftRadius={10}
                source={item.image} style={styles.image} >
            </ImageBackground>
            <View style={styles.textContainer}>
                <Text style={styles.name}>{item.title}</Text>
                <View style={styles.container}>
                    <Image source={IconPathVariable.Location} style={styles.icon} />
                    <Text style={styles.text}>{item.location}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )

    return (
        <View>
            <CustomHeader />
            <View style={styles.maincontainer}>
                <View style={styles.textBox}>
                    <TextInput
                        style={styles.input}
                        placeholder="Search university..."
                        placeholderTextColor={Colors.TextGrey}
                    />
                    <TouchableOpacity>
                        <Image source={IconPathVariable.Search} style={styles.icon1} />
                    </TouchableOpacity>
                </View>

                <View style={styles.dropdownContainer}>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        placeholder={"Select City"}
                        style={styles.dropdown}
                        containerStyle={{
                            width: '100%',
                            // height: '60%',
                            // overflow:'scroll' 
                        }}
                        searchable={true}
                        searchPlaceholder={"Search..."}
                        dropDownContainerStyle={{
                            borderColor: Colors.AppColor
                        }}
                        searchContainerStyle={{
                            borderBottomColor: Colors.AppColor
                        }}
                        searchTextInputStyle={{
                            borderColor: Colors.AppColor,
                        }}

                    />
                </View>
                <View
                >
                    <FlatList
                        style={{ marginTop: -80 }}
                        data={DATA1}
                        renderItem={renderItem}
                    />
                </View>
            </View>
        </View>
    )
}