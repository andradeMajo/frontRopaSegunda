import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, Image, Text, View } from "react-native";
const { width } = Dimensions.get("window");
const phrases = [
  "Mor, con ese flow hasta lo usado se ve nuevo",
  "Una pinta fina, hace que cualquier parche se ponga bueno ¿sí o qué?",
  "Parce, usted hace que lo de segunda se vea de primera",
  "Esa vibra suya levanta cualquier outfit",
  "¡Ish! Con ese estilo, ni el frío de Bogotá le baja el flow que se carga",
];
const gradients = [
  ["#3A7BFF", "#2D6CDF"],
  ["#2d36ac", "#1e28ad"],
  ["#da258e", "#d3279f"],
  ["#5e5e5e", "#666666"],
  ["#A78BFA", "#7C3AED"],
];
export default function PhraseStack() {
  const randomIndex = Math.floor(Math.random() * phrases.length);
  return (
    <View style={{ marginTop: 10, paddingHorizontal: 16 }}>
      <LinearGradient
        colors={gradients[randomIndex % gradients.length]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.card}
      >
        <Image
          source={require("../assets/images/heart 2.png")}
          style={styles.backgroundIcon}
        />
        <Text style={styles.text} numberOfLines={2}>
          {phrases[randomIndex]}
        </Text>
      </LinearGradient>
    </View>
  );
}
const styles = {
  card: {
    width: "100%",
    height: 90, 
    paddingHorizontal: 14,
    borderRadius: 12,
    justifyContent: "center",
    opacity: 0.9,
    shadowColor: "#144297",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
    overflow: "hidden",
  },
  backgroundIcon: {
    position: "absolute",
    right: 290,
    top: 4,
    width: 95,
    height: 85,
    opacity: 0.21,
    resizeMode: "contain",
  },
  text: {
    color: "#fff",
    fontSize: 15,
    lineHeight: 18,
  },
};