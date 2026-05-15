import { StyleSheet } from "react-native";
import { colores } from "./StyleManager";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colores.black,
  },
  scroll: {
    paddingBottom: 100,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    gap: 6,
  },
  headerTitle: {
    color: colores.text,
    fontSize: 16,
    fontWeight: "600",
  },
  titleBlock: {
    marginHorizontal: 16,
    marginBottom: 20,
  },
  title: {
    color: colores.text,
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    color: "#fff",
    fontSize: 13,
    lineHeight: 20,
    textAlign: "left",
  },
  zonaSection: {
    marginBottom: 8,
  },
  zonaLabel: {
    color: colores.text,
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 1.2,
    marginBottom: 10,
    paddingHorizontal: 16,
  },
  carousel: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 16,
    paddingRight: 24,
  },
  divider: {
    height: 1,
    backgroundColor: "#444",
    marginTop: 16,
    marginBottom: 16,
    marginHorizontal: 16,
  },
});