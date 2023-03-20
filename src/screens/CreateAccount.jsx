import { KeyboardAvoidingView, SafeAreaView } from "react-native";
import { useRecoilState } from "recoil";

import { userState } from "../state/user";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Title } from "../components/Title";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

export const CreateAccount = () => {
  const [user, setUser] = useRecoilState(userState);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phonenumber, setPhonenumber] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const { isLoading, mutate } = useMutation({
    mutationFn: () =>
      fetch("https://mateiros-remix-97f1.fly.dev/join", {
        method: "post",
        body: JSON.stringify({ name, phonenumber, email, password }),
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

  const isFormValid =
    name && email && phonenumber && password && password === confirmPassword;

  return (
    <SafeAreaView className="flex-1 justify-between m-6">
      <KeyboardAvoidingView>
        <Title>Criar conta</Title>
        <Input
          autoComplete="name"
          placeholder="Seu nome"
          value={name}
          onChangeText={setName}
        />
        <Input
          autoComplete="email"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          autoComplete="tel"
          placeholder="Telefone"
          value={phonenumber}
          onChangeText={setPhonenumber}
        />
        <Input
          autoComplete="password-new"
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
        />
        <Input
          autoComplete="password-new"
          placeholder="Confirma sua senha"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </KeyboardAvoidingView>
      <Button disabled={!isFormValid || isLoading} onPress={() => mutate()}>
        Fazer Cadastro
      </Button>
    </SafeAreaView>
  );
};
