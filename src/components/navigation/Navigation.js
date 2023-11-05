import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';

import HomePage from '../../screens/HomePage';
import Service from '../../screens/servicePage/Service';
import Help from '../../screens/Help';
import Profile from '../../screens/Profile';
import HelpInformation from '../../screens/HelpInformation';

import { Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import styles from './NavigationStyles';
import { Platform } from 'react-native';

const Tab = createBottomTabNavigator();
const screenOptions = {
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: Platform.OS === 'ios' ? 84 : 60,
        background: '#fff',
    },
};

const Navigation = ({ navigation }) => {
    return (
        <Tab.Navigator style={styles.container} screenOptions={screenOptions}>
            <Tab.Screen
                name="HomePage"
                component={HomePage}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <FontAwesome name="home" size={24} color={focused ? '#16247d' : '#111'} />
                                <Text style={{ fontSize: 12, color: '#16247d' }}>HOME</Text>
                            </View>
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Hoạt động"
                component={Service}
                options={({ route }) => ({
                    headerShown: true, // Hiển thị thanh tiêu đề
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <MaterialIcons
                                    name="miscellaneous-services"
                                    size={24}
                                    color={focused ? '#16247d' : '#111'}
                                />
                                <Text style={{ fontSize: 12, color: '#16247d' }}>SERVICES</Text>
                            </View>
                        );
                    },
                })}
            />

            <Tab.Screen
                name="Help"
                component={Help}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <FontAwesome name="warning" size={24} color={focused ? '#16247d' : '#111'} />
                                <Text style={{ fontSize: 12, color: '#16247d' }}>HELP</Text>
                            </View>
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View
                                // onPress={() => navigation.navigate('Profile')}
                                style={{ alignItems: 'center', justifyContent: 'center' }}
                            >
                                <Entypo name="user" size={24} color={focused ? '#16247d' : '#111'} />
                                <Text style={{ fontSize: 12, color: '#16247d' }}>PROFILE</Text>
                            </View>
                        );
                    },
                }}
            />

            <Tab.Screen
                name="HelpInformation"
                component={HelpInformation}
                options={{
                    tabBarButton: () => null,
                    tabBarVisible: false,
                }}
            />
        </Tab.Navigator>
    );
};

export default Navigation;
