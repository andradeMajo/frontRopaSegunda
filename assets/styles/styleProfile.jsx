import { StyleSheet } from "react-native";
import { colores, fuentes } from "./StyleManager";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colores.black,
  },

 
  coverImage: {
    width: "100%",
    height: 300,
  },
  avatarContainer: {
    position: "absolute",
    top: 58,
    alignSelf: "center",
    zIndex: 2,
    elevation: 2,
  },
  avatar: {
    width: 180,
    height: 180,
    borderRadius: 100,
    overflow: "hidden",
    backgroundColor: "#222",
  },

 
  card: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 10,
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: 0,
    marginBottom: 0,
  },
  name: {
    color: colores.text,
    fontSize: 28,
    fontFamily: fuentes.poppins,
    fontWeight: "700",
    letterSpacing: 0.5,
    textAlign: "center",
    marginTop: 8,
    marginBottom: 0,
  },
  username: {
    color: colores.lightGrey,
    fontSize: 24,
    marginTop: 2,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "400",
  },


  stats: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    justifyContent: "center",
    width: "100%",
    gap: 0,
  },
  statBlock: {
    alignItems: "center",
    paddingHorizontal: 28,
    minWidth: 80,
  },
  statNumber: {
    color: colores.text,
    fontWeight: "700",
    fontSize: 15,
    textAlign: "center",
  },
  statLabel: {
    color: colores.lightGrey,
    fontSize: 12,
    textAlign: "center",
  },
  divider: {
    width: 1,
    height: 30,
    backgroundColor: colores.grey,
    marginHorizontal: 10,
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
  badgeRating: {
    color: "#fff",
    fontSize: 15,            // era 13
    borderRadius: 8,
    fontWeight: "700",
    
    marginRight: 2,
  },
  badgeText: {
    color: "#fff",
    fontSize: 15,            // era 13
    borderRadius: 8,
    marginLeft: 2,
  },

  // Tabs
  actions: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 10,
    justifyContent: "center",
    width: "100%",
  },
  actionBlue: {
    backgroundColor: "#2102FE",
    
     paddingHorizontal: 50,   
    paddingVertical: 10,    
    borderRadius: 10,
    minWidth: 35,  
    
    borderRadius: 8,
  
   
    alignItems: "center",
  },
  actionBlueActive: {
    opacity: 1,
  },
  actionPink: {
    backgroundColor: "#FF005E",
   paddingHorizontal: 15,  
    paddingVertical: 10,   
    borderRadius: 10,
    minWidth: 15,  
    borderRadius: 8,
    
    alignItems: "center",
  },
  actionPinkActive: {
    opacity: 1,
  },
  actionText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
  },

  
  bio: {
    color: colores.lightGrey,
    textAlign: "left",
    fontSize: 13,
    lineHeight: 20,
    marginVertical: 10,
    alignSelf: "flex-start",
    width: "100%",
    paddingHorizontal: 2,
  },

  // Edit button
  editBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    borderWidth: 1,
    borderColor: colores.grey,
    borderRadius: 10,
    paddingVertical: 12,
    width: "100%",
    marginTop: 8,
    marginBottom: 16,
    backgroundColor: "#181818",
  },
  editText: {
    color: colores.text,
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 4,
  },

  // Secciones extra
  sectionRow: {
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 2,
  },
  sectionRowText: {
    color: colores.text,
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 0.2,
  },

  // Separadores
  separator: {
    height: 1,
    backgroundColor: "#222",
    width: "100%",
    marginVertical: 0,
  },
  separatorThin: {
    height: 1,
    backgroundColor: "#222",
    marginVertical: 10,
    width: "100%",
  },

  // Contenido dinámico
  dynamicContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    width: "100%",
  },
  sectionTitle: {
    color: colores.text,
    fontWeight: "700",
    fontSize: 14,
    letterSpacing: 1,
    marginBottom: 12,
    textAlign: "left",
    marginTop: 0,
  },

  // Rating row
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 4,
    width: "100%",
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
    marginRight: 0,
  },

  // Comentario item
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
    width: "100%",
  },
  commentAvatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    overflow: "hidden",
    backgroundColor: "#333",
    marginRight: 8,
  },
  commentMeta: {
    flex: 1,
    justifyContent: "center",
    minWidth: 0,
  },
  commentNameRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 3,
    width: "100%",
  },
  commentName: {
    color: colores.text,
    fontWeight: "700",
    fontSize: 14,
  },
  commentFecha: {
    color: colores.lightGrey,
    fontSize: 12,
    marginLeft: 8,
  },
  commentText: {
    color: colores.lightGrey,
    fontSize: 13,
    lineHeight: 19,
    marginTop: 4,
    width: "100%",
  },

  // Grid prendas
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    justifyContent: "flex-start",
    width: "100%",
  },
  cardItem: {
    width: "47%",
    backgroundColor: "#111",
    borderRadius: 12,
    overflow: "hidden",
    paddingBottom: 8,
    marginBottom: 12,
    minHeight: 240,
  },
  cardImage: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  cardTitle: {
    color: colores.text,
    fontSize: 12,
    fontWeight: "700",
    paddingHorizontal: 8,
    marginTop: 6,
    textAlign: "left",
  },
  cardDuenoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 8,
    marginTop: 3,
    marginBottom: 8,
    width: "100%",
  },
  duenoPoint: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#17E2BF",
    marginRight: 4,
  },
  cardDueno: {
    color: "#17E2BF",
    fontSize: 11,
    fontWeight: "600",
  },
  verPrendaBtn: {
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: colores.grey,
    borderRadius: 8,
    paddingVertical: 6,
    alignItems: "center",
    marginBottom: 6,
    backgroundColor: "#181818",
  },
  verPrendaText: {
    color: colores.text,
    fontSize: 12,
    fontWeight: "600",
  },
  matchBtn: {
    marginHorizontal: 8,
    backgroundColor: "#257CFF",
    borderRadius: 8,
    paddingVertical: 6,
    alignItems: "center",
    marginTop: 2,
  },
  matchText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
  },
});