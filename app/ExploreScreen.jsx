import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../assets/styles/styleExplore";
import BottomNav from "../components/BottomNav";
import FloatingButton from "../components/FloatingButton";
import Header from "../components/Header";
import PhraseStack from "../components/PhraseStack";
import PlaceCard from "../components/PlaceCard";
import ProductCard from "../components/ProductCard";
import TipCard from "../components/TipCard";
import { ProductConsultas } from "../consulta/Consultas";


const Divider = () => (
  <View style={{ height: 1, backgroundColor: '#cecece', marginVertical: 12, marginHorizontal: 16 }} />
);

export default function ExploreScreen({ navigation }) {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Header
          title="HOLA, DIANA!"
          showBack={false}
          rightComponent={
            <TouchableOpacity onPress={() => router.push("/NotificationsScreen")}>
              <Image
                source={require('../assets/images/megafono.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
          }
        />

        <View style={styles.searchBar}>
          <Ionicons name="search" size={18} color="#F369D6" />
          <TextInput
            style={{ flex: 1, color: "#fff", fontSize: 14 }}
            placeholder="Encuentra tu joya ideal"
            placeholderTextColor="#888"
            onSubmitEditing={() => router.push("/Searchscreen")}
          />
          <TouchableOpacity onPress={() => router.push("/FilterScreen")}>
            <Ionicons name="options-outline" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        <PhraseStack />

        <View style={styles.section}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.sectionTitle}>¿UN MATCH O MIEDO? </Text>
            <Image source={require("../assets/images/cos.png")} style={styles.heartIcon} />
          </View>
          <Text style={styles.sectionSubtitle}>
            Aquí hay algunas joyitas que van con tu estilo, para que les eches el ojo
          </Text>

          {/* Carrusel con datos reales de la API */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.gridCarrusel}>
              <ProductConsultas/>
            </View>
          </ScrollView>
        </View>

        <Divider />

        <View style={styles.section}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.sectionTitle}>LUGARES PARA PARCHAR </Text>
            <Image source={require("../assets/images/icono_lugares.png")} style={styles.sectionIcon} />
          </View>
          <Text style={styles.sectionSubtitle}>Conoce espacios con estilo</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.horizontalList}>
              <PlaceCard />
              <PlaceCard />
            </View>
          </ScrollView>
        </View>

        <View style={styles.ctaContainer}>
          <TouchableOpacity style={styles.primaryButton} onPress={() => router.push("/home")}>
            <Text style={styles.primaryText}>Explorar más puntos</Text>
          </TouchableOpacity>
        </View>

        <Divider />

        <View style={styles.section}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.sectionTitle}>MANTÉN FINO EL ESTILO </Text>
            <Image source={require("../assets/images/icono_estilo.png")} style={styles.sectionIcon} />
          </View>
          <Text style={styles.sectionSubtitle}>Haz que tu prenda llegue como nueva</Text>
          <View style={styles.tipsContainer}>
            <View style={styles.tipCardWrapper}><TipCard label="ropa" /></View>
            <View style={styles.tipCardWrapper}><TipCard label="bolsos" /></View>
            <View style={styles.tipCardWrapper}><TipCard label="zapatos" /></View>
            <View style={styles.tipCardWrapper}><TipCard label="accesorios" /></View>
          </View>
        </View>

      </ScrollView>
      <FloatingButton />
      <BottomNav />
    </View>
  );
}