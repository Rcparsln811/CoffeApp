import { View, Text, StyleSheet, LogBox } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { themeColors } from '../theme'
import { HomeIcon as HomeOutline, HeartIcon as HeartOutline, ShoppingBagIcon as BagOutline } from 'react-native-heroicons/outline';
import { HomeIcon as HomeSolid, HeartIcon as HeartSolid, ShoppingBagIcon as BagSolid } from 'react-native-heroicons/solid';
import ProductScreen from '../screens/ProductScreen'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
LogBox.ignoreLogs(['Non-serializable values were found in the navigation state',]);

export default function AppNavigation() {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                style:{backgroundColor:'white'}
            }}>
                <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeTabs} />
                <Stack.Screen name="Product" options={{ headerShown: false }} component={ProductScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

function HomeTabs() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused, color, size }) => menuIcons(route, focused),
            tabBarStyle: {
                height: 70,
                borderRadius: 50,
                backgroundColor: themeColors.bgLight,
                marginVertical: 15,
                marginHorizontal: 15,

            },
            tabBarItemStyle: {

            }

        })} >
            <Tab.Screen name="home" component={HomeScreen} />
            <Tab.Screen name="favourite" component={HomeScreen} />
            <Tab.Screen name="cart" component={HomeScreen} />
        </Tab.Navigator>
    )
}
const menuIcons = (route, focused) => {
    let icon;


    if (route.name === 'home') {
        icon = focused ? <HomeSolid size="30" color="black" /> : <HomeOutline size="30" strokeWidth={2} color="white" />
    } else if (route.name === 'favourite') {
        icon = focused ? <HeartSolid size="30" color="black" /> : <HeartOutline size="30" strokeWidth={2} color="white" />
    } else if (route.name === 'cart') {
        icon = focused ? <BagSolid size="30" color="black" /> : <BagOutline size="30" strokeWidth={2} color="white" />
    }

    let buttonClass = focused ? { backgroundColor: "white" } : {};
    return (
        <View style={[styles.Icon, buttonClass]}>
            {icon}
        </View>
    )
}

const styles = StyleSheet.create({
    Icon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 70,
        elevation: 20,


    },
});

