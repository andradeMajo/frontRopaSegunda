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
import styles from "../assets/styles/styleTips";
import Header from "../components/Header";

const { width } = Dimensions.get("window");

const IMAGENES = [
  require("../assets/images/producto3.png"),
  require("../assets/images/producto4.png"),
  require("../assets/images/producto5.png"),
];

const CUIDADOS = [
  { id: 1, label: "Lavado: No lavar",    image: require("../assets/images/cuidado.png") },
  { id: 2, label: "Secado: No secado",   image: require("../assets/images/cuidado2.png") },
  { id: 3, label: "Plancha: No plancha", image: require("../assets/images/cuidado3.png") },
];

const SECCIONES = [
  {
    id: 1,
    titulo: "Identifica el tipo de piel",
    texto: "Existen diferentes tipos de piel, cada uno con sus propias características y necesidades de cuidado.",
  },
  {
    id: 2,
    titulo: "Acondicionamiento",
    texto: "Es importante aplicar un producto acondicionador para mantener la flexibilidad y la hidratación.",
  },
  {
    id: 3,
    titulo: "Almacenamiento",
    texto: "Guarda tu chaqueta en un lugar fresco y seco, en una percha grande y así mantener la circulación del aire.",
  },
  {
    id: 4,
    titulo: "Especificaciones",
    texto: "Es espacioso y cuenta con dos bolsillos internos, forro color beige, las asas son de cuero vegano y la tela es tipo lona, el color está intacto.",
    icono: true,
  },
];

export default function TipsChimbas() {
  const [activeCuidado, setActiveCuidado] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCuidado = (id) => {
    setActiveCuidado(prev => prev === id ? null : id);
  };

  const onScroll = (e) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <Header showBack={true} title="" />

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Carrusel de imágenes */}
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
  style={[styles.productImage, { width }]}  // ← agrega el width acá
  resizeMode="cover"
/>
            )}
          />

          {/* Contador dinámico */}
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

          <Text style={styles.productTitle}>Lether jacket café talla L</Text>

          <View style={styles.userRow}>
            <Image
              source={require("../assets/images/user.jpg")}
              style={styles.avatar}
              resizeMode="cover"
            />
            <View>
              <Text style={styles.userName}>Alejandra Duarte</Text>
              <Text style={styles.userHandle}>@Nena4lternativa</Text>
            </View>
          </View>

          <View style={styles.tagsRow}>
            <View style={styles.tagGray}>
              <Text style={styles.tagText}>Estilo: Punk</Text>
            </View>
            <View style={styles.tagPink}>
              <Text style={styles.tagText}>Estado: Casi-nuevo</Text>
            </View>
          </View>
          <View style={styles.tagsRow}>
            <View style={styles.tagBlue}>
              <Text style={styles.tagText}>Marca: RQA</Text>
            </View>
            <View style={styles.tagTeal}>
              <Text style={styles.tagText}>Talla: L</Text>
            </View>
          </View>

          <View style={styles.separator} />

          <Text style={styles.sectionLabel}>Cuidado rapido</Text>

          <View style={styles.iconosRow}>
            {CUIDADOS.map((c) => {
              const isActive = activeCuidado === c.id;
              return (
                <TouchableOpacity
                  key={c.id}
                  onPress={() => handleCuidado(c.id)}
                  style={isActive ? styles.iconBoxActive : styles.iconBox}
                  activeOpacity={0.8}
                >
                  <Image
                    source={c.image}
                    style={styles.iconImg}
                    resizeMode="contain"
                  />
                  {isActive && (
                    <Text
                      style={styles.iconLabel}
                      numberOfLines={1}
                      adjustsFontSizeToFit
                    >
                      {c.label}
                    </Text>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>

          {SECCIONES.map((s) => (
            <View key={s.id}>
              <View style={styles.seccionBtn}>
                <Text style={styles.seccionBtnText}>{s.titulo}</Text>
                {s.icono && (
                  <Image
                    source={require("../assets/images/esp.png")}
                    style={{ width: 18, height: 18, marginLeft: 8 }}
                    resizeMode="contain"
                  />
                )}
              </View>
              <Text style={styles.seccionTexto}>{s.texto}</Text>
            </View>
          ))}

        </View>

        <View style={{ height: 60 }} />
      </ScrollView>
    </View>
  );
}