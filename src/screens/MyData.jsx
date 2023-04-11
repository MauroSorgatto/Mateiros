import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from "react-native";
import { useEffect, useState } from "react";
import { Input } from "../components/Input";
import { useUpdateUser } from "../server/user";

export const MyData = ({ route, navigation }) => {
  const { user } = route.params;

  const [name, setName] = useState(user?.name);
  const [phonenumber, setPhonenumber] = useState(user?.phonenumber);
  const [email, setEmail] = useState(user?.email);

  const { isLoading, mutate } = useUpdateUser({
    userId: user.id,
    onSuccess: (data) => console.log("success", data),
    body: {
      name,
      phonenumber,
      email,
    },
  });

  const handleSubmit = () => {
    mutate();
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title="Salvar" onPress={handleSubmit} />,
    });
  }, [name, phonenumber, email]);

  return (
    <SafeAreaView className="flex flex-1 bg-white">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView className="flex-1 p-6">
          <View className="my-2">
            <Text>Nome Completo</Text>
            <Input value={name} onChangeText={setName} />
          </View>
          <View className="my-2">
            <Text>Celular</Text>
            <Input value={phonenumber} onChangeText={setPhonenumber} />
          </View>
          <View className="my-2">
            <Text>Email</Text>
            <Input value={email} onChangeText={setEmail} />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};
