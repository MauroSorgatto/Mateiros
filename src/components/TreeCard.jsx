import { View, Text, Image } from "react-native";

export const CaixinhaBranca = ({ image, icon, name }) => (
  <View className="w-full rounded p-2 my-2 overflow-hidden bg-white box-border">
    <Image source={image} resizeMode="contain" />

    <View className="flex flex-row py-1 bg-white">
      {icon}
      <Text className="font-inter-800 pl-2 ">{name}</Text>
    </View>
  </View>
);
