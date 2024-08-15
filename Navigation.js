import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { createStackNavigator } from "@react-navigation/stack";

import index from "./screens";
import RemoveAsistence from "./screens/RemoveAsistence";
import login from "./screens/auth/login";

const Stack = createStackNavigator();

function MyStack () {
   return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={login} options={{ headerShown: false }} />
        <Stack.Screen name="Tabs" component={MyTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
   return (
      <Tab.Navigator>
         <Tab.Screen
            name="home"
            component={index}
            options={{
               tabBarLabel: () => null,
               tabBarIcon: ({ color, size }) => (
                  <AntDesign name="user" size={24} color="black" />
               ),
               tabBarBadge: 3,
               headerShown: false,
            }}
         />
         <Tab.Screen
            name="apply"
            component={RemoveAsistence}
            options={{
               tabBarLabel: () => null,
               tabBarIcon: ({ color, size }) => (
                  <AntDesign name="adduser" size={24} color="black" />
               ),
               tabBarBadge: 1,
               headerShown: false,
            }}
         />
      </Tab.Navigator>
   );
}

export default function Navigation() {
   return (
      <NavigationContainer>
         <MyStack></MyStack>
      </NavigationContainer>
   );
}