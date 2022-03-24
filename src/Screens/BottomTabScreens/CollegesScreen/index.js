import React, {useState} from "react";
import { View, Text, FlatList, ImageBackground, TouchableOpacity, Image, TextInput } from 'react-native';
import { CustomHeader } from '../../../Component/CustomHeader';
import { Colors } from "../../../Helper/Colors.js";
import IconPathVariable from "../../../Helper/IconPathVariable/IconPathVariable";
import ImagePathVariable from "../../../Helper/ImagePathVariable/ImagePathVariable";
import { styles } from "./styles";
import DropDownPicker from 'react-native-dropdown-picker';

export const CollegesScreen = () => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);

    const DATA1 = [
        { id: 0, image: ImagePathVariable.College1, title: 'Indian Institute of Technology Bombay' },
        { id: 1, image: ImagePathVariable.College2, title: 'Jaypee University of Engineering and Technology - Guna' },
        { id: 2, image: ImagePathVariable.College1, title: 'Indian Institute of Technology Bombay' },
        { id: 3, image: ImagePathVariable.College2, title: 'Jaypee University of Engineering and Technology - Guna' },

    ]

    const renderItem = ({ item }) => (
        <View style={styles.subContainer1}>
            <ImageBackground
                borderTopRightRadius={10}
                borderTopLeftRadius={10}
                source={item.image} style={styles.image} >
            </ImageBackground>
            <View style={styles.textContainer}>
                <Text style={styles.name}>{item.title}</Text>
                <View style={styles.container}>
                    <Image source={IconPathVariable.Location} style={styles.icon} />
                    <Text style={styles.text}>Mumbai, webmini.State.None</Text>
                </View>
            </View>
        </View>
    )

    return (
        <View>
            <CustomHeader />
            <View style={styles.maincontainer}>
                <View style={styles.textBox}>
                    <TextInput
                        style={styles.input}
                        placeholder="Search university"
                        placeholderTextColor={Colors.TextGrey}
                    />
                    <Image source={IconPathVariable.Search} style={styles.icon1} />
                </View>

               <View style={{flexDirection:'row', alignItems:'center', backgroundColor:'white', marginVertical: 10}}>
                   <Image source={IconPathVariable.Location} style={[styles.icon1, {marginLeft: 10}]}/>
               <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder={"Select Location"}
                    style={styles.dropdown}
                />
               </View>

                <FlatList
                    data={DATA1}
                    renderItem={renderItem}
                />
            </View>
        </View>
    )
}