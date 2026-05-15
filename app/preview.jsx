import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../assets/styles/styleProductDetail";
import Header from "../components/Header";

const { width } = Dimensions.get("window");

const IMAGENES = [
  require("../assets/images/producto6.png"),
  require("../assets/images/producto7.png"),
  require("../assets/images/producto8.png"),
];

const SECCIONES = [
  {
    id: 1,
    titulo: "Descripción",
    icono: require("../assets/images/descri.png"),
    texto: "Está en perfecto estado, tiene destellos de rojo oscuro y es súper suavecita.",
  },
  {
    id: 2,
    titulo: "Match ideal",
    icono: require("../assets/images/cos.png"),
    texto: "Busco principalmente botas o bolsos.",
  },
  {
    id: 3,
    titulo: "Medidas",
    icono: require("../assets/images/med.png"),
    texto: "Alto: 110cm\nAncho: 70cm",
  },
  {
    id: 4,
    titulo: "Especificaciones",
    icono: require("../assets/images/espend.png"),
    texto: "Cuenta con un bolsillo interno y forro color rojo oscuro. Es Oversized.",
  },
];

export default function preview() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  const onScroll = (e) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <Header showBack title="" />

      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.imageContainer}>
          <FlatList
            data={IMAGENES}
            keyExtractor={(_, i) => String(i)}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={onScroll}
            scrollEventThrottle={16}
            renderItem={({ item }) => (
              <Image
                source={item}
                style={[styles.productImage, { width }]}
                resizeMode="cover"
              />
            )}
          />
          <View style={styles.counter}>
            <Text style={styles.counterText}>
              {currentIndex + 1}/{IMAGENES.length}
            </Text>
          </View>
          <TouchableOpacity style={styles.bookmark}>
            <Image
              source={require("../assets/images/guard.png")}
              style={{ width: 16, height: 16 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.infoContainer}>

          <Text style={styles.productTitle}>Chaqueta Roja con peluche talla M</Text>

          <View style={styles.userRow}>
            <Image
              source={require("../assets/images/cara.png")}
              style={styles.avatar}
              resizeMode="cover"
            />
            <View>
              <Text style={styles.userName}>Diana Valderrama</Text>
              <Text style={styles.userHandle}>@Diva123</Text>
            </View>
          </View>

          <View style={styles.tagsRow}>
            <View style={styles.tagGray}>
              <Text style={styles.tagText}>Estilo: Alterno</Text>
            </View>
            <View style={styles.tagPink}>
              <Text style={styles.tagText}>Estado: Casi-nuevo</Text>
            </View>
          </View>
          <View style={styles.tagsRow}>
            <View style={styles.tagBlue}>
              <Text style={styles.tagText}>Marca: Genérica</Text>
            </View>
            <View style={styles.tagTeal}>
              <Text style={styles.tagText}>Talla: M</Text>
            </View>
          </View>
          <View style={styles.tagsRow}>
            <View style={styles.tagBlue}>
              <Text style={styles.tagText}>Tipo de Prenda: Chaqueta</Text>
            </View>
          </View>

          <View style={styles.separator} />

          {SECCIONES.map((s) => (
            <View key={s.id}>
              <View style={styles.seccionBtn}>
                <Text style={styles.seccionBtnText}>{s.titulo}</Text>
                <Image
                  source={s.icono}
                  style={{ width: 18, height: 18, marginLeft: 8 }}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.seccionTexto}>{s.texto}</Text>
            </View>
          ))}

        </View>

        <TouchableOpacity
          style={styles.confirmBtn}
          onPress={() => router.push("/uploadSuccess")}
        >
          <Text style={styles.confirmBtnText}>Confirmar</Text>
        </TouchableOpacity>

        <View style={{ height: 60 }} />
      </ScrollView>
    </View>
  );
}