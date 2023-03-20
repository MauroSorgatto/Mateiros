import * as React from "react";
import { useFonts } from "./src/hooks/useFonts";
import { UserRouter } from "./src/Router/User";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
    const [fontsLoaded] = useFonts();

    if (!fontsLoaded) {
        return null;
    }

    return (
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
                <UserRouter />
            </QueryClientProvider>
        </RecoilRoot>
    );
}
