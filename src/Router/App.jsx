import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Project as ProjectScreen } from '../screens/Project'
import { History as HistoryScreen } from '../screens/History'
import { Account as AccountScreen } from '../screens/Account'
import { RectangleStackIcon, UserIcon, BookOpenIcon } from 'react-native-heroicons/solid'
import { StatusBar } from 'react-native';

const Tab = createBottomTabNavigator(); 

const options = {
    headerShown: false, tabBarActiveTintColor: '#000', tabBarInactiveTintColor: '#A1A1AA'
}

export const AppRouter = () =>
    <NavigationContainer>
        <StatusBar barStyle='dark-content' />
        <Tab.Navigator> 
            <Tab.Screen name="Projects" component={ProjectScreen} options={{ ...options, tabBarIcon: ({ color }) => <RectangleStackIcon color={color} /> }} />
            <Tab.Screen name="History" component={HistoryScreen} options={{ ...options, tabBarIcon: ({ color }) => <BookOpenIcon color={color} /> }} />
            <Tab.Screen name="My Account" component={AccountScreen} options={{ ...options, tabBarIcon: ({ color }) => <UserIcon color={color} /> }} />
        </Tab.Navigator>
    </NavigationContainer>
