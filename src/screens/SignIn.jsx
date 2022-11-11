import { KeyboardAvoidingView, SafeAreaView, View, Text } from "react-native";
import { Button, GhostButton } from "../components/Button";
import { Input } from "../components/Input";
import { Title } from "../components/Title";

export const SignIn = () => 
    <SafeAreaView className="flex-1 justify-between m-6">
        <KeyboardAvoidingView>
            <Title>Fazer login</Title>
            <Input autoComplete="email" placeholder="Email" />
            <Input autoComplete="password-new" placeholder="Senha" />
        </KeyboardAvoidingView>
        <View>
            <Button>Login</Button>
            <GhostButton>Esqueci minha senha</GhostButton>
        </View>
    </SafeAreaView>
