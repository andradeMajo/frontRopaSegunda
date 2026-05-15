import { useRouter } from "expo-router";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../assets/styles/styleUploadFlow";
import Header from "../components/Header";
export default function Publication() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ position: "relative" }}>
          <Image
            source={require("../assets/images/producto.png")}
            style={styles.publicationImage}
            resizeMode="cover"
          />
          <View style={styles.publicationCounter}>
            <Text style={styles.publicationCounterText}>
              1/3
            </Text>
          </View>
          <TouchableOpacity style={styles.publicationBookmark}>
            <Ionicons
              name="bookmark"
              size={20}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.publicationContent}>
          <Text style={styles.publicationTitle}>
            Bolso Vivienne Westwood en perfecto
            estado
          </Text>
          <View style={styles.publicationUserRow}>
            <Image
              source={require("../assets/images/producto.png")}
              style={styles.publicationAvatar}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.publicationName}>
                Alejandra Duarte
              </Text>
              <Text style={styles.publicationUser}>
                @Nena4lternativa
              </Text>
            </View>
          </View>
          <View style={styles.badgeRow}>
            <View style={[styles.badge, styles.badgeGray]}>
              <Text style={styles.badgeText}>
                Estilo: Punk
              </Text>
            </View>
            <View style={[styles.badge, styles.badgePink]}>
              <Text style={styles.badgeText}>
                Estado: Casi-nuevo
              </Text>
            </View>
            <View style={[styles.badge, styles.badgeBlue]}>
              <Text style={styles.badgeText}>
                Marca: Vivienne Westwo...
              </Text>
            </View>
            <View style={[styles.badge, styles.badgeGreen]}>
              <Text style={styles.badgeText}>
                Talla: N/A
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => router.push("/chatDetail")}
            style={styles.matchBtn}
          >
            <Text style={styles.matchBtnText}>
              Proponer Match
            </Text>
            <Ionicons
              name="heart"
              size={20}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}