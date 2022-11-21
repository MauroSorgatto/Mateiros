import { SafeAreaView, ScrollView } from "react-native";
import { ProjectCard } from "../components/ProjectCard";
import { PageTitle } from "../components/Title";

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

export const Project = () => 
    <SafeAreaView>
        <PageTitle>Projetos</PageTitle>
        <ScrollView className="px-6">
            {projectList.map((project, index) => <ProjectCard key={index} project={project} />)}
        </ScrollView>
    </SafeAreaView>
