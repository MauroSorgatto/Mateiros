import { Image, View } from "react-native";
import coverImage from "../../assets/cover.png";
import { TimeLabel } from "./TimeLabel";

export const CoverImage = ({ compact }) => (
  <View className="flex flex-column relative">
    <Image
      className={`flex-initial rounded-t w-full ${compact ? "h-32" : ""}`}
      source={coverImage}
      resizeMode="cover"
    />
    <TimeLabel />
  </View>
);
