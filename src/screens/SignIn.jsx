import { useState } from "react";
import { useRecoilState } from "recoil";
import { KeyboardAvoidingView, SafeAreaView, View } from "react-native";
import { useMutation } from "@tanstack/react-query";

import { Button, GhostButton } from "../components/Button";
import { Input } from "../components/Input";
import { Title } from "../components/Title";
import { userState } from "../state/user";

export const SignIn = () => {
  const [, setUser] = useRecoilState(userState);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { isLoading, mutate } = useMutation({
    mutationFn: () =>
      fetch("https://mateiros-remix-97f1.fly.dev/login", {
        method: "post",
        body: JSON.stringify({ email, password }),
      }),
    onSuccess: async (response) => {
      if (response.status === 200) {
        const data = await response.json();
        setUser({ ...data, token: data.id });
      }

      if (response.status === 400) {
        const data = await response.json();
        console.log(data);
      }
    },
  });

  return (
    <SafeAreaView className="flex-1 justify-between m-6">
      <KeyboardAvoidingView>
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
      <View>
        <Button
          disabled={isLoading || (!email && !password)}
          onPress={() => mutate({ email, password })}
        >
          Login
        </Button>
        <GhostButton>Esqueci minha senha</GhostButton>
      </View>
    </SafeAreaView>
  );
};
