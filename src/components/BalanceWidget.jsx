import { useState } from "react";
import { currencyFormatter } from "../currencyFormater";
import { EyeIcon, EyeSlashIcon } from "react-native-heroicons/solid";
import { Pressable, ScrollView, Text, View } from "react-native";

export const BalanceWidget = ({ balance }) => {
  const [isSaldoVisivel, setSaldoVisivel] = useState();

  return (
    <View className="border-t border-gray-200 mt-2 mx-6 py-6">
      <Text className="font-inter-600 text-sm text-blueGray-600 mb-2">
        Saldo disponível
      </Text>
      <View className="flex flex-row justify-between">
        <Text className="font-poppins-600 text-4xl">
          {isSaldoVisivel ? currencyFormatter.format(balance) : "********"}
        </Text>
        <Pressable onPress={() => setSaldoVisivel(!isSaldoVisivel)}>
          {isSaldoVisivel ? (
            <EyeIcon color="#F59E0B" />
          ) : (
            <EyeSlashIcon color="#F59E0B" />
          )}
        </Pressable>
      </View>
      <View className="flex flex-row mt-6">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="rounded-full bg-black px-5 py-1 mr-4">
            <Text className="font-inter-600 text-white">Total</Text>
          </View>
          <View className="rounded-full bg-gray-200 px-5 py-1 mr-4">
            <Text className="font-inter-600 text-black">Outubro, 22</Text>
          </View>
          <View className="rounded-full bg-gray-200 px-5 py-1 mr-4">
            <Text className="font-inter-600 text-black">Setembro, 22</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
