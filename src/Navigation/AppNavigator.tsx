import { View, Text } from "react-native";
import HomeScreen from "../Screens/HomeScreen";
import SettingsScreen from "../Screens/SettingsScreen";
import NotesScreen from "../Screens/NotesScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function AppNavigator(){

const Tab = createBottomTabNavigator()


    return(
        <NavigationContainer>


        <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Notes" component={NotesScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
        </NavigationContainer>
    )
}