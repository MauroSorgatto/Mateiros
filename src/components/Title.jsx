import { Text } from "react-native";

export const Title = ({ props, children }) => (
  <Text
    className="font-poppins-600 text-gray-900 text-center text-2xl mb-4"
    {...props}
  >
    {children}
  </Text>
);

export const PageTitle = ({ props, children }) => (
  <Text className="font-poppins-600 text-gray-900 text-4xl m-6 mb-4" {...props}>
    {children}
  </Text>
);
