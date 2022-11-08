import { Image, ImageBackground, SafeAreaView, Text, View } from 'react-native'
import { Button, GhostButton } from '../components/Button'
import { MateiroIcon } from '../components/MateiroIcon'
import leafBackground from '../../assets/leaf_background.png'
import tree from '../../assets/tree.png'

export const Hello = ({ navigation }) => 
  <SafeAreaView className="flex-1 bg-black">
    <ImageBackground className="flex-1 bg-black" source={leafBackground} resizeMode="cover">
      <View className="flex-1 items-center justify-center mx-6">
        <MateiroIcon />
        <Text className="text-white text-3xl my-1 font-extrabold">Mateiros</Text>
        <Image className="flex-initial w-full" source={tree} resizeMode="contain" />
        <Text className="text-white text-3xl my-1 font-semibold">Olá, seja bem vindo!</Text>
        <Text className="text-white text-base mx-4 mt-1 mb-6">Esta pronto para se tornar um mateiro? crie sua conta e começe agora mesmo!</Text>
        <Button onPress={() => navigation.navigate('CreateAccount')}>Fazer cadastro</Button>
        <GhostButton onPress={() => navigation.navigate('SignIn')} >Já possuo conta!</GhostButton>
      </View>
    </ImageBackground>
  </SafeAreaView>
