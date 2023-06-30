import React from "react";
import { Image, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../screens/HomeScreen'
import CategoryFilterScreen from '../screens/CategoryFilterScreen'

const Stack = createStackNavigator()
function HomeNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerStyle: { backgroundColor: "#5C3EBC" },
                    headerTitleAlign: 'center',
                    headerTitle: () => (
                        <Image
                            resizeMode="contain"
                            style={{ width: 70, height: 30 }}
                            source={require("../../assets/getirlogo.png")}
                        />
                    ),
                }}
            />
            <Stack.Screen
                name="CategoryDetails"
                component={CategoryFilterScreen}
                options={{
                    headerTintColor: 'white',
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: "#5C3EBC" },
                    headerTitleAlign: 'center',
                    headerTitle: () => (
                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>Ürünler</Text>
                    ),
                }}
            />
        </Stack.Navigator>
    )
}

export default HomeNavigator