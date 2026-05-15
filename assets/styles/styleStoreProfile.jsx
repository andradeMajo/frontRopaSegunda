import { StyleSheet } from "react-native";
import { colores, fuentes } from "./StyleManager";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colores.black,
  },

  coverImage: {
    width: "100%",
    height: 240,
  },

  card: {
    marginTop: 16,
    paddingHorizontal: 20,
    paddingBottom: 10,
    alignItems: "center",
    backgroundColor: "transparent",
  },

  name: {
    color: colores.text,
    fontSize: 28,
    fontFamily: fuentes.poppins,
    fontWeight: "900",
    letterSpacing: 0.5,
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 2,
  },

  username: {
    color: colores.lightGrey,
    fontSize: 18,
    marginBottom: 14,
    textAlign: "center",
  },

  statsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    marginBottom: 14,
    width: "100%",
  },

  statBlock: {
    alignItems: "center",
  },

  statNumber: {
    color: colores.text,
    fontWeight: "700",
    fontSize: 15,
  },

  statLabel: {
    color: colores.lightGrey,
    fontSize: 12,
  },

  followBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F369D6",
    paddingHorizontal: 22,
    paddingVertical: 10,
    borderRadius: 12,
    gap: 6,
  },

  followText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },

  badges: {
    flexDirection: "row",
    gap: 12,
    marginVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  badgeBlue: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#257CFF",
 paddingHorizontal: 15,   // era 12
    paddingVertical: 10,     // era 6
    borderRadius: 10,
    minWidth: 15,          // era 80
    justifyContent: "center",
  },

  badgeBlueAlt: {
    backgroundColor: "#2102FE",
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 10,
  },

 badgeGreen: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,                  // era 4
    backgroundColor: "#17E2BF",
    paddingHorizontal: 15,   // era 12
    paddingVertical: 10,     // era 6
    borderRadius: 10,
    minWidth: 15,           // era 80
    justifyContent: "center",
  },

  badgeGreenAlt: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#D01FAB",
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 10,
  },

 badgeRating: {
    color: "#fff",
    fontSize: 15,            // era 13
    borderRadius: 8,
    fontWeight: "700",
    
    marginRight: 2,
  },

 badgeText: {
    color: "#fff",
    fontSize: 15,            
    borderRadius: 8,
    marginLeft: 2,
  },

  bio: {
    color: colores.text,
    fontSize: 22,
    lineHeight: 20,
    textAlign: "left",
    alignSelf: "flex-start",
    width: "100%",
    marginTop: 6,
    marginBottom: 4,
  },

  dynamicContent: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },

  sectionTitle: {
    color: colores.text,
    fontWeight: "800",
    fontSize: 18,
    letterSpacing: 1,
    marginBottom: 8,
    textTransform: "uppercase",
  },

  separatorThin: {
    height: 1,
    backgroundColor: "#333",
    marginBottom: 14,
    width: "100%",
  },

  // Fotos carrusel
  fotosRow: {
    flexDirection: "row",
    gap: 8,
    paddingVertical: 4,
  },

  fotoItem: {
    width: 242,
    height: 280,
    borderRadius: 12,
  },

  // Eventos
  eventoCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 12,
  },

  eventoNombre: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
  },

  eventoFecha: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "500",
  },

  // Rating row
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 8,
  },

  ratingBig: {
    color: colores.text,
    fontWeight: "700",
    fontSize: 15,
    marginLeft: 4,
  },

  ratingCount: {
    color: colores.lightGrey,
    fontSize: 13,
    marginLeft: "auto",
  },

  // Comentarios
  commentItem: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#1a1a1a",
    width: "100%",
  },

  commentHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    marginBottom: 8,
  },

  commentAvatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#333",
  },

  commentMeta: {
    flex: 1,
  },

  commentNameRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 3,
  },

  commentName: {
    color: colores.text,
    fontWeight: "700",
    fontSize: 14,
  },

  commentFecha: {
    color: "#3B82F6",
    fontSize: 12,
  },

  commentText: {
    color: colores.lightGrey,
    fontSize: 13,
    lineHeight: 19,
    marginTop: 4,
  },

  // Redes
  redesRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginTop: 14,
    marginBottom: 10,
    flexWrap: "wrap",
  },

  redIcon: {
    padding: 4,
  },

  redesHandle: {
    color: colores.text,
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 4,
  },
});