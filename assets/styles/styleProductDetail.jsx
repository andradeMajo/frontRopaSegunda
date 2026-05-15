import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
  },
  imageContainer: {
    position: "relative",
  },
  productImage: {
    width: width,
    height: 300,
  },
  counter: {
    position: "absolute",
    bottom: 16,
    left: 16,
    backgroundColor: "#111",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  counterText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "600",
  },
  bookmark: {
    position: "absolute",
    bottom: 16,
    right: 16,
    backgroundColor: "#EC4899",
    borderRadius: 20,
    padding: 8,
  },
  infoContainer: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  productTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 14,
  },
  userRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 16,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  userName: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
  },
  userHandle: {
    color: "#888",
    fontSize: 12,
  },
  tagsRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },
  tagGray: {
    flex: 1,
    backgroundColor: "#5F616E",
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
  },
  tagPink: {
    flex: 1,
    backgroundColor: "#FF005E",
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
  },
  tagBlue: {
    flex: 1,
    backgroundColor: "#2102FE",
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
  },
  confirmBtn: {
  backgroundColor: "#2563EB",
  paddingVertical: 18,
  borderRadius: 14,
  alignItems: "center",
  marginHorizontal: 16,
  marginTop: 20,
},
confirmBtnText: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "700",
},
  tagTeal: {
    flex: 1,
    backgroundColor: "#17E2BF",
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
  },
  tagText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "700",
  },
  separator: {
    height: 1,
    backgroundColor: "#222",
    marginVertical: 16,
  },
seccionBtn: {
  backgroundColor: "#1A1A1A",
  borderRadius: 10,
  paddingVertical: 14,
  paddingHorizontal: 16,
  marginBottom: 10,
  flexDirection: "row",       
  justifyContent: "center",
},
  seccionBtnText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
  },
  seccionTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 22,
    marginBottom: 16,
    paddingHorizontal: 4,
  },
});