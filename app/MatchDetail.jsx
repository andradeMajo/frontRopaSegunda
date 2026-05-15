import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../assets/styles/styleMatchDetail";
import DropDow from "../components/DropDow";
import MatchCard from "../components/MatchCard";



export default function MatchDetail({ mode = "propose", data = {} }) {
  const router = useRouter();

  const [date, setDate] = useState("Martes, Oct 24");
  const [startTime, setStartTime] = useState("8:00 PM");
  const [endTime, setEndTime] = useState("10:00 PM");

  const [showStartModal, setShowStartModal] = useState(false);
  const [showEndModal, setShowEndModal] = useState(false);
  const [showDateModal, setShowDateModal] = useState(false);

  const [place, setPlace] = useState(data.place || "");

  const hours = [
    "6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM",
    "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM",
    "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM",
    "9:00 PM", "10:00 PM", "11:00 PM", "12:00 AM", "1:00 AM",
  ];

  const dates = [
    "Lunes, Oct 23", "Martes, Oct 24", "Miércoles, Oct 25",
    "Jueves, Oct 26", "Viernes, Oct 27", "Sábado, Oct 28",
    "Domingo, Oct 29", "Lunes, Oct 30", "Martes, Oct 31",
    "Miércoles, Nov 1", "Jueves, Nov 2", "Viernes, Nov 3",
    "Sábado, Nov 4", "Domingo, Nov 5", "Lunes, Nov 6",
    "Martes, Nov 7", "Miércoles, Nov 8", "Jueves, Nov 9",
    "Viernes, Nov 10", "Sábado, Nov 11",
  ];

  const placeOptions = [
    { label: "Chapinero", value: "chapinero" },
    { label: "Zona T", value: "zonaT" },
    { label: "Parque 93", value: "parque93" },
    { label: "Usaquén", value: "usaquen" },
    { label: "La Candelaria", value: "candelaria" },
    { label: "El Poblado", value: "poblado" },
    { label: "Santa Fe", value: "santafe" },
    { label: "Paloquemao", value: "paloquemao" },
    { label: "Teusaquillo", value: "teusaquillo" },
    { label: "Suba", value: "suba" },
    { label: "Kennedy", value: "kennedy" },
    { label: "Bosa", value: "bosa" },
    { label: "Fontibón", value: "fontibon" },
    { label: "Engativá", value: "engativa" },
    { label: "Ciudad Bolívar", value: "ciudadbolivar" },
  ];

  const acceptPlaceName = data.placeName || "El Cuchitril, Chapinero";
  const acceptPlaceAddress = data.placeAddress || "Cra. 9 #23-49B";

  // Nombre del match: se toma del primer card que no sea el del usuario actual
  const matchUserName = data.cards?.[0]?.userName || "tu Match";

  const handleNext = () => {
    if (mode === "propose") {
      if (!place) return alert("Completa todos los campos");
      router.back();
    } else {
      router.push({
        pathname: "/RateMatchScreen",
        params: { date, startTime, endTime, place },
      });
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          {mode === "accept" ? "Aceptar Match" : "Proponer Match"}
        </Text>
        <Ionicons name="ellipsis-horizontal" size={22} color="#fff" />
      </View>

      {/* TITULO */}
      <Text style={styles.title}>¿LISTX PARA EL MATCH?</Text>
      <Text style={styles.subtitle}>
        ¡Epa! Estás a punto de hacer Match con:{"\n"}
        <Text style={styles.subtitleBold}>{matchUserName}</Text>
      </Text>

      {/* CARDS — se iteran según data.cards */}
      <View style={styles.matchRow}>
        {(data.cards ?? []).map((card, index) => (
          <>
            <MatchCard
              key={card.id}
              image={card.image}
              title={card.title}
              userName={card.userName}
            />

            {/* Corazón separador entre cards (se muestra entre cada par) */}
            {index < (data.cards.length - 1) && (
              <View key={`heart-${index}`} style={styles.heart}>
                <Image
                  source={require("../assets/images/cos.png")}
                  style={styles.heartImage}
                />
              </View>
            )}
          </>
        ))}
      </View>

      {/* DESCRIPCION */}
      <Text style={styles.desc}>
        Selecciona una fecha y lugar para tu cita y espera a que tu Match acepte
      </Text>

      {/* FECHA */}
      <Text style={styles.labelPinkCenter}>Fecha</Text>
      <TouchableOpacity
        style={styles.selector}
        onPress={() => mode !== "accept" && setShowDateModal(true)}
      >
        <Ionicons name="calendar-outline" size={18} color="#aaa" />
        <Text style={styles.selectorText}>{date}</Text>
      </TouchableOpacity>

      {/* HORAS */}
      <View style={styles.rowBetween}>
        <TouchableOpacity
          style={styles.timeBox}
          onPress={() => mode !== "accept" && setShowStartModal(true)}
        >
          <Text style={styles.labelPink}>Hora Inicio</Text>
          <Text style={styles.text}>{startTime}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.timeBox}
          onPress={() => mode !== "accept" && setShowEndModal(true)}
        >
          <Text style={styles.labelPink}>Hora Final</Text>
          <Text style={styles.text}>{endTime}</Text>
        </TouchableOpacity>
      </View>

      {/* LUGAR */}
      <Text style={styles.labelPinkCenter}>Lugar</Text>

      {mode === "accept" ? (
        <>
          <View style={styles.placeDisplay}>
            <Ionicons name="location" size={20} color="#4A90D9" style={styles.locationIcon} />
            <View style={styles.placeDisplayInfo}>
              <Text style={styles.placeDisplayName}>{acceptPlaceName}</Text>
              <Text style={styles.placeDisplayAddress}>{acceptPlaceAddress}</Text>
            </View>
          </View>
          <View style={styles.separator} />
        </>
      ) : (
        <DropDow
          selectedValue={place}
          onValueChange={(value) => setPlace(value)}
          options={placeOptions}
        />
      )}

      {/* SECCIÓN EXTRA SOLO EN MODE ACCEPT */}
      {mode === "accept" && (
        <View style={styles.extraSection}>

          <View style={styles.reminderRow}>
            <Image
              source={require("../assets/images/bolsa.png")}
              style={styles.reminderIcon}
              resizeMode="contain"
            />
            <View style={styles.reminderInfo}>
              <Text style={styles.reminderTitle}>No lo olvides</Text>
              <Text style={styles.reminderText}>Lleva una bolsa reutilizable</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.extraBtn}
            onPress={() => router.push("/Chat")}
          >
            <Image
              source={require("../assets/images/anun.png")}
              style={styles.extraBtnIcon}
              resizeMode="contain"
            />
            <View style={styles.extraBtnInfo}>
              <Text style={styles.extraBtnTitle}>Activar Recordatorio</Text>
              <Text style={styles.extraBtnSubtitle}>Te llegará una notificación</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.extraBtn}
            onPress={() => router.push("/Closet")}
          >
            <Image
              source={require("../assets/images/casasd.png")}
              style={styles.extraBtnIcon}
              resizeMode="contain"
            />
            <View style={styles.extraBtnInfo}>
              <Text style={styles.extraBtnTitle}>Tips para tu Match</Text>
              <Text style={styles.extraBtnSubtitle}>Entrega fina tu prenda</Text>
            </View>
          </TouchableOpacity>

        </View>
      )}

      {/* BOTON ACEPTAR / PROPONER */}
      <TouchableOpacity style={styles.btnAccept} onPress={handleNext}>
        <Text style={styles.mainButtonText}>
          {mode === "accept" ? "Aceptar Match " : "Proponer un Match "}
        </Text>
        <Image
          source={require("../assets/images/cos.png")}
          style={styles.heartIcon}
        />
      </TouchableOpacity>

      {/* BOTON PROPONER CAMBIO DE AGENDA — solo en accept */}
      {mode === "accept" && (
        <TouchableOpacity
          style={styles.btnPropose}
          onPress={() => router.push("/ProposeMatchScreen")}
        >
          <Text style={styles.mainButtonText}>Proponer cambio de agenda </Text>
          <Ionicons name="calendar-outline" size={18} color="#fff" />
        </TouchableOpacity>
      )}

      {/* MODAL FECHA */}
      <Modal visible={showDateModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {dates.map((item) => (
                <TouchableOpacity
                  key={item}
                  style={styles.optionButton}
                  onPress={() => { setDate(item); setShowDateModal(false); }}
                >
                  <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* MODAL HORA INICIO */}
      <Modal visible={showStartModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {hours.map((item) => (
                <TouchableOpacity
                  key={item}
                  style={styles.optionButton}
                  onPress={() => { setStartTime(item); setShowStartModal(false); }}
                >
                  <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* MODAL HORA FINAL */}
      <Modal visible={showEndModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {hours.map((item) => (
                <TouchableOpacity
                  key={item}
                  style={styles.optionButton}
                  onPress={() => { setEndTime(item); setShowEndModal(false); }}
                >
                  <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>

    </ScrollView>
  );
}