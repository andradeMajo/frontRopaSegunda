import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../assets/styles/BottomNavStyles";
export default function BottomNav() {
  const router = useRouter();
  return (
    <View style={styles.container}>
<TouchableOpacity style={styles.item} onPress={() => router.push("/intercambio")}>
  <Image 
    source={require("../assets/images/u.png")}
    style={{ width: 22, height: 31 }}
  />
  <Text style={styles.label}>puntos</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.item} onPress={() => router.push("/chat")}>
  <Image 
    source={require("../assets/images/chat.png")}
    style={{ width: 22, height: 22 }}
  />
  <Text style={styles.label}>Chats</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.item} onPress={() => router.push("/ExploreScreen")}>
  <Image 
    source={require("../assets/images/g.png")}
    style={{ width: 22, height: 22 }}
  />
  <Text style={styles.label}>Inicio</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.item} onPress={() => router.push("/profile")}>
  <Image 
    source={require("../assets/images/s.png")}
    style={{ width: 22, height: 30 }}
  />
  <Text style={styles.label}>Perfil</Text>
</TouchableOpacity>
    </View>
  );
}