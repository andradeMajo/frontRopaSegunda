import { StyleSheet } from "react-native";
import { colores, fuentes } from "./StyleManager";

export default StyleSheet.create({
  emptyTitle: {
    color: colores.secundary,      
    fontSize: 22,
    fontFamily: fuentes.poppins,
    fontWeight: "900",
    marginTop: 8,
    textAlign: "center",
  },
  emptySubtitle: {
    color: colores.lightGrey,
    textAlign: "center",
    marginTop: 8,
    fontSize: 15,
    lineHeight: 22,
  },
});