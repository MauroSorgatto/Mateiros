import * as React from 'react';
import { useFonts } from './src/hooks/useFonts';
import { UserRouter } from './src/Router/User';
import { RecoilRoot } from 'recoil';
import { StatusBar } from 'react-native';

export default function App() {
    const [fontsLoaded] = useFonts();

    if (!fontsLoaded) {
        return null;
    }

    return <RecoilRoot>
        <UserRouter />
    </RecoilRoot>
}
