import { useRouter } from "expo-router";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
export default function FloatingButton() {
  const router = useRouter();
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={() => router.push("/upload")} 
    >
      <Image
        source={require("../assets/images/Logos.png")}
        style={styles.image}
      />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 85,
    right: 15,
    zIndex: 50,
  },
  image: {
    width: 90,
    height: 90,
    resizeMode: "contain",
  },
});