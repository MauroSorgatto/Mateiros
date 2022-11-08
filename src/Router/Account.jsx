import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Hello as HelloScreen  } from '../screens/Hello'
import { CreateAccount as CreateAccountScreen  } from '../screens/CreateAccount'
import { SignIn as SignInScreen  } from '../screens/SignIn'

const RootStack = createStackNavigator();

export const AccountRouter = () => (
    <NavigationContainer>
        <RootStack.Navigator>
            <RootStack.Group>
                <RootStack.Screen name="Hello" component={HelloScreen} options={{ header: () => null }}/>
            </RootStack.Group>
            <RootStack.Group screenOptions={{ presentation: 'modal' }}>
                <RootStack.Screen name="CreateAccount" component={CreateAccountScreen} />
                <RootStack.Screen name="SignIn" component={SignInScreen} />
            </RootStack.Group>
        </RootStack.Navigator>
    </NavigationContainer>
)