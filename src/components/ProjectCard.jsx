import { Image, Text, View } from "react-native";
import { Button, GhostButton } from './Button'

import coverImage from '../../assets/cover.png'

const currentFormatter = Intl.NumberFormat('pt-br', { currency: 'BRL', minimumFractionDigits: 2 });

const ProgressBar = ({props, children}) => <View></View>
const CoverImage = () => <Image className="flex-initial rounded-t w-full" source={coverImage} resizeMode="cover" />
export const Title = ({props, children}) => <Text className="font-inter-600 text-black text-base mb-4" {...props} >{children}</Text>
export const TagList = ({props, children}) => <View className="flex flex-row align-middle border-t border-gray-100 py-4" {...props}>{children}</View>
export const Tag = ({props, children}) => <View className="border rounded border-gray-200 m-1 px-1 py-2" {...props} ><Text>{children}</Text></View>

const Card = ({children}) => {
    return <View className="rounded border border-gray-100 bg-white w-full drop-shadow mb-2">{children}</View>
}

export const ProjectCard = ({ project }) => {
    const tagList = [`${project.treeAmount} Árvores`, currentFormatter.format(project.fullPrice)]

    return ( 
        <Card>
            <CoverImage />
            <ProgressBar />
            <View className="p-4">

                <Title>{project.address}</Title>
                <TagList>
                    {tagList.map(tag => <Tag key={String(tag)}>{tag}</Tag>)}
                </TagList>

                <View className="flex flex-row border-t border-gray-100 py-4">
                    <Button>Aceitar</Button>
                    <GhostButton>Recusar</GhostButton>
                </View>
            </View>
        </Card>
        )
}
