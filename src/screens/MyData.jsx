import { View, Text, SafeAreaView } from "react-native";
import { useRecoilState } from "recoil";
import { userState } from "../state/user";

export const Mydata = () => {
  const [user] = useRecoilState(userState);
  return (
    <SafeAreaView>
      <View>
        <Text>Primeiro Nome</Text>
        {user.name}
      </View>
      <View>
        <Text>Celular</Text>
        {user.phonenumber}
      </View>
      <View>
        <Text>Email</Text>
        {user.email}
      </View>
    </SafeAreaView>
  );
};
