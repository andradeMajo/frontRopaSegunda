import { StyleSheet } from "react-native";
import { colores, fuentes, radius } from "./StyleManager";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colores.black,
  },

  scroll: {
    paddingBottom: 100,
  },

  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginBottom: 12,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: radius.borderRadius,
    borderWidth: 1,
    borderColor: colores.grey,
    backgroundColor: colores.darkGrey,
  },

  searchText: {
    color: colores.lightGrey,
    fontSize: 13,
    flex: 1,
    marginLeft: 8,
  },

  section: {
    marginTop: 20,
    paddingHorizontal: 16,
  },

sectionTitle: {
  color: "#fff",
  fontSize: 17,         
  fontWeight: "800",
  letterSpacing: 1,
  textTransform: "uppercase",
  },
  headerAlt: {
  paddingHorizontal: 16,
  marginBottom: 8,
},
mainTitle: {
  color: "#fff",
  fontSize: 20,
  fontWeight: "800",
  letterSpacing: 1,
  marginBottom: 8,
  textAlign: "center",
},
mainDescription: {
  color: "#fff",
  fontSize: 13,
  lineHeight: 22,
  textAlign: "left",
},

  heartIcon: {
    width: 20,
    height: 20,
    marginLeft: 6,
  },
gridCarrusel: {
  flexDirection: "row",
  gap: 12,
  paddingRight: 16,
},
gridColumna: {
  gap: 12,
},
 sectionSubtitle: {
  color: "#fff",    
  fontSize: 13,       
  fontWeight: "400",
  marginBottom: 10,
},
gridTres: {
  flexDirection: "row",
  flexWrap: "wrap",
  gap: 10,
},
  horizontalList: {
    flexDirection: "row",
    gap: 10,
    paddingRight: 16,
  },
gridDos: {
  flexDirection: "row",
  flexWrap: "wrap",
  gap: 12,
},
  ctaContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
  },

  primaryButton: {
    backgroundColor: colores.primary,
    paddingVertical: 12,
    borderRadius: radius.borderRadius,
    alignItems: "center",
  },

  primaryText: {
    color: colores.text,
    fontFamily: fuentes.poppins,
    fontWeight: fuentes.titleFontWeight,
    fontSize: 14,
  },

  tipsContainer: {
  flexDirection: "row",
  flexWrap: "wrap",
  gap: 10,
  marginTop: 4,
  justifyContent: "space-between",
},
tipCardWrapper: {
  width: "48%",
},
  sectionIcon: {
  width: 22,
  height: 22,
  marginLeft: 6,
},
});