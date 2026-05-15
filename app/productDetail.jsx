import { useLocalSearchParams } from "expo-router";
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

export default function ProductDetail() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const {
    nombre,
    autor,
    imagen,
    fotoPerfil,

    categoria,
    material,
    estado,
    talla,

    descripcion,
  } = useLocalSearchParams();

  // IMAGENES PRODUCTO
  const IMAGENES = imagen
    ? [{ uri: imagen }]
    : [require("../assets/images/producto6.png")];

  // SECCIONES
  const SECCIONES = [
    {
      id: 1,
      titulo: "Descripción",
      icono: require("../assets/images/descri.png"),
      texto: descripcion || "Sin descripción",
    },
  ];

  // CAMBIO CARRUSEL
  const onScroll = (e) => {
    const index = Math.round(
      e.nativeEvent.contentOffset.x / width
    );

    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <Header showBack title="" />

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* CARRUSEL */}
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

          {/* CONTADOR */}
          <View style={styles.counter}>
            <Text style={styles.counterText}>
              {currentIndex + 1}/{IMAGENES.length}
            </Text>
          </View>

          {/* BOOKMARK */}
          <TouchableOpacity style={styles.bookmark}>
            <Image
              source={require("../assets/images/guard.png")}
              style={{ width: 16, height: 16 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        {/* INFO */}
        <View style={styles.infoContainer}>

          {/* TITULO */}
          <Text style={styles.productTitle}>
            {nombre || "Producto"}
          </Text>

          {/* USUARIO */}
          <View style={styles.userRow}>

            <Image
              source={
                fotoPerfil
                  ? { uri: fotoPerfil }
                  : require("../assets/images/cara.png")
              }
              style={styles.avatar}
              resizeMode="cover"
            />

            <View>
              <Text style={styles.userName}>
                {autor || "Usuario"}
              </Text>

              <Text style={styles.userHandle}>
                @thriftmatch
              </Text>
            </View>
          </View>

          {/* TAGS */}
          <View style={styles.tagsRow}>
            <View style={styles.tagGray}>
              <Text style={styles.tagText}>
                Categoría: {categoria || "No disponible"}
              </Text>
            </View>

            <View style={styles.tagPink}>
              <Text style={styles.tagText}>
                Estado: {estado || "No disponible"}
              </Text>
            </View>
          </View>

          <View style={styles.tagsRow}>
            <View style={styles.tagBlue}>
              <Text style={styles.tagText}>
                Material: {material || "No disponible"}
              </Text>
            </View>

            <View style={styles.tagTeal}>
              <Text style={styles.tagText}>
                Talla: {talla || "No disponible"}
              </Text>
            </View>
          </View>

          <View style={styles.separator} />

          {/* DESCRIPCIÓN */}
          {SECCIONES.map((s) => (
            <View key={s.id}>
              <View style={styles.seccionBtn}>
                <Text style={styles.seccionBtnText}>
                  {s.titulo}
                </Text>

                <Image
                  source={s.icono}
                  style={{
                    width: 18,
                    height: 18,
                    marginLeft: 8,
                  }}
                  resizeMode="contain"
                />
              </View>

              <Text style={styles.seccionTexto}>
                {s.texto}
              </Text>
            </View>
          ))}

          <View style={{ height: 80 }} />
        </View>
      </ScrollView>
    </View>
  );
}