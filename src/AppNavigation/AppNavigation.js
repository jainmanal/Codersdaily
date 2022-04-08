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
import { CollegeDetails } from "../Screens/CollegeDetails";
import { AppIntroScreen } from "../Screens/AppIntroScreen";
import ForgetPassword from "../Screens/ForgetPassword";
import { UpdateProfile } from "../Screens/UpdateProfile";
import { VerifyOTP } from "../Screens/VerifyOTP";
import { LessonDetails } from "../Screens/LessonDetails";
import { ConfirmPassword } from "../Screens/ConfirmPassword";

const Stack = createNativeStackNavigator();
function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AppIntro" component={AppIntroScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{ headerShown: false }} />
        <Stack.Screen name="verifyOTP" component={VerifyOTP} options={{ headerShown: false }} />
        <Stack.Screen name="ConfirmPass" component={ConfirmPassword} options={{ headerShown: false }} />
        <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CourseTab" component={CourseScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CollegeTab" component={CollegesScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileTab" component={ProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="EditProfile" component={UpdateProfile} options={{ headerShown: false }} />
        <Stack.Screen name="CourseDetail" component={CourseDetail} options={{ headerShown: false }} />
        <Stack.Screen name="LessonDetails" component={LessonDetails} options={{ headerShown: false }} />
        <Stack.Screen name="CollegeDetails" component={CollegeDetails} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default AppNavigation;