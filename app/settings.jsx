import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../assets/styles/styleSettings";
export default function SettingsScreen() {
  const router = useRouter();
  const Item = ({ icon, text, onPress }) => (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <View style={styles.itemLeft}>
        <Ionicons name={icon} size={20} color="#aaa" />
        <Text style={styles.itemText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      
      {}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Configuracion</Text>
      </View>
      <Text style={styles.section}>Cuenta</Text>
      <Item text="Editar perfil" icon="person-outline" />
      <Item text="Cambiar contraseña" icon="lock-closed-outline" />
      {}
      <Text style={styles.section}>Preferencias</Text>
      <Item text="Notificaciones" icon="notifications-outline" />
      <Item text="Ubicación" icon="location-outline" />
      <Item text="Modo oscuro" icon="moon-outline" />
      <Item text="Historial" icon="time-outline" />
      <Item text="Guardados" icon="bookmark-outline" />
    </View>
  );
}