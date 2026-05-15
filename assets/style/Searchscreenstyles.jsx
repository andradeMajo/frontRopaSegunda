import { StyleSheet } from "react-native";
import { colores, fuentes } from "./StyleManager";

export const searchStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colores.black,
  },
  searchBar: {
    marginHorizontal: 16,
    marginTop: 10,
    marginBottom: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#444",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1A1A1A",
  },
  searchText: {
    flex: 1,
    color: "#888",
    fontSize: 14,
    fontFamily: fuentes.poppins,
    marginLeft: 10,
  },
  resultsHeader: {
    marginHorizontal: 16,
    marginBottom: 12,
  },
  resultsTitle: {
    color: colores.text,
    fontSize: 16,
    fontFamily: fuentes.poppins,
    fontWeight: "800",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  grid: {
    paddingHorizontal: 28,
    gap: 8,
  },
  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: 8,
  },
});