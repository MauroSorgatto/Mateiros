import { TextInput } from "react-native";

export const Input = ({placeholder, ...props}) => <TextInput className="rounded p-3 pr-4 h-12 my-2 bg-white text-gray-500 w-full border border-gray-200" placeholder={placeholder} {...props} />