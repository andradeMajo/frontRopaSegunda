import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { filterStyles } from "../assets/styles/StyleManager";
import Header from "../components/Header";

export default function FilterScreen() {
  const [selectedEstado, setSelectedEstado] = useState(null);
  const [selectedTalla, setSelectedTalla] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedTipo, setSelectedTipo] = useState(null);
  const [selectedEstilo, setSelectedEstilo] = useState(null);
  const [open, setOpen] = useState({
    estilo: true,
    tipo: false,
    estado: false,
    talla: false,
    color: false,
  });

  const toggle = (key) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const estilosData = [
    { name: "Punk",       img: require("../assets/images/Tab 1.png") },
    { name: "Streetwear", img: require("../assets/images/Tab 2.png") },
    { name: "Gótico",     img: require("../assets/images/Tab 3.png") },
    { name: "Vintage",    img: require("../assets/images/Tab 4.png") }, 
    { name: "Casual",     img: require("../assets/images/Tab 5.png") }, 
  ];

  const tipoData = [
    { name: "Camisas",    img: require("../assets/images/camisas.png") },
    { name: "Chaquetas",  img: require("../assets/images/chaquetas.png") },
    { name: "Sacos",      img: require("../assets/images/sacos.png") },
    { name: "Pantalones", img: require("../assets/images/pan.png") },
    { name: "Zapatos",    img: require("../assets/images/zapatos.png") },
    { name: "Accesorios", img: require("../assets/images/accesorios.png") },
    { name: "Vestidos",   img: require("../assets/images/vestidos.png") },
    { name: "Faldas",     img: require("../assets/images/faldas.png") },
  ];

  
  const estadoData = ["Nuevo", "Como nuevo", "Usado", "Vintage"];

  return (
    <View style={filterStyles.container}>
  <Header
  title="Filtros de búsqueda"
  titleColor="#fff"
  rightIconName="trash-outline"
  onRightPress={() => {/* limpiar filtros */}}
/>
      <ScrollView style={filterStyles.scroll}>

        
        <View style={filterStyles.section}>
          <TouchableOpacity onPress={() => toggle("estilo")}>
            <Text style={filterStyles.label}>Estilo</Text>
          </TouchableOpacity>
          {open.estilo && (
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {estilosData.map((item) => {
                const active = selectedEstilo === item.name;
                return (
                  <TouchableOpacity
                    key={item.name}
                    onPress={() => setSelectedEstilo(item.name)}
                    style={[filterStyles.styleCard, active && filterStyles.styleCardActive]}
                  >
                    <Image source={item.img} style={filterStyles.styleImage} />
                    <Text style={[filterStyles.styleText, active && filterStyles.styleTextActive]}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          )}
        </View>

        
        <View style={filterStyles.section}>
          <TouchableOpacity onPress={() => toggle("tipo")}>
            <Text style={filterStyles.label}>Tipo</Text>
          </TouchableOpacity>
          {open.tipo && (
            <View style={filterStyles.chipContainer}>
              {tipoData.map((item) => {
                const active = selectedTipo === item.name;
                return (
                  <TouchableOpacity
                    key={item.name}
                    onPress={() => setSelectedTipo(item.name)}
                    style={[
                      filterStyles.chip,
                      active && filterStyles.chipActive,
                      { flexDirection: "row", alignItems: "center", gap: 6 },
                    ]}
                  >
                    <Image
                      source={item.img}
                      style={{ width: 20, height: 20, marginRight: 6 }}
                      resizeMode="contain"
                    />
         
                    <Text style={[filterStyles.chipText, active && filterStyles.chipTextActive]}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          )}
        </View>

       
       <View style={filterStyles.section}>
  <TouchableOpacity onPress={() => toggle("estado")}>
    <Text style={filterStyles.label}>Estado</Text>
  </TouchableOpacity>

  {open.estado && (
    <View style={filterStyles.estadoContainer}>
      
 
      <TouchableOpacity
        style={[
          filterStyles.estadoCard,
          selectedEstado === "Casi-Nuevo" &&
            filterStyles.estadoCardActive,
        ]}
        onPress={() => setSelectedEstado("Casi-Nuevo")}
      >
        <Image
          source={require("../assets/images/Union.png")}
          style={filterStyles.estadoIcon}
        />

        <Text
          style={[
            filterStyles.estadoText,
            selectedEstado === "Casi-Nuevo" &&
              filterStyles.estadoTextActive,
          ]}
        >
          Casi-Nuevo
        </Text>
      </TouchableOpacity>

      {/* USADO */}
      <TouchableOpacity
        style={[
          filterStyles.estadoCard,
          selectedEstado === "Usado" &&
            filterStyles.estadoCardActive,
        ]}
        onPress={() => setSelectedEstado("Usado")}
      >
        <Image
          source={require("../assets/images/usado.png")}
          style={filterStyles.estadoIcon}
        />

        <Text
          style={[
            filterStyles.estadoText,
            selectedEstado === "Usado" &&
              filterStyles.estadoTextActive,
          ]}
        >
          Usado
        </Text>
      </TouchableOpacity>

     
      <TouchableOpacity
        style={[
          filterStyles.estadoCard,
          selectedEstado === "Restaurado" &&
            filterStyles.estadoCardActive,
        ]}
        onPress={() => setSelectedEstado("Restaurado")}
      >
        <Image
          source={require("../assets/images/pantalones.png")}
          style={filterStyles.estadoIcon}
        />

        <Text
          style={[
            filterStyles.estadoText,
            selectedEstado === "Restaurado" &&
              filterStyles.estadoTextActive,
          ]}
        >
          Restaurado
        </Text>
      </TouchableOpacity>

    </View>
  )}
</View>
        {/* Talla */}
        <View style={filterStyles.section}>
          <TouchableOpacity onPress={() => toggle("talla")}>
            <Text style={filterStyles.label}>Talla</Text>
          </TouchableOpacity>
          {open.talla && (
           <View style={filterStyles.tallaCajaContainer}>
  {(selectedTipo === "Zapatos"
    ? ["36", "37", "38", "39", "40", "41", "42"]
    : ["XS", "S", "M", "L", "XL"]
  ).map((size) => {
    const active = selectedTalla === size;
    return (
      <TouchableOpacity
        key={size}
        onPress={() => setSelectedTalla(size)}
        style={[filterStyles.tallaCaja, active && filterStyles.tallaCajaActive]}
      >
        <Text style={[filterStyles.tallaCajaText, active && filterStyles.tallaCajaTextActive]}>
          {size}
        </Text>
      </TouchableOpacity>
    );
  })}
</View>
          )}
        </View>


      </ScrollView>
    </View>
  );
}