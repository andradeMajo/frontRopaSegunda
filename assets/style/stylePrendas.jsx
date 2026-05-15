import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
    gap: 12,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "800",
  },
  estilosList: {
    paddingHorizontal: 16,
    gap: 12,
    paddingBottom: 24,
  },
  estiloItem: {
    alignItems: "center",
    gap: 6,
    overflow: "visible",
  },
  estiloImg: {
    width: 80,
    height: 80,
  },
  estiloName: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
  },
  separator: {
    height: 1,
    backgroundColor: "#868686",
    marginHorizontal: 16,
    marginVertical: 8,
  },
  sectionTitle: {
    color: "#F369D6",
    fontSize: 15,
    fontWeight: "800",
    letterSpacing: 1,
    paddingHorizontal: 16,
    marginBottom: 14,
    marginTop: 8,
  },
  coleccionesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 16,
    gap: 10,
    marginBottom: 8,
  },
  coleccionItem: {
    width: "47.5%",
    height: 160,
    borderRadius: 14,
    overflow: "hidden",
    borderWidth: 1.5,
    borderColor: "#2D6CDF",
  },
  coleccionImg: {
    width: "100%",
    height: "100%",
  },
  coleccionOverlay: {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "#0D0D0D",  // era #141414CC — el CC era la transparencia
  paddingVertical: 10,
  paddingHorizontal: 12,
},
  coleccionLabel: {
    color: "#2D6CDF",
    fontSize: 14,
    fontWeight: "700",
  },
publicacionesGrid: {
  flexDirection: "row",
  flexWrap: "wrap",
  paddingHorizontal: 25, 
  gap: 10,
  justifyContent: "space-between",
},
});