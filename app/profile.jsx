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
import styles from "../assets/styles/styleProfile";
import BottomNav from "../components/BottomNav";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import StarRating from "../components/StarRating";

const COMENTARIOS = [
  {
    id: 1,
    nombre: "Sofia Rodriguez",
    estrellas: 5,
    fecha: "1 sem",
    texto: "Intercambie con Aleja un vestido vintage de encaje y pude descubrir mi nueva tienda de segunda favorita gracias a ella. Super recomendada.",
    avatar: require("../assets/images/avatar1.png"),
  },
  {
    id: 2,
    nombre: "Daniel Mejía",
    estrellas: 4,
    fecha: "1 sem",
    texto: "ella fue re amable y todo salió re bien.. No le doy 5 estrellas pq solo Dios es perfecto pero igual la recomiendo",
    avatar: require("../assets/images/avatar1.png"),
  },
  {
    id: 3,
    nombre: "Yessy Mercado",
    estrellas: 5,
    fecha: "1 sem",
    texto: "Super bonita la experiencia. Fue mi primer match y estaba nerviosa pero Aleja fue muy linda y el intercambio salió muy bien <3",
    avatar: require("../assets/images/avatar1.png"),
  },
  {
    id: 4,
    nombre: "Juanse González",
    estrellas: 4,
    fecha: "1 sem",
    texto: "Graciassss Aleja, todo salió muy bien solo que ella sin querer llegó un poco tarde por un trancón, son cosas que hay q tener en cuenta.",
    avatar: require("../assets/images/avatar1.png"),
  },
];

const PRENDAS = [
  {
    id: 1,
    titulo: "WEIRD-KULT Blusa negra",
    dueno: "Alejandra Duarte",
    imagen: require("../assets/images/producto.png"),
  },
  {
    id: 2,
    titulo: "WEIRD-KULT Blusa negra",
    dueno: "Alejandra Duarte",
    imagen: require("../assets/images/producto.png"),
  },
];

export default function ProfileScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(null);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
    <Header title="Tu perfil" showBack titleColor="#fff" />

      <ScrollView showsVerticalScrollIndicator={false}>

      
        <View style={{ height: 300 }}>
          <Image
            source={require("../assets/images/fo.png")}
            style={styles.coverImage}
            resizeMode="cover"
          />
          <View style={styles.avatarContainer}>
            <Image
              source={require("../assets/images/cara.png")}
              style={styles.avatar}
              resizeMode="cover"
            />
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.name}>DIANA VALDERRAMA</Text>
          <Text style={styles.username}>@Diva123</Text>

          <View style={styles.stats}>
            <TouchableOpacity
              style={styles.statBlock}
              onPress={() => router.push("/FollowListScreen?type=siguiendo")}
            >
              <Text style={styles.statNumber}>10</Text>
              <Text style={styles.statLabel}>Siguiendo</Text>
            </TouchableOpacity>
            <View style={styles.divider} />
            <TouchableOpacity
              style={styles.statBlock}
              onPress={() => router.push("/FollowListScreen?type=seguidores")}
            >
              <Text style={styles.statNumber}>10</Text>
              <Text style={styles.statLabel}>Seguidores</Text>
            </TouchableOpacity>
          </View>

       
          <View style={styles.badges}>
            <View style={styles.badgeBlue}>
              <Text style={styles.badgeRating}>5,0</Text>
             <StarRating value={5} size={13} color="#ffffff" />
            </View>
            <View style={styles.badgeGreen}>
              <MaterialIcons name="location-on" size={13} color="#fff" />
              <Text style={styles.badgeText}>Zona Sur</Text>
            </View>
          </View>

          <View style={styles.actions}>
            <TouchableOpacity
              style={[
                styles.actionBlue,
                activeTab === "comentarios" && styles.actionBlueActive,
              ]}
              onPress={() => setActiveTab("comentarios")}
            >
              <Text style={styles.actionText}>1 Comentario</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.actionPink,
                activeTab === "prendas" && styles.actionPinkActive,
              ]}
              onPress={() => setActiveTab("prendas")}
            >
              <Text style={styles.actionText}>5 Prendas disponibles</Text>
            </TouchableOpacity>
          </View>

      
          {activeTab === null && (
            <>
              <Text style={styles.bio}>
                Hola! soy Diana. Me interesa la moda punk y alternativa y amo el color rojo.
              </Text>

              <TouchableOpacity
                style={styles.editBtn}
                onPress={() => router.push("/editProfile")}
              >
     <Ionicons name="pencil-outline" size={18} color="#fff" />
                <Text style={styles.editText}>Editar mi perfil</Text>
              </TouchableOpacity>

           <View style={styles.separator} />
<TouchableOpacity style={styles.sectionRow} onPress={() => router.push("/prendasGuardadas")}>
  <Text style={styles.sectionRowText}>Prendas guardadas</Text>
</TouchableOpacity>
              <View style={styles.separator} />
              <TouchableOpacity style={styles.sectionRow}>
                
                <TouchableOpacity style={styles.sectionRow} onPress={() => router.push("/closet")}>
  <Text style={styles.sectionRowText}>Prepara tu prenda</Text>
</TouchableOpacity>
              </TouchableOpacity>
              <View style={styles.separator} />
            </>
          )}

        </View>
       
        <View style={styles.dynamicContent}>
          {activeTab === "comentarios" && (
            <View>
              <Text style={styles.sectionTitle}>COMENTARIOS</Text>
              <View style={styles.ratingRow}>
                <StarRating value={5} size={16} />
                <Text style={styles.ratingBig}>4,8</Text>
                <Text style={styles.ratingCount}>5 Comentarios</Text>
              </View>
              <View style={styles.separatorThin} />
              {COMENTARIOS.map((c) => (
                <View key={c.id} style={styles.commentItem}>
                  <View style={styles.commentHeader}>
                    <Image
                      source={c.avatar}
                      style={styles.commentAvatar}
                      resizeMode="cover"
                    />
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
            </View>
          )}

          {activeTab === "prendas" && (
            <View>
              <Text style={styles.sectionTitle}>PRENDAS DISPONIBLES</Text>
              <View style={styles.grid}>
                {PRENDAS.map((p) => (
                  <View key={p.id} style={{ width: "47%", marginBottom: 12 }}>
                    <ProductCard title={p.titulo} author={p.dueno} />
                  </View>
                ))}
              </View>
            </View>
          )}
        </View>
   

        <View style={{ height: 80 }} />
      </ScrollView>

      <BottomNav />
    </View>
  );
}