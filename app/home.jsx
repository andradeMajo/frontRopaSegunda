import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import styles from "../assets/styles/styleHome";
import BottomNav from "../components/BottomNav";
import PlaceCard from "../components/PlaceCard";

const ZONAS = ["ZONA NORTE", "ZONA ORIENTE", "ZONA OCCIDENTE", "ZONA SUR", "ZONA CENTER"];

export default function PuntosScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>

        <View style={styles.header}>
          <Ionicons
            name="chevron-back"
            size={22}
            color="#fff"
            onPress={() => router.back()}
          />
          <Text style={styles.headerTitle}>Puntos</Text>
        </View>

        <View style={styles.titleBlock}>
          <Text style={styles.title}>PUNTOS DE INTERCAMBIO</Text>
          <Text style={styles.subtitle}>
            Pilla estos lugares y elige el mejor para realizar
            ahí tu intercambio, o simplemente para ir a
            parchar y darse una vuelta
          </Text>
        </View>

        {ZONAS.map((zona) => (
          <View key={zona} style={styles.zonaSection}>
            <Text style={styles.zonaLabel}>{zona}</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.carousel}
            >
              <PlaceCard compact />
              <PlaceCard compact />
              <PlaceCard compact />
            </ScrollView>
            <View style={styles.divider} />
          </View>
        ))}

      </ScrollView>
      <BottomNav />
    </View>
  );
}