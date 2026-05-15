import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../assets/styles/styleSellerProfile";
import ProductCard from "../components/ProductCard";

const COMMENTS = [
  { name: "Sofia Rodriguez", stars: 5, text: "Intercambie con Aleja un vestido vintage de encaje y pude descubrir mi nueva tienda de segunda favorita gracias a ella. Super recomendada." },
  { name: "Daniel Mejía", stars: 4, text: "ella fue re amable y todo salio re bien.. No le doy 5 estrellas pq solo Dios es  perfecto pero igual la recomiendo" },
  { name: "Yessy Mercado", stars: 5, text: "Super bonita la experiencia. Fue mi primer match y estaba nerviosa pero Aleja fue muy linda y el intercambio salió muy bien <3" },
  { name: "Juanse González", stars: 4, text: "Graciassss Aleja, todo salió muy bien solo que ella sin querer llegó un poco tarde por un trancón, son cosas que hay q tener en cuenta pero amé mi nueva falda" },
  { name: "Saray Mesa", stars: 5, text: "muy lindo todo. Recomendada." },
];

const StarRating = ({ count = 5 }) => (
  <View style={styles.starsRow}>
    {[1,2,3,4,5].map(i => (
      <Ionicons key={i} name="star" size={16} color={i <= count ? "#257CFF" : "#1352B2"} />
    ))}
  </View>
);

export default function SellerProfileScreen() {
  const [activeTab, setActiveTab] = useState("comentarios");
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <ScrollView contentContainerStyle={{ paddingTop: 0 }}></ScrollView>
    
        <View style={styles.cover}>
          <Image
            source={require("../assets/images/bg3.png")}
            style={styles.coverImage}
            resizeMode="cover"
          />
          <Image
            source={require("../assets/images/userg.png")}
            style={styles.avatar}
            resizeMode="cover"
          />
        </View>

        {/* Info */}
        <View style={styles.info}>
          <Text style={styles.name}>ALEJANDRA DUARTE</Text>
          <Text style={styles.username}>@Nena4lternativa</Text>

          <View style={styles.stats}>
            <TouchableOpacity
              style={styles.statBlock}
              onPress={() => router.push({ pathname: "/FollowListScreen", params: { type: "siguiendo" } })}
            >
              <View style={styles.statInline}>
                <Text style={styles.statNumber}>10</Text>
                <Text style={styles.statLabel}>Siguiendo</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.statDivider} />

            <TouchableOpacity
              style={styles.statBlock}
              onPress={() => router.push({ pathname: "/FollowListScreen", params: { type: "seguidores" } })}
            >
              <View style={styles.statInline}>
                <Text style={styles.statNumber}>10</Text>
                <Text style={styles.statLabel}>Seguidores</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.followBtn}>
              <Ionicons name="heart" size={14} color="#fff" />
              <Text style={styles.followText}>Seguir</Text>
            </TouchableOpacity>
          </View>
        </View>

     
        <View style={styles.actions}>
          <Text style={styles.badgeBlue}>4,8 ★★★★★</Text>
  <View style={styles.badgeGreen}>
  <Image
    source={require("../assets/images/ubicacion.png")}
    style={{ width: 26, height: 26 }}
  />
  <Text style={{ color: "#fff", fontWeight: "700", fontSize: 14 }}>
    Zona Norte
  </Text>
</View>
        </View>

        {/* Tabs */}
        <View style={styles.actions}>
          <TouchableOpacity
            style={[styles.tabBtn, styles.tabBtnPurple, activeTab === "comentarios" && styles.tabActive]}
            onPress={() => setActiveTab("comentarios")}
          >
            <Text style={styles.tabBtnText}>5 Comentarios</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabBtn, styles.tabBtnPink, activeTab === "prendas" && styles.tabActive]}
            onPress={() => setActiveTab("prendas")}
          >
            <Text style={styles.tabBtnText}>5 Prendas disponibles</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>

          {activeTab === "prendas" && (
            <View>
              <Text style={styles.sectionTitle}>PRENDAS DISPONIBLES</Text>
              <View style={styles.grid}>
                {[1, 2, 3, 4].map((_, i) => (
                  <View key={i} style={styles.gridCard}>
                    <ProductCard />
                  </View>
                ))}
              </View>
            </View>
          )}

          {activeTab === "comentarios" && (
            <View>
              <View style={styles.commentsHeader}>
                <Text style={styles.sectionTitle}>COMENTARIOS</Text>
                <View style={styles.ratingRow}>
                  <Text style={styles.rating}>★ 4,8</Text>
                  <Text style={styles.total}>5 Comentarios</Text>
                </View>
              </View>
              {COMMENTS.map((item, index) => (
                <View key={index} style={styles.commentItem}>
                  <Image
                    source={require("../assets/images/userg.png")}
                    style={styles.commentAvatar}
                  />
                  <View style={styles.commentBody}>
                    <View style={styles.commentHeader}>
                      <Text style={styles.commentName}>{item.name}</Text>
                      <Text style={styles.commentTime}>1 sem</Text>
                    </View>
                    <StarRating count={item.stars} />
                    <Text style={styles.commentText}>{item.text}</Text>
                  </View>
                </View>
              ))}
            </View>
          )}
        </View>

        <TouchableOpacity
          style={styles.messageBtn}
          onPress={() => router.push("/chatDetail")}
        >
          <Text style={styles.messageBtnText}>Enviar mensaje</Text>
          <Ionicons name="send" size={16} color="#000" />
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}