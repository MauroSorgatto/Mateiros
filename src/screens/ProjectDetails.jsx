import { Button, GhostButton } from "../components/Button";
import { Image, ScrollView, StatusBar, Text, View } from "react-native";
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
      icon: "tree",
      content: `${project.treeAmount} Árvores`,
    },
    {
      icon: "tag",
      content: currencyFormatter.format(project.fullPrice),
    },
  ];

  const treeList = [{ name: "#001" }, { name: "#002" }, { name: "#003" }];

  return (
    <>
      <StatusBar barStyle="light-content" />

      <ScrollView className="bg-white">
        <Image
          className="flex-initial rounded-t w-full"
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
              <Card>
                <Image
                  className="flex-initial rounded-t w-full"
                  source={coverImage}
                  resizeMode="cover"
                />
                <Text>{tree.name}</Text>
              </Card>
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
