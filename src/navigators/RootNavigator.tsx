import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, TouchableOpacity, Text } from "react-native";
import HomeNavigator from "./HomeNavigator";
import { Entypo, Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function RootNavigator() {

    const CustomTabBarButton = ({ children }) => {
        return (
            <TouchableOpacity
                style={{
                    borderColor: "white",
                    borderWidth: 2,
                    borderRadius: 32,
                    justifyContent: "center",
                    marginTop: -8,
                    alignItems: "center",
                    backgroundColor: "#5C3EBC",
                    width: 55,
                    height: 55,
                }}>
                <Entypo name="list" size={32} color="#FFD00C" />
            </TouchableOpacity>
        )
    }
    return (
        <Tab.Navigator
            initialRouteName="AnaSayfa"
            screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#5C3EBC",
                tabBarInactiveTintColor: "#959595",
                headerShown: false,
                tabBarStyle: {
                    height: 80,
                },
            }}
        >
            <Tab.Screen
                name="AnaSayfa"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="home" size={24} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Search"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="search" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="list"
                component={HomeNavigator}
                options={{
                    tabBarIcon: (props) => <CustomTabBarButton {...props} />
                }}
            />
            <Tab.Screen
                name="User"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="user" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Gift"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="gift" size={24} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default RootNavigator