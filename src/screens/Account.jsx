import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { useRecoilState } from "recoil";
import { PageTitle } from "../components/Title";
import { userState } from "../state/user";
import { currencyFormatter } from '../currencyFormater'
import { EyeIcon, PhoneIcon } from 'react-native-heroicons/solid'
import { ChevronRightIcon } from 'react-native-heroicons/outline'

const BalanceWidget = ({balance}) => <View className="border-t border-gray-200 mt-2 mx-6 py-6">
    <Text className="font-inter-600 text-sm text-blueGray-600 mb-2">Saldo disponível</Text>
    <View className="flex flex-row justify-between">
        <Text className="font-poppins-600 text-4xl">{currencyFormatter.format(balance)}</Text>
        <EyeIcon color="#F59E0B"/>
    </View>
    <View className="flex flex-row mt-6">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="rounded-full bg-black px-5 py-1 mr-4"><Text className="font-inter-600 text-white">Total</Text></View>
            <View className="rounded-full bg-gray-200 px-5 py-1 mr-4"><Text className="font-inter-600 text-black">Outubro, 22</Text></View>
            <View className="rounded-full bg-gray-200 px-5 py-1 mr-4"><Text className="font-inter-600 text-black">Setembro, 22</Text></View>
        </ScrollView>
    </View>
</View>

export const Account = () => {
    const [user] = useRecoilState(userState);

    return (<SafeAreaView className="bg-white">
        <View >
            <PageTitle>{user.name}</PageTitle>
            <BalanceWidget balance={825} />
        </View>
        <ScrollView className="bg-gray-100 p-6">
            <View className="bg-white px-4 py-6 mb-4 flex flex-row justify-between">
                <View className="flex flex-row">
                    <Text className="font-inter-600 text-base text-black">Meus Dados</Text>
                </View>
                <ChevronRightIcon color="#94A3B8" />
            </View>
            <View className="bg-white px-4 py-6 mb-4 flex flex-row justify-between">
                <View className="flex flex-row">
                    <Text className="font-inter-600 text-base text-black">Dados Bancários</Text>
                </View>
                <ChevronRightIcon color="#94A3B8" />
            </View>
            <View className="bg-white px-4 py-6 mb-4 flex flex-row justify-between">
                <View className="flex flex-row">
                    <PhoneIcon color="#F59E0B" />
                    <Text className="font-inter-600 text-base text-black ml-4">Suporte</Text>
                </View>
                <ChevronRightIcon color="#94A3B8" />
            </View>
            <View className="bg-white px-4 py-6 mb-4 flex flex-row justify-between">
                <View className="flex flex-row">
                    <Text className="font-inter-600 text-base text-black">Sair</Text>
                </View>
                <ChevronRightIcon color="#94A3B8" />
            </View>
        </ScrollView>
    </SafeAreaView>)
}
