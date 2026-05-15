import { useRouter } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import register from "../assets/styles/RegisterStyles";
import Botones from "../components/botones";
import Header from "../components/Header";
import { PasswordField } from "../components/passwordField";
import TextField from "../components/textField";

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleRegister() {
    router.replace("/RegisterDataus");
  }

  return (
    <KeyboardAvoidingView
      style={register.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Header showBack={true} title="" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={register.scrollContent}
      >
        <Text style={register.title}>REGÍSTRATE</Text>
        <Text style={register.subtitle}>
          Y encuentra la joyita de tus sueños y gente con mucho flow
        </Text>

        <TextField
          label="Nombres y apellidos*"
          value={name}
          onChangeText={setName}
        />
        <TextField
          label="Nombre de usuario*"
          value={username}
          onChangeText={setUsername}
        />
        <TextField
          label="Correo electrónico*"
          value={email}
          onChangeText={setEmail}
        />
        <PasswordField
          label="Contraseña*"
          value={password}
          onChangeText={setPassword}
        />
        <PasswordField
          label="Confirma tu contraseña*"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <View style={{ height: 100 }} />
      </ScrollView>
¿
      <View style={register.bottomBar}>
        <Botones
          styleBoton={register.button}
          botonText="Continuar"
          styleTextBoton={register.buttonText}
          onPress={handleRegister}
        />
      </View>
    </KeyboardAvoidingView>
  );
}