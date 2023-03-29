import { Text, View, SafeAreaView, ScrollView } from "react-native";
import { Input } from "../components/Input";
import { GhostButton, Button } from "../components/Button";
import { CaixinhaBranca } from "../components/TreeCard";
import { TreeIconSolid, LeafIcon, TreeIcon, SeedIcon, FruitIcon,FlowerIcon} from "../components/Icons";
import  coverImage  from "../../assets/cover.png"

export const TreeDetail = ({ route, navigation }) => {
  const { tree } = route.params;

  return (
    <>
      <ScrollView className="flex flex-wrap w-full">
      <CaixinhaBranca name="Árvore Inteira" image={coverImage} icon={<TreeIconSolid/>}/>
       <CaixinhaBranca name="Tronco" image={coverImage} icon={<TreeIcon/>}/>
        <CaixinhaBranca name="Folha" image={coverImage} icon={<LeafIcon/>}/>
        <CaixinhaBranca name="Semente" image={coverImage} icon={<SeedIcon/>}/>
        <CaixinhaBranca name="Frutos" image={coverImage} icon={<FruitIcon/>}/>
        <CaixinhaBranca name="Flores" image={coverImage} icon={<FlowerIcon/>}/>

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
