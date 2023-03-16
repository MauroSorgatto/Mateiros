import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Project as ProjectScreen } from "../screens/Project";
import { History as HistoryScreen } from "../screens/History";
import { Account as AccountScreen } from "../screens/Account";
import { ProjectDetail as ProjectDetailScreen } from "../screens/ProjectDetails";
import {
  RectangleStackIcon,
  UserIcon,
  BookOpenIcon,
} from "react-native-heroicons/solid";
import { StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();

const options = {
  headerShown: false,
  tabBarActiveTintColor: "#000",
  tabBarInactiveTintColor: "#A1A1AA",
};

const RootStack = createStackNavigator();

const TabScreens = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Projects"
      component={ProjectScreen}
      options={{
        ...options,
        tabBarIcon: ({ color }) => <RectangleStackIcon color={color} />,
      }}
    />
    <Tab.Screen
      name="History"
      component={HistoryScreen}
      options={{
        ...options,
        tabBarIcon: ({ color }) => <BookOpenIcon color={color} />,
      }}
    />
    <Tab.Screen
      name="My Account"
      component={AccountScreen}
      options={{
        ...options,
        tabBarIcon: ({ color }) => <UserIcon color={color} />,
      }}
    />
  </Tab.Navigator>
);

export const AppRouter = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" />
    <RootStack.Navigator initialRouteName="Home">
      <RootStack.Screen
        name="Home"
        component={TabScreens}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="ProjectDetails"
        component={ProjectDetailScreen}
        options={{ headerShown: false }}
        initialParams={{ project: {} }}
      />
    </RootStack.Navigator>
  </NavigationContainer>
);
