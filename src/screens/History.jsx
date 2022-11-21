import { SafeAreaView, ScrollView } from "react-native";
import { PageTitle } from "../components/Title";
import { CompactProjectCard } from "../components/ProjectCard";

const projectList = [{
    title: 'R. Tomaz Domingos da Silveira, 1820 - São Sebastiao, Palhoça - SC, 88136-339',
    fullPrice: 24,
    address: 'R. Tomaz Domingos da Silveira, 1820 - São Sebastiao, Palhoça - SC, 88136-339',
    treeAmount: 5,
},{
    title: 'Ponta de Baixo, São José - SC, 88104-000',
    fullPrice: 165,
    address: 'Ponta de Baixo, São José - SC, 88104-000',
    treeAmount: 34,
}]

export const History = () => 
    <SafeAreaView>
        <PageTitle>Histórico</PageTitle>
        <ScrollView className="px-6">
            {projectList.map((project, index) => <CompactProjectCard key={index} project={project} />)}
        </ScrollView>
    </SafeAreaView>
