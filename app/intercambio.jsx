import { useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import styles from "../assets/styles/styleExplore";
import BottomNav from "../components/BottomNav";
import Header from "../components/Header";
import PlaceCard from "../components/PlaceCard";
export default function ExploreScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Header
        title="Puntos"
        showBack={true}
        showMenu={false}
      />
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.headerAlt}>
          <Text style={styles.mainTitle}>
            PUNTOS DE INTERCAMBIO
          </Text>
          <Text style={styles.mainDescription}>
            Pilla estos lugares y elige el mejor para realizar ahi tu intercambio, o simplemente para ir a parchar y darse una vuelta
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Zona Norte</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.horizontalList}>
              <PlaceCard />
              <PlaceCard />
              <PlaceCard />
              <PlaceCard />
            </View>
          </ScrollView>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Zona Oriente</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.horizontalList}>
              <PlaceCard />
              <PlaceCard />
            </View>
          </ScrollView>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Zona Occidente</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.horizontalList}>
              <PlaceCard />
              <PlaceCard />
            </View>
          </ScrollView>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Zona Sur</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.horizontalList}>
              <PlaceCard />
              <PlaceCard />
            </View>
          </ScrollView>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Zona Centro</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.horizontalList}>
              <PlaceCard />
              <PlaceCard />
            </View>
          </ScrollView>
        </View>
      </ScrollView>
      <BottomNav />
    </View>
  );
}