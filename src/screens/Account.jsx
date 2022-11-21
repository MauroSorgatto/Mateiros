import { SafeAreaView, ScrollView } from "react-native";
import { useRecoilState } from "recoil";
import { PageTitle } from "../components/Title";
import { userState } from "../state/user";

export const Account = () => {
    const [user] = useRecoilState(userState);

    return (<SafeAreaView>
        <PageTitle>{user.name}</PageTitle>
        <ScrollView className="px-6">
        </ScrollView>
    </SafeAreaView>)
}
