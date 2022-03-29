import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SCREEN_HEIGHT } from '../../Helper/DeviceDimentions';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import ImagePathVariable from '../../Helper/ImagePathVariable/ImagePathVariable';

export const AppIntroScreen = ({ navigation }) => {
    return (
        // <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0.4, y: 0.4 }}
        // colors={['#ffe073', '#fbb728',]}
        // >
        <View style={{ flex: 1, 
            // // backgroundColor: '#fcd02d',
             backgroundColor: '#fff',
             padding: 15 }}>
            {/* <View>
                <Image  source={}/>
            </View> */}
            <View style={{marginTop: 75}}>
            <Image source={ImagePathVariable.AppIntroLogo} style={{height: 280, width: 280, alignSelf: 'center', resizeMode:'contain'}}/>
            </View>
            <View style={{ backgroundColor: '#fcd02d', borderRadius: 30, marginTop: 30, padding: 25, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#fff', }}>Discover your next skill</Text>
                <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#fff' }}>Learn anything you want!</Text>
                <View style={{ marginHorizontal: 20 }}>
                    <Text style={{ textAlign: 'center', fontSize: 18, color: '#000', marginVertical: 10, marginTop: 25,  }}>Discover the things you want to learn and grow with them</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}
                    style={{ backgroundColor: '#fff',shadowColor: '#000', shadowOffset: {width: -2, height: 8},
                    shadowOpacity: 0.2, elevation: 10,
                    shadowRadius: 3, padding: 15, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', borderRadius: 15, marginTop: 50, marginVertical: 50, paddingHorizontal: 35 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fcd02d' }}>Get Started</Text>
                </TouchableOpacity>
            </View>
            </View>
        // {/* </LinearGradient> */}
    )
}