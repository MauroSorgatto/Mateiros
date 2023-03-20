import { Pressable, Text } from "react-native";

const baseStyle =
  "flex w-full flex-row flex-initial align-center justify-center rounded p-4 h-12";

export const Button = ({ children, disabled, ...props }) => (
  <Pressable
    disabled={disabled}
    className={`${baseStyle} ${disabled ? `bg-blueGray-300 ` : `bg-amber-500`}`}
    {...props}
  >
    <Text
      className={`font-inter-600 ${disabled ? `text-white` : `text-black`}`}
    >
      {children}
    </Text>
  </Pressable>
);

export const GhostButton = ({ children, ...props }) => (
  <Pressable className={`${baseStyle} bg-opacity-0`} {...props}>
    <Text className="font-inter-600 text-amber-500">{children}</Text>
  </Pressable>
);
