import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { Colors } from '../../Helper/Colors.js';
import IconPathVariable from '../../Helper/IconPathVariable/IconPathVariable';
import ImagePathVariable from '../../Helper/ImagePathVariable/ImagePathVariable';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const MyCustomDrawer = (props) => {

    const navigation = useNavigation();

    const [dataList, setDataList] = useState([]);
    const [topicName, setTopicName] = useState();
    console.log('props====', props)

    // const name = props.r
    // const [show, setShow] = useState(false);
    // const [show1, setShow1] = useState(false);
    // const [show2, setShow2] = useState(false);
    // const [show3, setShow3] = useState(false);
    // const [show4, setShow4] = useState(false);
    // const [show5, setShow5] = useState(false);
    // const [show6, setShow6] = useState(false);
    // const [show7, setShow7] = useState(false);
    // const [show8, setShow8] = useState(false);
    // const [show9, setShow9] = useState(false);
    // const [show10, setShow10] = useState(false);

    const SETopicList = [
        { id: 0, name: 'SE'},
        { id: 1, name: 'SE'},
        { id: 2, name: 'SE' },
        { id: 3, name: 'SE' },
    ]

    const DjangoTopicList = [
        { id: 0, name: 'Django' },
        { id: 1, name: 'Django' },
        { id: 2, name: 'Django' },
        { id: 3, name: 'Django' },
    ]

    const PharmaTopicList = [
        { id: 0, name: 'Pharmacovigilance' },
        // { id: 1, name: 'pharma' },
        // { id: 2, name: 'pharma' },
        // { id: 3, name: 'pharma' },
    ]

    const PythonTopicList = [
        { id: 0, name: 'Python Basic' },
        { id: 1, name: 'Introduction to Python' },
        { id: 2, name: 'Python Loops' },
        { id: 3, name: 'Data Structires' },
    ]

    const JavaTopicList = [
        { id: 0, name: 'Java Basics' },
        // { id: 1, name: 'java' },
        // { id: 2, name: 'java' },
        // { id: 3, name: 'java' },
    ]

    useEffect(() => {
        handleList()
    }, [])

    const handleList = async () => {
        try {
            const subName = await AsyncStorage.getItem('subName');
            console.log('SUBJECT==', subName);
            if (subName == 'SETopic') {
                setDataList(SETopicList)
                setTopicName('SE Testing Tutorial');
            } else if (subName == 'DjangoTopic') {
                setDataList(DjangoTopicList)
                setTopicName('Django Tutorial');

            } else if (subName == 'PharmaTopic') {
                setDataList(PharmaTopicList)
                setTopicName('Pharmacovigiliance Tutorial');
            } else if (subName == 'PythonTopic') {
                setDataList(PythonTopicList)
                setTopicName('Python Tutorial');

            } else if (subName == 'javaTopic') {
                setDataList(JavaTopicList)
                setTopicName('Java Tutorial');

            }
        } catch (error) {
            console.log(error)
        }
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.listContainer}>
            <Text style={styles.topicName}>{item.name}</Text>
            <Image source={IconPathVariable.Down} style={styles.icon} />
        </TouchableOpacity>
    )

    return (

        <View>
            <View style={{ marginVertical: 10 }}>
                <Text style={styles.heading}>{topicName}</Text>
            </View>
            <View style={styles.container}>
                <FlatList
                    data={dataList}
                    renderItem={renderItem}
                />
            </View>
        </View>

        //   <View>
        //    <View style={styles.mainContainer}>
        //         <Text style={styles.heading}>Python Tutorial</Text>
        //         <ScrollView>
        //             <View style={styles.Container}>
        //                 <View style={styles.button}>
        //                     <Text style={styles.buttonText}>Python Basics</Text>
        //                     {
        //                         show == false ?
        //                             <TouchableOpacity onPress={() => setShow(true)}>
        //                                 <Image source={IconPathVariable.Down} style={styles.icon} />
        //                             </TouchableOpacity>
        //                             :
        //                             <TouchableOpacity onPress={() => setShow(false)}>
        //                                 <Image source={IconPathVariable.Up} style={styles.icon} />
        //                             </TouchableOpacity>
        //                     }
        //                 </View>
        //                 {
        //                     show == true ?
        //                         <View style={styles.hiddenSheet}>
        //                             <TouchableOpacity onPress={() => navigation.navigate("PythonTopic")}>
        //                                 <Text style={styles.tabText}>Python Overview</Text>
        //                             </TouchableOpacity>
        //                             <TouchableOpacity>
        //                                 <Text style={styles.tabText}>Python Installation</Text>
        //                             </TouchableOpacity>
        //                         </View>
        //                         :
        //                         null
        //                 }
        //             </View>

        //             <View style={styles.Container}>
        //                 <View style={styles.button}>
        //                     <Text style={styles.buttonText}>Introduction to Python</Text>
        //                     {
        //                         show1 == false ?
        //                             <TouchableOpacity onPress={() => setShow1(true)}>
        //                                 <Image source={IconPathVariable.Down} style={styles.icon} />
        //                             </TouchableOpacity>
        //                             :
        //                             <TouchableOpacity onPress={() => setShow1(false)}>
        //                                 <Image source={IconPathVariable.Up} style={styles.icon} />
        //                             </TouchableOpacity>
        //                     }
        //                 </View>
        //                 {
        //                     show1 == true ?
        //                         <View style={styles.hiddenSheet}>
        //                             <TouchableOpacity>
        //                                 <Text style={styles.tabText}>Datatypes</Text>
        //                             </TouchableOpacity>

        //                         </View>
        //                         :
        //                         null
        //                 }
        //             </View>
        //             <View style={styles.Container}>
        //                 <View style={styles.button}>
        //                     <Text style={styles.buttonText}>Python Loops</Text>
        //                     {
        //                         show2 == false ?
        //                             <TouchableOpacity onPress={() => setShow2(true)}>
        //                                 <Image source={IconPathVariable.Down} style={styles.icon} />
        //                             </TouchableOpacity>
        //                             :
        //                             <TouchableOpacity onPress={() => setShow2(false)}>
        //                                 <Image source={IconPathVariable.Up} style={styles.icon} />
        //                             </TouchableOpacity>
        //                     }
        //                 </View>
        //                 {
        //                     show2 == true ?
        //                         <View style={styles.hiddenSheet}>
        //                             <TouchableOpacity>
        //                                 <Text style={styles.tabText}>if else statement</Text>
        //                             </TouchableOpacity>
        //                             <TouchableOpacity>
        //                                 <Text style={styles.tabText}>for and while loop</Text>
        //                             </TouchableOpacity>
        //                             <TouchableOpacity>
        //                                 <Text style={styles.tabText}>The range() Function</Text>
        //                             </TouchableOpacity>
        //                             <TouchableOpacity>
        //                                 <Text style={styles.tabText}>pass Statements</Text>
        //                             </TouchableOpacity>
        //                         </View>
        //                         :
        //                         null
        //                 }
        //             </View>
        //             <View style={styles.Container}>
        //                 <View style={styles.button}>
        //                     <Text style={styles.buttonText}>Data Structures</Text>
        //                     {
        //                         show3 == false ?
        //                             <TouchableOpacity onPress={() => setShow3(true)}>
        //                                 <Image source={IconPathVariable.Down} style={styles.icon} />
        //                             </TouchableOpacity>
        //                             :
        //                             <TouchableOpacity onPress={() => setShow3(false)}>
        //                                 <Image source={IconPathVariable.Up} style={styles.icon} />
        //                             </TouchableOpacity>
        //                     }
        //                 </View>
        //                 {
        //                     show3 == true ?
        //                         <View style={styles.hiddenSheet}>
        //                             <TouchableOpacity>
        //                                 <Text style={styles.tabText}>More on List</Text>
        //                             </TouchableOpacity>
        //                             <TouchableOpacity>
        //                                 <Text style={styles.tabText}>The del statement</Text>
        //                             </TouchableOpacity>
        //                         </View>
        //                         :
        //                         null
        //                 }
        //             </View>
        //             <View style={styles.Container}>
        //                 <View style={styles.button}>
        //                     <Text style={styles.buttonText}>Modules</Text>
        //                     {
        //                         show4 == false ?
        //                             <TouchableOpacity onPress={() => setShow4(true)}>
        //                                 <Image source={IconPathVariable.Down} style={styles.icon} />
        //                             </TouchableOpacity>
        //                             :
        //                             <TouchableOpacity onPress={() => setShow4(false)}>
        //                                 <Image source={IconPathVariable.Up} style={styles.icon} />
        //                             </TouchableOpacity>
        //                     }
        //                 </View>
        //                 {
        //                     show4 == true ?
        //                         <View style={styles.hiddenSheet}>
        //                             <TouchableOpacity>
        //                                 <Text style={styles.tabText}>More on Modules</Text>
        //                             </TouchableOpacity>
        //                             <TouchableOpacity>
        //                                 <Text style={styles.tabText}>Standard Modules</Text>
        //                             </TouchableOpacity>
        //                         </View>
        //                         :
        //                         null
        //                 }
        //             </View>
        //             <View style={styles.Container}>
        //                 <View style={styles.button}>
        //                     <Text style={styles.buttonText}>Input And Output</Text>
        //                     {
        //                         show5 == false ?
        //                             <TouchableOpacity onPress={() => setShow5(true)}>
        //                                 <Image source={IconPathVariable.Down} style={styles.icon} />
        //                             </TouchableOpacity>
        //                             :
        //                             <TouchableOpacity onPress={() => setShow5(false)}>
        //                                 <Image source={IconPathVariable.Up} style={styles.icon} />
        //                             </TouchableOpacity>
        //                     }
        //                 </View>
        //                 {
        //                     show5 == true ?
        //                         <View style={styles.hiddenSheet}>
        //                             <TouchableOpacity>
        //                                 <Text style={styles.tabText}>Fancier Output Formatting</Text>
        //                             </TouchableOpacity>
        //                             <TouchableOpacity>
        //                                 <Text style={styles.tabText}>Reading and Writing Files</Text>
        //                             </TouchableOpacity>
        //                         </View>
        //                         :
        //                         null
        //                 }
        //             </View>
        //             <View style={styles.Container}>
        //                 <View style={styles.button}>
        //                     <Text style={styles.buttonText}>Classes</Text>
        //                     {
        //                         show6 == false ?
        //                             <TouchableOpacity onPress={() => setShow6(true)}>
        //                                 <Image source={IconPathVariable.Down} style={styles.icon} />
        //                             </TouchableOpacity>
        //                             :
        //                             <TouchableOpacity onPress={() => setShow6(false)}>
        //                                 <Image source={IconPathVariable.Up} style={styles.icon} />
        //                             </TouchableOpacity>
        //                     }
        //                 </View>
        //                 {
        //                     show6 == true ?
        //                         <View style={styles.hiddenSheet}>
        //                             <TouchableOpacity>
        //                                 <Text style={styles.tabText}>Python Overview</Text>
        //                             </TouchableOpacity>
        //                             <TouchableOpacity>
        //                                 <Text style={styles.tabText}>Python Installation</Text>
        //                             </TouchableOpacity>
        //                         </View>
        //                         :
        //                         null
        //                 }
        //             </View>
        //             <View style={styles.Container}>
        //                 <View style={styles.button}>
        //                     <Text style={styles.buttonText}>Python Basics</Text>
        //                     {
        //                         show7 == false ?
        //                             <TouchableOpacity onPress={() => setShow7(true)}>
        //                                 <Image source={IconPathVariable.Down} style={styles.icon} />
        //                             </TouchableOpacity>
        //                             :
        //                             <TouchableOpacity onPress={() => setShow7(false)}>
        //                                 <Image source={IconPathVariable.Up} style={styles.icon} />
        //                             </TouchableOpacity>
        //                     }
        //                 </View>
        //                 {
        //                     show7 == true ?
        //                         <View style={styles.hiddenSheet}>
        //                             <TouchableOpacity>
        //                                 <Text style={styles.tabText}>Python Overview</Text>
        //                             </TouchableOpacity>
        //                             <TouchableOpacity>
        //                                 <Text style={styles.tabText}>Python Installation</Text>
        //                             </TouchableOpacity>
        //                         </View>
        //                         :
        //                         null
        //                 }
        //             </View>
        //             <View style={styles.Container}>
        //                 <View style={styles.button}>
        //                     <View style={{ width: '80%' }}>
        //                         <Text style={styles.buttonText}>Brief Tour Of The Standard Library</Text>
        //                     </View>
        //                     {
        //                         show8 == false ?
        //                             <TouchableOpacity onPress={() => setShow8(true)}>
        //                                 <Image source={IconPathVariable.Down} style={styles.icon} />
        //                             </TouchableOpacity>
        //                             :
        //                             <TouchableOpacity onPress={() => setShow8(false)}>
        //                                 <Image source={IconPathVariable.Up} style={styles.icon} />
        //                             </TouchableOpacity>
        //                     }
        //                 </View>
        //                 {
        //                     show8 == true ?
        //                         <View style={styles.hiddenSheet}>
        //                             <TouchableOpacity>
        //                                 <Text style={styles.tabText}>Python Overview</Text>
        //                             </TouchableOpacity>
        //                             <TouchableOpacity>
        //                                 <Text style={styles.tabText}>Python Installation</Text>
        //                             </TouchableOpacity>
        //                         </View>
        //                         :
        //                         null
        //                 }
        //             </View>
        //             <View style={styles.Container}>
        //                 <View style={styles.button}>
        //                     <View style={{ width: '80%' }}>
        //                         <Text style={styles.buttonText}>Brief Tour Of The Standard Lisbrary - Part II</Text>
        //                     </View>
        //                     {
        //                         show9 == false ?
        //                             <TouchableOpacity onPress={() => setShow9(true)}>
        //                                 <Image source={IconPathVariable.Down} style={styles.icon} />
        //                             </TouchableOpacity>
        //                             :
        //                             <TouchableOpacity onPress={() => setShow9(false)}>
        //                                 <Image source={IconPathVariable.Up} style={styles.icon} />
        //                             </TouchableOpacity>
        //                     }
        //                 </View>
        //                 {
        //                     show9 == true ?
        //                         <View style={styles.hiddenSheet}>
        //                             <TouchableOpacity>
        //                                 <Text style={styles.tabText}>Python Overview</Text>
        //                             </TouchableOpacity>
        //                             <TouchableOpacity>
        //                                 <Text style={styles.tabText}>Python Installation</Text>
        //                             </TouchableOpacity>
        //                         </View>
        //                         :
        //                         null
        //                 }
        //             </View>
        //             <View style={styles.Container}>
        //                 <View style={styles.button}>
        //                     <View style={{ width: '80%' }}>
        //                         <Text style={styles.buttonText}>Virtual Environments And Packages</Text>
        //                     </View>
        //                     {
        //                         show10 == false ?
        //                             <TouchableOpacity onPress={() => setShow10(true)}>
        //                                 <Image source={IconPathVariable.Down} style={styles.icon} />
        //                             </TouchableOpacity>
        //                             :
        //                             <TouchableOpacity onPress={() => setShow10(false)}>
        //                                 <Image source={IconPathVariable.Up} style={styles.icon} />
        //                             </TouchableOpacity>
        //                     }
        //                 </View>
        //                 {
        //                     show10 == true ?
        //                         <View style={styles.hiddenSheet}>
        //                             <TouchableOpacity>
        //                                 <Text style={styles.tabText}>Python Overview</Text>
        //                             </TouchableOpacity>
        //                             <TouchableOpacity>
        //                                 <Text style={styles.tabText}>Python Installation</Text>
        //                             </TouchableOpacity>
        //                         </View>
        //                         :
        //                         null
        //                 }
        //             </View>
        //         </ScrollView>
        //     </View> 
        // </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center',
        marginTop:15
    },
    listContainer: {
        backgroundColor: '#eee',
        marginVertical: 10,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    topicName: {
        fontSize: 20,
        color: Colors.black,
        fontWeight:'bold'
    },
    icon: {
        height: 22,
        width: 22
    },
})