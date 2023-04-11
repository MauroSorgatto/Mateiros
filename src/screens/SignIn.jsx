import { useState } from "react";
import { useRecoilState } from "recoil";
import {
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { Button, GhostButton } from "../components/Button";
import { Input } from "../components/Input";
import { Title } from "../components/Title";
import { userState } from "../state/user";
import { useCreateUser } from "../server/user";

export const SignIn = ({ navigator }) => {
  const [, setUser] = useRecoilState(userState);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { isLoading, mutate } = useCreateUser({
    onSuccess: (data) => setUser({ ...data, token: data.id }),
    body: JSON.stringify({ email, password }),
  });

  return (
    <SafeAreaView className="flex-1 justify-between m-6">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView className="flex-1">
          <Title>Fazer login</Title>
          <Input
            autoComplete="email"
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <Input
            autoComplete="current-password"
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
          />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <View>
        <Button
          disabled={isLoading || (!email && !password)}
          onPress={() => mutate({ email, password })}
        >
          Login
        </Button>
        <GhostButton onPress={() => navigator.navigate("ForgotPassword")}>
          Esqueci minha senha
        </GhostButton>
      </View>
    </SafeAreaView>
  );
};
