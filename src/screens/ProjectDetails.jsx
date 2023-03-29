import { Button, GhostButton } from "../components/Button";
import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import { ExclamationCircleIcon } from "react-native-heroicons/solid";
import coverImage from "../../assets/cover.png";
import { Card, Tag, TagList, Title } from "../components/ProjectCard";
import { currencyFormatter } from "../currencyFormater";

const WarningMessage = () => (
  <View className="flex flex-row bg-amber-50 px-4 py-2 mb-3 align-middle justify-center rounded">
    <ExclamationCircleIcon color="#F59E0B" size={24} />
    <Text className="ml-5">
      Uma vez iniciado o projeto precisa ser concluido e não poderá ser pausado.
    </Text>
  </View>
);

export const ProjectDetail = ({ route, navigation }) => {
  const { project } = route.params;

  const tagList = [
    {
      id: 1,
      icon: "tree",
      content: `${project.treeAmount} Árvores`,
    },
    {
      id: 2,
      icon: "tag",
      content: currencyFormatter.format(project.fullPrice),
    },
  ];

  const photoList = [
    {
      id: 1,
      name: "Árvore Inteira",
      image: coverImage,
      icon: "SolidTree",
    },
    {
      id: 2,
      name: "Tronco",
      image: coverImage,
      icon: "OutlinedTree",
    },
    {
      id: 3,
      name: "Semente",
      image: coverImage,
      icon: "Seed",
    },
    {
      id: 4,
      name: "Frutos",
      image: coverImage,
      icon: "Fruit",
    },
    {
      id: 5,
      name: "Flores",
      image: coverImage,
      icon: "Flower",
    },
    {
      id: 6,
      name: "Folha",
      image: coverImage,
      icon: "Leaf",
    },
  ];

  const treeList = [
    { name: "#001", photoList },
    { name: "#002", photoList },
    { name: "#003", photoList },
  ];

  return (
    <>
      <StatusBar barStyle="light-content" />
      <ScrollView className="bg-white">
        <Image
          className="flex-initial rounded-t w-full h-36"
          source={coverImage}
          resizeMode="cover"
        />

        <View className="px-6 py-4">
          <Title>
            R. Tomaz Domingos da Silveira, 1820 - São Sebastiao, Palhoça - SC,
            88136-339
          </Title>
          <TagList>
            {tagList.map((tag) => (
              <Tag icon={tag.icon} key={String(tag.content)}>
                {tag.content}
              </Tag>
            ))}
          </TagList>

          <View className="py-4">
            {treeList.map((tree) => (
              <Pressable
                key={tree.id}
                onPress={() => navigation.navigate("TreeDetail", { tree })}
              >
                <Card>
                  <Image
                    className="flex-initial rounded-t w-full"
                    source={coverImage}
                    resizeMode="cover"
                  />
                  <Text>{tree.name}</Text>
                </Card>
              </Pressable>
            ))}
          </View>
        </View>
      </ScrollView>
      <View className="p-6 bg-white justify-center shadow">
        <WarningMessage />
        <Button className="my-1">Iniciar</Button>
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
