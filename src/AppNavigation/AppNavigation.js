import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from "../Screens/SplashScreen";
import { LoginScreen } from "../Screens/LoginScreen";
import { SignUpScreen } from "../Screens/SignUpScreen";
import { HomeScreen } from "../Screens/HomeScreen";
import { CourseScreen } from "../Screens/BottomTabScreens/CourseScreen";
import { CollegesScreen } from "../Screens/BottomTabScreens/CollegesScreen";
import { ProfileScreen } from "../Screens/BottomTabScreens/ProfileScreen/";
import BottomTab from "../Helper/BottomTab/BottomTab.js";
import { CourseDetail } from "../Screens/CourseDetail";
import { PythonTopicList } from "../Screens/TopicList/PythonTopicList";
import { SETopicList } from "../Screens/TopicList/SETopicList";
import { DjangoTopicList } from "../Screens/TopicList/DjangoTopicList";
import { JavaTopicList } from "../Screens/TopicList/JavaTopicList";
import { PharmaTopicList } from "../Screens/TopicList/PharmaTopicList";
import JavaTopicDescription from "../Screens/Description/JavaTopicDescription";
import PythonTopicDescription from "../Screens/Description/PythonTopicDescription";

const Stack = createNativeStackNavigator();
function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
                <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="CourseTab" component={CourseScreen} options={{ headerShown: false }} />
                <Stack.Screen name="CollegeTab" component={CollegesScreen} options={{ headerShown: false }} />
                <Stack.Screen name="ProfileTab" component={ProfileScreen} options={{ headerShown: false }} />
                <Stack.Screen name="CourseDetail" component={CourseDetail} options={{ headerShown: false }} />
                <Stack.Screen name="PythonTopic" component={PythonTopicList} options={{ headerShown: false }} />
                <Stack.Screen name="SETopic" component={SETopicList} options={{ headerShown: false }} />
                <Stack.Screen name="DjangoTopic" component={DjangoTopicList} options={{ headerShown: false }} />
                <Stack.Screen name="javaTopic" component={JavaTopicList} options={{ headerShown: false }} />
                <Stack.Screen name="PharmaTopic" component={PharmaTopicList} options={{ headerShown: false }} />
                <Stack.Screen name="PythonDescription" component={PythonTopicDescription} options={{ headerShown: false }} />
                <Stack.Screen name="JavaDescription" component={JavaTopicDescription} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default AppNavigation;