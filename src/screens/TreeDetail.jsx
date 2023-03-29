import { View, ScrollView } from "react-native";
import { Input } from "../components/Input";
import { GhostButton, Button } from "../components/Button";
import { CaixinhaBranca } from "../components/TreeCard";
import {
  TreeIconSolid,
  LeafIcon,
  TreeIcon,
  SeedIcon,
  FruitIcon,
  FlowerIcon,
} from "../components/Icons";

const getIcon = (iconName) => {
  switch (iconName) {
    case "SolidTree":
      return <TreeIconSolid />;
    case "OutlinedTree":
      return <TreeIcon color="#F59E0B" />;
    case "Seed":
      return <SeedIcon />;
    case "Fruit":
      return <FruitIcon />;
    case "Flower":
      return <FlowerIcon />;
    case "Leaf":
      return <LeafIcon />;
  }
};

export const TreeDetail = ({ route, navigation }) => {
  const { tree } = route.params;

  return (
    <>
      <ScrollView>
        <View className="p-4">
          {tree.photoList.map(({ id, name, image, icon }) => (
            <CaixinhaBranca
              key={id}
              name={name}
              image={image}
              icon={getIcon(icon)}
            />
          ))}
        </View>
      </ScrollView>

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
