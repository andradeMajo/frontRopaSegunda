import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../assets/styles/stylePrendas";
import BottomNav from "../components/BottomNav";
import ProductCard from "../components/ProductCard";

const estilosData = [
  { name: "",       img: require("../assets/images/Tab 1.png") },
  { name: "", img: require("../assets/images/Tab 2.png") },
  { name: "",     img: require("../assets/images/Tab 3.png") },
  { name: "",    img: require("../assets/images/Tab 4.png") },
  { name: "",     img: require("../assets/images/Tab 5.png") },
];

const COLECCIONES = [
  { id: 1, label: "Ropa",       img: require("../assets/images/producto.png") },
  { id: 2, label: "Bolsos",     img: require("../assets/images/producto.png") },
  { id: 3, label: "Zapatos",    img: require("../assets/images/producto.png") },
  { id: 4, label: "Accesorios", img: require("../assets/images/producto.png") },
];

const PUBLICACIONES = [
  { id: 1, titulo: "WEIRD-KULT Blusa negra", dueno: "Alejandra Duarte" },
  { id: 2, titulo: "WEIRD-KULT Blusa negra", dueno: "Alejandra Duarte" },
  { id: 3, titulo: "WEIRD-KULT Blusa negra", dueno: "Alejandra Duarte" },
  { id: 4, titulo: "WEIRD-KULT Blusa negra", dueno: "Alejandra Duarte" },
];

export default function PrendasGuardadas() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={22} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Prendas guardadas</Text>
        </View>

        {/* Estilos — scroll horizontal */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.estilosList}
        >
          {estilosData.map((item) => (
            <View key={item.name} style={styles.estiloItem}>
              <Image source={item.img} style={styles.estiloImg} resizeMode="contain" />
              <Text style={styles.estiloName}>{item.name}</Text>
            </View>
          ))}
        </ScrollView>

        <View style={styles.separator} />

       
        <Text style={styles.sectionTitle}>COLECCIONES</Text>
        <View style={styles.coleccionesGrid}>
          {COLECCIONES.map((col) => (
            <TouchableOpacity key={col.id} style={styles.coleccionItem}>
              <Image source={col.img} style={styles.coleccionImg} resizeMode="cover" />
              <View style={styles.coleccionOverlay}>
                <Text style={styles.coleccionLabel}>{col.label}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.separator} />

       
        <Text style={styles.sectionTitle}>PUBLICACIONES</Text>
        <View style={styles.publicacionesGrid}>
          {PUBLICACIONES.map((p) => (
            <View key={p.id} style={{ marginBottom: 12 }}>
              <ProductCard title={p.titulo} author={p.dueno} />
            </View>
          ))}
        </View>

        <View style={{ height: 80 }} />
      </ScrollView>

      <BottomNav />
    </View>
  );
}