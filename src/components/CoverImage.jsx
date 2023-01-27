import { Image, View } from 'react-native'
import coverImage from '../../assets/cover.png'

export const CoverImage = ({ compact }) => <View>
    <Image className={`flex-initial rounded-t w-full ${compact ? 'h-32' : ''}`} source={coverImage} resizeMode="cover" />
    </View>