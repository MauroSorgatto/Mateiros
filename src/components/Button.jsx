import { Pressable, Text } from "react-native";

const baseStyle = 'flex w-full flex-row flex-initial align-center justify-center rounded p-4 h-12 m-1'

export const Button = ({ children, ...props }) => 
  <Pressable className={`${baseStyle} bg-amber-500`} {...props}>
    <Text>
      {children}
    </Text>
  </Pressable>

export const GhostButton = ({children, ...props}) => 
  <Pressable className={`${baseStyle} bg-opacity-0`} {...props}>
    <Text className="text-amber-500">
      {children}
    </Text>
  </Pressable>