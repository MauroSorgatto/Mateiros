import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Hello as HelloScreen } from "../screens/Hello";
import { CreateAccount as CreateAccountScreen } from "../screens/CreateAccount";
import { SignIn as SignInScreen } from "../screens/SignIn";
import { StatusBar } from "react-native";

const RootStack = createStackNavigator();

export const AccountRouter = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" />
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen
          name="Hello"
          component={HelloScreen}
          options={{ headerShown: false }}
        />
      </RootStack.Group>
      <RootStack.Group
        screenOptions={{
          presentation: "modal",
          title: null,
          headerBackTitleVisible: false,
        }}
      >
        <RootStack.Screen
          name="CreateAccount"
          component={CreateAccountScreen}
        />
        <RootStack.Screen name="SignIn" component={SignInScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  </NavigationContainer>
);
