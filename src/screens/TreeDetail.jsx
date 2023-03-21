import { Text, View, SafeAreaView, ScrollView } from "react-native";
import { Input } from "../components/Input";
import { GhostButton, Button } from "../components/Button";

export const TreeDetail = ({ route, navigation }) => {
  const { tree } = route.params;

  return (
    <>
      <Text>{tree.name}</Text>
      <View className="p-6 bg-white justify-center shadow">
        <Input autoComplete="espécie" placeholder="Digitar espécie" />
        <Button className="my-1">Confirmar</Button>
        <GhostButton
          className="my-1"
          onPress={() => navigation.navigate("Projects")}
        >
          Cancelar
        </GhostButton>
      </View>
    </>
  );
};
