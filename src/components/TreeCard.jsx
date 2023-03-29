import { View, Text, Image } from "react-native";




export const CaixinhaBranca = ({image, icon, name}) => 
    <View className=" h-52 w-44 bg-white rounded ml-6 mt-6 justify-end p-2 overflow-hidden ">
        <View>
        <Image source={image} className="w-full h-full"
        resizeMode="cover"/>
        </View>
        <View className="flex flex-row py-1 bg-white" >
            {icon}
            <Text className="font-inter-800 pl-2 ">{name}</Text>
        </View>
    </View>;


