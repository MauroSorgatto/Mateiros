import { KeyboardAvoidingView, Text, SafeAreaView } from "react-native";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export const CreateAccount = () => 
    <SafeAreaView className="flex-1 justify-between m-6">
        <KeyboardAvoidingView>
            <Text className="text-center text-2xl mb-4">Criar conta</Text>
            <Input autoComplete="name" placeholder="Seu nome" />
            <Input autoComplete="email" placeholder="Email" />
            <Input autoComplete="tel" placeholder="Telefone" />
            <Input autoComplete="password-new" placeholder="Senha" />
            <Input autoComplete="password-new" placeholder="Confirma sua senha" />
        </KeyboardAvoidingView>
        <Button>Fazer Cadastro</Button>
    </SafeAreaView>