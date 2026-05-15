import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { useRouter } from "expo-router";

import ProductCard from "../components/ProductCard";

const idUsuario = "6a03e5cb4af62fdd5edfdd66";

const URL = "https://backend-thriftmatch.onrender.com/api";

// ─────────────────────────────────────────────────────────────
// USUARIOS
// ─────────────────────────────────────────────────────────────
export function UserConsultas() {
  const [usuarios, setUsuarios] = useState([]);

  function getAllUsers() {
    axios
      .get(URL + "/users")
      .then((res) => setUsuarios(res.data.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  return null;
}

// ─────────────────────────────────────────────────────────────
// PRODUCTOS
// ─────────────────────────────────────────────────────────────
export function ProductConsultas() {
  const router = useRouter();

  const [producto, setProducto] = useState([]);

  function getAllProducts() {
    axios
      .get(URL + "/products")
      .then((res) => setProducto(res.data.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  function chunkData(data, size = 2) {
    const result = [];

    for (let i = 0; i < data.length; i += size) {
      result.push(data.slice(i, i + size));
    }

    return result;
  }

  function renderColumn({ item: column }) {
    return (
      <View
        style={{
          flexDirection: "column",
          marginHorizontal: 8,
          alignSelf: "flex-start",
        }}
      >
        {column.map((prod) => (
          <View
            key={prod._id}
            style={{
              marginBottom: 12,
              height: 320,
            }}
          >
            <ProductCard
              title={prod.nombre ?? "Producto"}
              author={prod.usuarioId?.nombre ?? "Usuario"}
              image={{
                uri:
                  prod.imagenes?.[0] ||
                  "https://picsum.photos/300/400",
              }}
              onVerPrenda={() =>
                router.push({
                  pathname: "/productDetail",
                  params: {
                    id: prod._id,
                    nombre: prod.nombre,
                    autor: prod.usuarioId?.nombre,
                    imagen: prod.imagenes?.[0],
                    descripcion: prod.descripcion,
                    categoria: prod.categoria,
                    material: prod.material,
                    estado: prod.estado,
                    talla: prod.tallaZapatos,
                  },
                })
              }
            onMatch={() =>
  router.push({
    pathname: "/chatDetail",
    params: {
      idChat: prod._id,
      nombre:
        prod.usuarioId?.nombre || "Usuario",
    },
  })
}
            />
          </View>
        ))}
      </View>
    );
  }

  return (
    <View>
      <FlatList
        horizontal
        data={chunkData(producto, 2)}
        renderItem={renderColumn}
        keyExtractor={(_, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 10,
        }}
      />
    </View>
  );
}

// ─────────────────────────────────────────────────────────────
// PRODUCTOS POR USUARIO
// ─────────────────────────────────────────────────────────────
export function productConsultByUserId() {
  const router = useRouter();

  const [product, setProduct] = useState([]);

  function productByUserId() {
    axios
      .get(URL + "/products/user/" + idUsuario)
      .then((res) => setProduct(res.data.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    productByUserId();
  }, []);

  function itemCardProductUser({ item }) {
    return (
      <ProductCard
        title={item.nombre ?? "Producto"}
        author={item.createdAt ?? "Usuario"}
        image={{
          uri:
            item.imagenes?.[0] ||
            "https://picsum.photos/300/400",
        }}
        onVerPrenda={() =>
          router.push({
            pathname: "/productDetail",
            params: {
              id: item._id,
              nombre: item.nombre,
              imagen: item.imagenes?.[0],
              descripcion: item.descripcion,
              categoria: item.categoria,
              material: item.material,
              estado: item.estado,
              talla: item.tallaZapatos,
            },
          })
        }
        onMatch={() =>
          router.push({
            pathname: "/ChatDetail",
            params: {
              idChat: item._id,
              nombre: "Chat",
            },
          })
        }
      />
    );
  }

  return (
    <View>
      <FlatList
        data={product}
        renderItem={itemCardProductUser}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
}

// ─────────────────────────────────────────────────────────────
// TRAER CHATS DEL USUARIO
// ─────────────────────────────────────────────────────────────
export async function getChatsByUser(idUsuario) {
  try {
    const response = await axios.get(
      `${URL}/chat/user/${idUsuario}`
    );

    return response.data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

// ─────────────────────────────────────────────────────────────
// TRAER CHAT POR ID
// ─────────────────────────────────────────────────────────────
export async function getChatById(idChat) {
  try {
    const response = await axios.get(
      `${URL}/chat/${idChat}`
    );

    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// ─────────────────────────────────────────────────────────────
// ENVIAR MENSAJE
// ─────────────────────────────────────────────────────────────
export async function sendMessage(
  idChat,
  usuarioId,
  mensaje
) {
  try {
    const body = {
      usuarioId,
      mensaje,
    };

    const response = await axios.put(
      `${URL}/chat/${idChat}`,
      body
    );

    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// ─────────────────────────────────────────────────────────────
// CREAR MATCH + CHAT
// ─────────────────────────────────────────────────────────────
export async function createMatchyChat(
  idProducto,
  idDueno
) {
  try {
    const bodyMatch = {
      productoId: idProducto,
      clienteId: idUsuario,
      duenoId: idDueno,
    };

    const responseMatch = await axios.post(
      URL + "/match",
      bodyMatch
    );

    const match = responseMatch.data.data;

    const bodyChat = {
      idmatch: match._id,
      idusers: [idUsuario, idDueno],
    };

    const responseChat = await axios.post(
      URL + "/chat",
      bodyChat
    );

    return responseChat.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}