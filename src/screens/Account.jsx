import { Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
import { useRecoilState } from "recoil";
import { PageTitle } from "../components/Title";
import { userState } from "../state/user";
import { PhoneIcon } from "react-native-heroicons/solid";
import { ChevronRightIcon } from "react-native-heroicons/outline";
import { PersonalIcon, BankAccountIcon, LeaveIcon } from "../components/Icons";
import { BalanceWidget } from "../components/BalanceWidget";

export const Account = ({ navigation }) => {
  const [user, setUser] = useRecoilState(userState);

  return (
    <SafeAreaView className="bg-white">
      <View>
        <PageTitle>{user.name}</PageTitle>
        <BalanceWidget balance={825} />
      </View>
      <ScrollView className="bg-gray-100 p-6">
        <Pressable
          className="bg-white px-4 py-6 mb-4 flex flex-row justify-between"
          onPress={() => navigation.navigate("MyData", { user })}
        >
          <View className="flex flex-row">
            <PersonalIcon />
            <Text className="font-inter-600 text-base text-black ml-4">
              Meus Dados
            </Text>
          </View>
          <ChevronRightIcon color="#94A3B8" />
        </Pressable>
        <View className="bg-white px-4 py-6 mb-4 flex flex-row justify-between">
          <View className="flex flex-row">
            <BankAccountIcon />
            <Text className="font-inter-600 text-base text-black ml-4">
              Dados Bancários
            </Text>
          </View>
          <ChevronRightIcon color="#94A3B8" />
        </View>
        <View className="bg-white px-4 py-6 mb-4 flex flex-row justify-between">
          <View className="flex flex-row">
            <PhoneIcon color="#F59E0B" />
            <Text className="font-inter-600 text-base text-black ml-4">
              Suporte
            </Text>
          </View>
          <ChevronRightIcon color="#94A3B8" />
        </View>
        <Pressable
          className="bg-white px-4 py-6 mb-4 flex flex-row justify-between"
          onPress={() => setUser(false)}
        >
          <View className="flex flex-row">
            <LeaveIcon />
            <Text className="font-inter-600 text-base text-black ml-4">
              Sair
            </Text>
          </View>
          <ChevronRightIcon color="#94A3B8" />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};
