import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../assets/styles/LoginStyles";
import { PasswordField } from "../components/passwordField";
import TextField from "../components/textField";
export default function LoginScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <Image
          source={require("../assets/images/heart 2.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.title}>INICIAR SESIÓN</Text>
      <TextField label="Nombre de usuario" placeholder="diva123" />
      <PasswordField label="Contraseña*" />
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace("/ExploreScreen")}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <View style={styles.separator}>
        <View style={styles.line} />
        <Text style={styles.or}>o</Text>
        <View style={styles.line} />
      </View>
     <TouchableOpacity style={styles.googleButton}>
  <Text style={styles.googleTextTop}>Ingresar con Google</Text>
  <Image
    source={require("../assets/images/Google.png")}
    style={styles.googleIcon}
    resizeMode="contain"
  />
</TouchableOpacity>
      <Text style={styles.footer}>
        ¿Aún no tienes una cuenta?{" "}
        <Text
          style={styles.link}
          onPress={() => router.push("/register")}
        >
          Únete aquí
        </Text>
      </Text>
    </View>
  );
}