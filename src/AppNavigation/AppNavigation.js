import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SplashScreen from "../Screens/SplashScreen";
import { LoginScreen } from "../Screens/LoginScreen";
import { SignUpScreen } from "../Screens/SignUpScreen";
import { HomeScreen } from "../Screens/HomeScreen";
import { CourseScreen } from "../Screens/BottomTabScreens/CourseScreen";
import { CollegesScreen } from "../Screens/BottomTabScreens/CollegesScreen";
import { ProfileScreen } from "../Screens/BottomTabScreens/ProfileScreen/";
import BottomTab from "../Helper/BottomTab/BottomTab.js";
import { CourseDetail } from "../Screens/CourseDetail";
import { SETopicList } from "../Screens/TopicList/SETopicList";
import { DjangoTopicList } from "../Screens/TopicList/DjangoTopicList";
import { PharmaTopicList } from "../Screens/TopicList/PharmaTopicList";
import JavaTopicDescription from "../Screens/Description/JavaTopicDescription";
import PythonTopicDescription from "../Screens/Description/PythonTopicDescription";
import { CollegeDetails } from "../Screens/CollegeDetails";
import { MyCustomDrawer } from "../Component/CustomDrawer/MyCustomDrawer";
import JavaTopicList from "../Screens/TopicList/JavaTopicList";
import { SCREEN_WIDTH } from "../Helper/DeviceDimentions";
import PythonTopicList from "../Screens/TopicList/PythonTopicList";
import { AppIntroScreen } from "../Screens/AppIntroScreen";
import ForgetPassword from "../Screens/ForgetPassword";
import { UpdateProfile } from "../Screens/UpdateProfile";


// const Drawer = createDrawerNavigator();

// function MyDrawer(props) {
//   // console.log(props, 'peopaaaa')
//   var componentName
//   const name = props.route.name
//   // console.log('name', name)

//   if (name == 'SETopic') {
//     componentName = SETopicList
//   } else if (name == 'PharmaTopic') {
//     componentName = PharmaTopicList
//   } else if (name == 'javaTopic') {
//     componentName = JavaTopicList
//   } else if (name == 'DjangoTopic') {
//     componentName = DjangoTopicList
//   } else if (name == 'PythonTopic') {
//     componentName = PythonTopicList
//   }

//   return (
//     <Drawer.Navigator screenOptions={{ drawerStyle: { width: SCREEN_WIDTH * 0.8 } }}
//       drawerContent={(props) => <MyCustomDrawer {...props} />}
//     >
//       <Drawer.Screen name={props.route.name} component={componentName}
//         options={{ headerShown: false }}
//       />
//     </Drawer.Navigator>
//   );
// }

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
        <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CourseTab" component={CourseScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CollegeTab" component={CollegesScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileTab" component={ProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="EditProfile" component={UpdateProfile} options={{ headerShown: false }} />
        <Stack.Screen name="CourseDetail" component={CourseDetail} options={{ headerShown: false }} />

        <Stack.Screen name="PythonTopic" component={PythonTopicList}
          options={{ headerShown: false }} />

        <Stack.Screen name="SETopic" component={SETopicList}
          options={{ headerShown: false, }} />

        <Stack.Screen name="DjangoTopic" component={DjangoTopicList}
          options={{ headerShown: false }} />

        <Stack.Screen name="javaTopic" component={JavaTopicList}
          options={{ headerShown: false }} />

        <Stack.Screen name="PharmaTopic" component={PharmaTopicList}
          options={{ headerShown: false }} />

        <Stack.Screen name="PythonDescription" component={PythonTopicDescription} options={{ headerShown: false }} />
        <Stack.Screen name="JavaDescription" component={JavaTopicDescription} options={{ headerShown: false }} />
        <Stack.Screen name="CollegeDetails" component={CollegeDetails} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default AppNavigation;