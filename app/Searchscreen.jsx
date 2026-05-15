import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { searchStyles as styles } from "../assets/styles/Searchscreenstyles";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

// Mock data — reemplaza con tu fetch real
const MOCK_PRODUCTS = [
  { id: "1", title: "Bolso Vivienne Westwood en perfe...", author: "Alejandra Duarte" },
  { id: "2", title: "WEIRD·KULT Blusa negra", author: "Alejandra Duarte" },
  { id: "3", title: "Vestido vintage floral", author: "Alejandra Duarte" },
  { id: "4", title: "Chaqueta oversized negra", author: "Alejandra Duarte" },
  { id: "5", title: "Falda midi satinada", author: "Alejandra Duarte" },
  { id: "6", title: "Top de encaje blanco", author: "Alejandra Duarte" },
];

export default function SearchScreen() {
  const router = useRouter();

  const renderItem = ({ item }) => (
    <ProductCard
      title={item.title}
      author={item.author}
      onVerPrenda={() => router.push("/productDetail")}
      onMatch={() => router.push("/chatDetail")}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header
        title="Búsqueda"
        showBack
        showMenu
      />

      {/* Search Bar */}
      <TouchableOpacity
        style={styles.searchBar}
        activeOpacity={0.8}
        onPress={() => router.push("/Searchscreen")}
      >
        <Ionicons name="search" size={18} color="#888" />
        <Text style={styles.searchText}>Encuentra tu joya ideal</Text>
        <TouchableOpacity onPress={() => router.push("/FilterScreen")}>
          <Ionicons name="options-outline" size={20} color="#fff" />
        </TouchableOpacity>
      </TouchableOpacity>

      {/* Results count */}
      <View style={styles.resultsHeader}>
        <Text style={styles.resultsTitle}>
          Resultados ({MOCK_PRODUCTS.length})
        </Text>
      </View>

      {/* Product Grid */}
      <FlatList
        data={MOCK_PRODUCTS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.grid}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}