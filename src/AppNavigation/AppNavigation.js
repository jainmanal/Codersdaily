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
import { CourseDescription } from "../Screens/CourseDescription";

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
                <Stack.Screen name="Course" component={CourseScreen} options={{ headerShown: false }} />
                <Stack.Screen name="College" component={CollegesScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
                <Stack.Screen name="CourseDetail" component={CourseDetail} options={{ headerShown: false }} />
                <Stack.Screen name="CourseDescription" component={CourseDescription} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default AppNavigation;