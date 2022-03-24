import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import IconPathVariable from '../../../Helper/IconPathVariable/IconPathVariable';
import { styles } from './styles';
import { CustomHeader } from '../../../Component/CustomHeader';

export const PythonTopicList = ({ navigation }) => {

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);
    const [show7, setShow7] = useState(false);
    const [show8, setShow8] = useState(false);
    const [show9, setShow9] = useState(false);
    const [show10, setShow10] = useState(false);

    return (
        <View>
            <CustomHeader/>
        <View style={styles.mainContainer}>
            <Text style={styles.heading}>Python Tutorial</Text>
            <ScrollView>
                <View style={styles.Container}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Python Basics</Text>
                        {
                            show == false ?
                                <TouchableOpacity onPress={() => setShow(true)}>
                                    <Image source={IconPathVariable.Down} style={styles.icon} />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={() => setShow(false)}>
                                    <Image source={IconPathVariable.Up} style={styles.icon} />
                                </TouchableOpacity>
                        }
                    </View>
                    {
                        show == true ?
                            <View style={styles.hiddenSheet}>
                                <TouchableOpacity onPress={() => navigation.navigate("PythonDescription")}>
                                    <Text style={styles.tabText}>Python Overview</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={styles.tabText}>Python Installation</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            null
                    }
                </View>

                <View style={styles.Container}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Introduction to Python</Text>
                        {
                            show1 == false ?
                                <TouchableOpacity onPress={() => setShow1(true)}>
                                    <Image source={IconPathVariable.Down} style={styles.icon} />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={() => setShow1(false)}>
                                    <Image source={IconPathVariable.Up} style={styles.icon} />
                                </TouchableOpacity>
                        }
                    </View>
                    {
                        show1 == true ?
                            <View style={styles.hiddenSheet}>
                                <TouchableOpacity>
                                    <Text style={styles.tabText}>Datatypes</Text>
                                </TouchableOpacity>

                            </View>
                            :
                            null
                    }
                </View>
                <View style={styles.Container}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Python Loops</Text>
                        {
                            show2 == false ?
                                <TouchableOpacity onPress={() => setShow2(true)}>
                                    <Image source={IconPathVariable.Down} style={styles.icon} />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={() => setShow2(false)}>
                                    <Image source={IconPathVariable.Up} style={styles.icon} />
                                </TouchableOpacity>
                        }
                    </View>
                    {
                        show2 == true ?
                            <View style={styles.hiddenSheet}>
                                <TouchableOpacity>
                                    <Text style={styles.tabText}>if else statement</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={styles.tabText}>for and while loop</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={styles.tabText}>The range() Function</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={styles.tabText}>pass Statements</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            null
                    }
                </View>
                <View style={styles.Container}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Data Structures</Text>
                        {
                            show3 == false ?
                                <TouchableOpacity onPress={() => setShow3(true)}>
                                    <Image source={IconPathVariable.Down} style={styles.icon} />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={() => setShow3(false)}>
                                    <Image source={IconPathVariable.Up} style={styles.icon} />
                                </TouchableOpacity>
                        }
                    </View>
                    {
                        show3 == true ?
                            <View style={styles.hiddenSheet}>
                                <TouchableOpacity>
                                    <Text style={styles.tabText}>More on List</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={styles.tabText}>The del statement</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            null
                    }
                </View>
                <View style={styles.Container}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Modules</Text>
                        {
                            show4 == false ?
                                <TouchableOpacity onPress={() => setShow4(true)}>
                                    <Image source={IconPathVariable.Down} style={styles.icon} />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={() => setShow4(false)}>
                                    <Image source={IconPathVariable.Up} style={styles.icon} />
                                </TouchableOpacity>
                        }
                    </View>
                    {
                        show4 == true ?
                            <View style={styles.hiddenSheet}>
                                <TouchableOpacity>
                                    <Text style={styles.tabText}>More on Modules</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={styles.tabText}>Standard Modules</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            null
                    }
                </View>
                <View style={styles.Container}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Input And Output</Text>
                        {
                            show5 == false ?
                                <TouchableOpacity onPress={() => setShow5(true)}>
                                    <Image source={IconPathVariable.Down} style={styles.icon} />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={() => setShow5(false)}>
                                    <Image source={IconPathVariable.Up} style={styles.icon} />
                                </TouchableOpacity>
                        }
                    </View>
                    {
                        show5 == true ?
                            <View style={styles.hiddenSheet}>
                                <TouchableOpacity>
                                    <Text style={styles.tabText}>Fancier Output Formatting</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={styles.tabText}>Reading and Writing Files</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            null
                    }
                </View>
                <View style={styles.Container}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Classes</Text>
                        {
                            show6 == false ?
                                <TouchableOpacity onPress={() => setShow6(true)}>
                                    <Image source={IconPathVariable.Down} style={styles.icon} />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={() => setShow6(false)}>
                                    <Image source={IconPathVariable.Up} style={styles.icon} />
                                </TouchableOpacity>
                        }
                    </View>
                    {
                        show6 == true ?
                            <View style={styles.hiddenSheet}>
                                <TouchableOpacity>
                                    <Text style={styles.tabText}>Python Overview</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={styles.tabText}>Python Installation</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            null
                    }
                </View>
                <View style={styles.Container}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Python Basics</Text>
                        {
                            show7 == false ?
                                <TouchableOpacity onPress={() => setShow7(true)}>
                                    <Image source={IconPathVariable.Down} style={styles.icon} />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={() => setShow7(false)}>
                                    <Image source={IconPathVariable.Up} style={styles.icon} />
                                </TouchableOpacity>
                        }
                    </View>
                    {
                        show7 == true ?
                            <View style={styles.hiddenSheet}>
                                <TouchableOpacity>
                                    <Text style={styles.tabText}>Python Overview</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={styles.tabText}>Python Installation</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            null
                    }
                </View>
                <View style={styles.Container}>
                    <View style={styles.button}>
                        <View style={{ width: '80%' }}>
                            <Text style={styles.buttonText}>Brief Tour Of The Standard Library</Text>
                        </View>
                        {
                            show8 == false ?
                                <TouchableOpacity onPress={() => setShow8(true)}>
                                    <Image source={IconPathVariable.Down} style={styles.icon} />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={() => setShow8(false)}>
                                    <Image source={IconPathVariable.Up} style={styles.icon} />
                                </TouchableOpacity>
                        }
                    </View>
                    {
                        show8 == true ?
                            <View style={styles.hiddenSheet}>
                                <TouchableOpacity>
                                    <Text style={styles.tabText}>Python Overview</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={styles.tabText}>Python Installation</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            null
                    }
                </View>
                <View style={styles.Container}>
                    <View style={styles.button}>
                        <View style={{ width: '80%' }}>
                            <Text style={styles.buttonText}>Brief Tour Of The Standard Lisbrary - Part II</Text>
                        </View>
                        {
                            show9 == false ?
                                <TouchableOpacity onPress={() => setShow9(true)}>
                                    <Image source={IconPathVariable.Down} style={styles.icon} />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={() => setShow9(false)}>
                                    <Image source={IconPathVariable.Up} style={styles.icon} />
                                </TouchableOpacity>
                        }
                    </View>
                    {
                        show9 == true ?
                            <View style={styles.hiddenSheet}>
                                <TouchableOpacity>
                                    <Text style={styles.tabText}>Python Overview</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={styles.tabText}>Python Installation</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            null
                    }
                </View>
                <View style={styles.Container}>
                    <View style={styles.button}>
                        <View style={{ width: '80%' }}>
                            <Text style={styles.buttonText}>Virtual Environments And Packages</Text>
                        </View>
                        {
                            show10 == false ?
                                <TouchableOpacity onPress={() => setShow10(true)}>
                                    <Image source={IconPathVariable.Down} style={styles.icon} />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={() => setShow10(false)}>
                                    <Image source={IconPathVariable.Up} style={styles.icon} />
                                </TouchableOpacity>
                        }
                    </View>
                    {
                        show10 == true ?
                            <View style={styles.hiddenSheet}>
                                <TouchableOpacity>
                                    <Text style={styles.tabText}>Python Overview</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={styles.tabText}>Python Installation</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            null
                    }
                </View>
            </ScrollView>
        </View>
        </View>
    )
}