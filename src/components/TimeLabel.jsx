import { Text, View } from "react-native";
import { HourglassIcon } from "./Icons/HourglassIcon";

export const TimeLabel = () => (
  <View className="flex flex-row absolute z-10 left-4 bottom-4">
    <View className="flex flex-row align-middle rounded-sm py-1 px-4 bg-white">
      <HourglassIcon />
      <Text className="ml-2">13:55</Text>
    </View>
  </View>
);
