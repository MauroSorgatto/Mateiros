import { Text } from "react-native";

export const TreeDetail = ({ route }) => {
  const { tree } = route.params;

  return (
    <>
      <Text>{tree.name}</Text>
    </>
  );
};
