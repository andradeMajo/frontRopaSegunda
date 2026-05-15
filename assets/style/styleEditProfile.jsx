import { StyleSheet } from "react-native";
import { colores, fuentes } from "./StyleManager";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colores.black,
    paddingTop: 10,
  },

 
header: {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 20,
  paddingVertical: 15,
  gap: 12,
},
  title: {
    color: colores.text,
    fontSize: 20,
    fontFamily: fuentes.poppins,
    fontWeight: fuentes.titleFontWeight,
  },

  // Cover
  cover: {
    position: "relative",
    alignItems: "center",
  },
  coverImage: {
    width: "100%",
    height: 220,
  },
  avatarWrapper: {
    position: "absolute",
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 180,
    height: 180,
      borderRadius: 90,
    borderWidth: 3,
    borderColor: colores.black,
    overflow: "hidden",
  },
  editAvatarBtn: {
    position: "absolute",
    backgroundColor: "#2563EB",
    borderRadius: 20,
    padding: 10,
    bottom: 5,
    right: -10,
  },
  editCoverBtn: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "#2563EB",
    borderRadius: 14,
    padding: 6,
  },

  // Formulario
form: {
  marginTop: 16,
  paddingHorizontal: 20,
},
  // Label normal
  label: {
    color: colores.text,
    fontFamily: fuentes.poppins,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderColor: colores.grey,
    fontSize: 17,
    fontWeight: fuentes.textFontWeight,
  },

  // Label activo rosa
  labelPink: {
    color: "#F369D6",
    fontFamily: fuentes.poppins,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderColor: "#F369D6",
    fontSize: 17,
    fontWeight: "600",
  },

 sectionDesc: {
  color: "#3B82F6",
  fontSize: 13,
  lineHeight: 19,
  marginTop: 8,
  marginBottom: 14,
},

  // Input
  input: {
    borderWidth: 1,
    borderColor: colores.grey,
    borderRadius: 10,
    color: colores.text,
    fontFamily: fuentes.poppins,
    marginBottom: 20,
    paddingVertical: 12,
    paddingHorizontal: 14,
    fontSize: 15,
    backgroundColor: "#111",
  },

  // Grid fondos
  fondoGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 20,
  },
  fondoItem: {
    width: "22%",
    aspectRatio: 1,
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "transparent",
  },
  fondoItemSelected: {
    borderColor: "#F369D6",
  },
  fondoImage: {
    width: "100%",
    height: "100%",
  },
});