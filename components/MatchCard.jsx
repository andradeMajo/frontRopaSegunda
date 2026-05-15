import { Image, Text, View } from "react-native";
import styles from "../assets/styles/styleMatchDetail";

export default function MatchCard({ image, title, userName, estado, fecha, horaInicio, horaFin, lugar }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardUser}>{userName}</Text>
      <Text>{estado}</Text>
      <Text>{fecha}</Text>
      <Text>{horaInicio}</Text>
      <Text>{horaFin}</Text>
      <Text>{lugar}</Text>
    </View>
  );
}