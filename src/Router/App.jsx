import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Project as ProjectScreen } from '../screens/Project'
import { History as HistoryScreen } from '../screens/History'
import { Account as AccountScreen } from '../screens/Account'

const Tab = createBottomTabNavigator(); 

export const AppRouter = () => (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Projects" component={ProjectScreen} />
            <Tab.Screen name="History" component={HistoryScreen} />
            <Tab.Screen name="My Account" component={AccountScreen} />
        </Tab.Navigator>
    </NavigationContainer>
)