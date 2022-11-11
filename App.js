import * as React from 'react';
import { useFonts } from './src/hooks/useFonts';
import { AccountRouter } from './src/Router/Account'
import { AppRouter } from './src/Router/App'

export default function App() {
    const [userToken, setUserToken] = React.useState(false);
    const [fontsLoaded] = useFonts();

    if (!fontsLoaded) {
        return null;
    }

    return userToken ? <AppRouter /> : <AccountRouter />;
}
