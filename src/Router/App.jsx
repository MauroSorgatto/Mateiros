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

const ProjectScreens = () => (
  <RootStack.Navigator>
    <RootStack.Screen
      name="Projects"
      component={ProjectScreen}
      options={{ headerShown: false }}
      initialParams={{ project: {} }}
    />
    <RootStack.Screen
      name="ProjectDetails"
      component={ProjectDetailScreen}
      options={{ headerShown: false }}
      initialParams={{ project: {} }}
    />
  </RootStack.Navigator>
);

export const AppRouter = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" />

    <Tab.Navigator>
      <Tab.Screen
        name="Projects"
        component={ProjectScreens}
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
  </NavigationContainer>
);
