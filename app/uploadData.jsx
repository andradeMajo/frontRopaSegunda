import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "../assets/styles/styleUploadFlow";
import DropDow from "../components/DropDow";
import Header from "../components/Header";
import TextField from "../components/textField";

export default function UploadData() {
  const router = useRouter();

  const [estilo, setEstilo] = useState(null);
  const [material, setMaterial] = useState(null);
  const [estado, setEstado] = useState(null);
  const [talla, setTalla] = useState(null);
  const [ubicacion, setUbicacion] = useState(null);
  const [disponible, setDisponible] = useState(null);

  return (
    <View style={styles.container}>
      <Header title="Publica tu prenda" showBack />
      <View style={styles.divider} />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>

        <Text style={styles.sectionLabel}>LLENA EL FORMULARIO</Text>

        <TouchableOpacity style={styles.uploadBox}>
          <Image
            source={require("../assets/images/add.png")}
            style={{ width: 48, height: 48 }}
            resizeMode="contain"
          />
          <Text style={styles.uploadText}>Agregar fotos</Text>
          <Text style={styles.uploadSub}>o arrastra y suelta</Text>
        </TouchableOpacity>

        <Text style={styles.groupTitle}>Datos del producto</Text>

        <TextField label="¿Que vas a vender?*" placeholder="Chaqueta Vintage Valentino 1990..." />
        <TextField label="Tipo de prenda*" placeholder="Zapatos, Chaqueta, Pantalón, etc." />
        <TextField label="Descripción:*" placeholder="Cuentanos todo sobre la prenda para que tu Match sepa todo de ella" multiline />
        <TextField label="Match Ideal:*" placeholder="¿Que buscas?¿Que esperas? y así podemos buscar a tu Match ideal" multiline />
        <TextField label="Especificaciones:*" placeholder="Cuentanos que tiene el producto, el material. Que tu Match se enamore de ella" multiline />
        <TextField label="Ancho" placeholder="Cuánto tiene de ancho tu prenda" />
        <TextField label="Alto" placeholder="Cuánto tiene de alto tu prenda" />

        <DropDow
          label="Estilo*"
          selectedValue={estilo}
          onValueChange={setEstilo}
          options={[
            { label: "Punk, Streetwear, Urbano", value: "punk" },
            { label: "Coquette, Harajuku, Lolita", value: "coquette" },
            { label: "Gótico, Rockero, Alterno", value: "gotico" },
            { label: "Hipster, Clásico, Elegante", value: "hipster" },
            { label: "Estandar", value: "estandar" },
          ]}
        />

        <DropDow
          label="Material:*"
          selectedValue={material}
          onValueChange={setMaterial}
          options={[
            { label: "Algodón", value: "algodon" },
            { label: "Poliéster", value: "poliester" },
            { label: "Lana", value: "lana" },
            { label: "Lino", value: "lino" },
            { label: "Lycra", value: "lycra" },
            { label: "Seda", value: "seda" },
            { label: "Nylon", value: "nylon" },
            { label: "Cuero", value: "cuero" },
          ]}
        />

        <DropDow
          label="Estado:*"
          selectedValue={estado}
          onValueChange={setEstado}
          options={[
            { label: "Casi-Nuevo", value: "casi_nuevo" },
            { label: "Usado", value: "usado" },
            { label: "Restaurado", value: "restaurado" },
          ]}
        />

        <DropDow
          label="Talla:"
          selectedValue={talla}
          onValueChange={setTalla}
          options={[
            { label: "XS", value: "xs" },
            { label: "S", value: "s" },
            { label: "M", value: "m" },
            { label: "L", value: "l" },
            { label: "XL", value: "xl" },
            { label: "XXL", value: "xxl" },
          ]}
        />

        <View style={styles.rowFields}>
          <View style={{ flex: 1 }}>
            <DropDow
              label="Ubicación"
              selectedValue={ubicacion}
              onValueChange={setUbicacion}
              options={[
                { label: "Zona Norte", value: "norte" },
                { label: "Zona Sur", value: "sur" },
                { label: "Zona Oriente", value: "oriente" },
                { label: "Zona Occidente", value: "occidente" },
                { label: "Zona Centro", value: "centro" },
              ]}
            />
          </View>
          <View style={{ flex: 1 }}>
            <DropDow
              label="Disponible"
              selectedValue={disponible}
              onValueChange={setDisponible}
              options={[
                { label: "Disponible", value: "disponible" },
                { label: "No disponible", value: "no_disponible" },
              ]}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.publishBtn}
          onPress={() => router.push("/preview")}
        >
          <Text style={styles.publishText}>Publicar prenda</Text>
        </TouchableOpacity>

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}