import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../assets/styles/styleStoreProfile";
import BottomNav from "../components/BottomNav";
import Header from "../components/Header";
import StarRating from "../components/StarRating";

const COMENTARIOS = [
  {
    id: 1,
    nombre: "Sofia Rodriguez",
    estrellas: 5,
    fecha: "1 sem",
    texto: "Es mi tienda favoritaaaaa de verdad que las prendas q encuentras allá son joyasssss <3 y el espacio es divino para tomarse fotos y parchar con amigos, súper recomendado.",
    avatar: require("../assets/images/avatar1.png"),
  },
];

const EVENTOS = [
  { id: 1, nombre: "Polas y Rolas", fecha: "13 de Mayo", color: "#2102FE" },
  { id: 2, nombre: "Cuchitril Fest", fecha: "2 de Agosto", color: "#FF005E" },
];

const FOTOS = [
  require("../assets/images/lugar.png"),
  require("../assets/images/lugar.png"),
  require("../assets/images/lugar.png"),
  require("../assets/images/lugar.png"),
  require("../assets/images/lugar.png"),
];

const REDES = [
  { icon: "logo-whatsapp", color: "#25D366" },
  { icon: "logo-tiktok", color: "#fff" },
  { icon: "logo-facebook", color: "#1877F2" },
  { icon: "logo-instagram", color: "#E1306C" },
];

export default function StoreProfile() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Header title="" showBack showMenu />

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Cover */}
        <Image
          source={require("../assets/images/lugar.png")}
          style={styles.coverImage}
          resizeMode="cover"
        />

        {/* Info card */}
        <View style={styles.card}>
          <Text style={styles.name}>El Cuchitril</Text>
          <Text style={styles.username}>@El_Cuchitril</Text>

          {/* Stats + Seguir */}
          <View style={styles.statsRow}>
            <View style={styles.statBlock}>
              <Text style={styles.statNumber}>10</Text>
              <Text style={styles.statLabel}>Seguidores</Text>
            </View>
            <TouchableOpacity style={styles.followBtn}>
              <Ionicons name="heart" size={16} color="#fff" />
              <Text style={styles.followText}>Seguir</Text>
            </TouchableOpacity>
          </View>

          {/* Badges */}
          <View style={styles.badges}>
            <View style={styles.badgeBlue}>
              <Text style={styles.badgeRating}>5,0</Text>
              <StarRating value={5} size={13} color="#fff" />
            </View>
            <TouchableOpacity
              style={styles.badgeBlueAlt}
              onPress={() => setActiveTab("comentarios")}
            >
              <Text style={styles.badgeText}>1 Comentario</Text>
            </TouchableOpacity>
          </View>

          {/* Zona + Dirección */}
          <View style={styles.badges}>
            <View style={styles.badgeGreen}>
              <MaterialIcons name="location-on" size={13} color="#fff" />
              <Text style={styles.badgeText}>Zona Norte</Text>
            </View>
            <View style={styles.badgeGreenAlt}>
              <MaterialIcons name="storefront" size={13} color="#fff" />
              <Text style={styles.badgeText}>Calle 117 # 5A - 13</Text>
            </View>
          </View>

          {/* Descripción */}
          <Text style={styles.bio}>
            Tienda de segunda mano ubicada en Usaquén. Ven y descubre tus prendas favoritas
          </Text>
        </View>

        {/* Contenido dinámico */}
        <View style={styles.dynamicContent}>

          {/* FOTOS */}
          <Text style={styles.sectionTitle}>FOTOS</Text>
          <View style={styles.separatorThin} />
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 24 }}>
            <View style={styles.fotosRow}>
              {FOTOS.map((foto, i) => (
                <Image key={i} source={foto} style={styles.fotoItem} resizeMode="cover" />
              ))}
            </View>
          </ScrollView>

          {/* PRÓXIMOS EVENTOS */}
          <Text style={styles.sectionTitle}>PRÓXIMOS EVENTOS</Text>
          <View style={styles.separatorThin} />
          <View style={{ marginBottom: 24, gap: 10, marginTop: 10 }}>
            {EVENTOS.map((ev) => (
              <View key={ev.id} style={[styles.eventoCard, { backgroundColor: ev.color }]}>
                <Text style={styles.eventoNombre}>{ev.nombre}</Text>
                <Text style={styles.eventoFecha}>{ev.fecha}</Text>
              </View>
            ))}
          </View>

          {/* COMENTARIOS */}
          <Text style={styles.sectionTitle}>COMENTARIOS</Text>
          <View style={styles.ratingRow}>
            <StarRating value={5} size={16} />
            <Text style={styles.ratingBig}>5,0</Text>
            <Text style={styles.ratingCount}>1 Comentario</Text>
          </View>
          <View style={styles.separatorThin} />
          {COMENTARIOS.map((c) => (
            <View key={c.id} style={styles.commentItem}>
              <View style={styles.commentHeader}>
                <Image source={c.avatar} style={styles.commentAvatar} resizeMode="cover" />
                <View style={styles.commentMeta}>
                  <View style={styles.commentNameRow}>
                    <Text style={styles.commentName}>{c.nombre}</Text>
                    <Text style={styles.commentFecha}>{c.fecha}</Text>
                  </View>
                  <StarRating value={c.estrellas} size={13} />
                </View>
              </View>
              <Text style={styles.commentText}>{c.texto}</Text>
            </View>
          ))}

          {/* REDES SOCIALES */}
          <Text style={[styles.sectionTitle, { marginTop: 24 }]}>CONTÁCTANOS Y SÍGUENOS EN REDES</Text>
          <View style={styles.separatorThin} />
          <View style={styles.redesRow}>
            {REDES.map((red, i) => (
              <TouchableOpacity key={i} style={styles.redIcon}>
                <Ionicons name={red.icon} size={28} color={red.color} />
              </TouchableOpacity>
            ))}
            <Text style={styles.redesHandle}>@El_Cuchitril</Text>
          </View>

        </View>

        <View style={{ height: 80 }} />
      </ScrollView>

      <BottomNav />
    </SafeAreaView>
  );
}