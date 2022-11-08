import { KeyboardAvoidingView, SafeAreaView, View, Text } from "react-native";
import { Button, GhostButton } from "../components/Button";
import { Input } from "../components/Input";

export const SignIn = () => 
    <SafeAreaView className="flex-1 justify-between m-6">
        <KeyboardAvoidingView>
            <Text className="text-center text-2xl mb-4">Fazer login</Text>
            <Input autoComplete="email" placeholder="Email" />
            <Input autoComplete="password-new" placeholder="Senha" />
        </KeyboardAvoidingView>
        <View>
            <Button>Login</Button>
            <GhostButton>Esqueci minha senha</GhostButton>
        </View>
    </SafeAreaView>