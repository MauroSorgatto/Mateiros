import { View, Text } from "react-native";
import { CalendarIcon } from "./Icons/CalendarIcon";

export const CalendarLabel = () => (
  <View className="flex flex-row absolute z-10 left-4 bottom-4">
    <View className="flex flex-row align-middle rounded-sm py-1 px-4 bg-white">
      <CalendarIcon />
      <Text className="ml-2 font-inter-600"> 24/10/2022, 13:55</Text>
    </View>
  </View>
);
