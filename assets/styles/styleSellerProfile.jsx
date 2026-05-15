import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },

  header: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 10,
    padding: 15,
    paddingTop: 20,
  },

cover: {
  alignItems: "center",
  height: 240,
  position: "relative",
  marginTop: 60,   
},

coverImage: {
  width: "100%",
  height: 280,        // era 240
  position: "absolute",
  top: 0,
  left: 0,
},

avatar: {
  width: 140,
  height: 140,
  borderRadius: 70,
  position: "absolute",
  top: 90,            // era 50
  zIndex: 2,
  borderWidth: 0,
},

info: {
  alignItems: "center",
  marginTop: 60,     
  paddingHorizontal: 16,
},

  name: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "900",
    letterSpacing: 0.5,
    textTransform: "uppercase",
    marginBottom: 2,
  },

  username: {
    color: "#aaa",
    fontSize: 24,
    marginBottom: 16,
  },

  stats: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },

  statBlock: {
    alignItems: "center",
    paddingHorizontal: 20,
  },

  statInline: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 4,
  },

  statNumber: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
  },

  statLabel: {
    color: "#aaa",
    fontSize: 13,
  },

  statDivider: {
    width: 1,
    height: 28,
    backgroundColor: "#444",
  },

  followBtn: {
      backgroundColor: "#FF005E",
   paddingHorizontal: 50,  
    paddingVertical: 0,   
    borderRadius: 10,
    minWidth: 15,  
    borderRadius: 8,
    
    alignItems: "center",
  },

  followText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },

  actions: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginTop: 14,
    paddingHorizontal: 16,
  },

 badgeBlue: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#257CFF",
 paddingHorizontal: 15, 
    paddingVertical: 10,   
    borderRadius: 10,
    minWidth: 15,       
    justifyContent: "center",
  },

  badgeGreen: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,               
    backgroundColor: "#17E2BF",
    paddingHorizontal: 15,  
    paddingVertical: 10,   
    borderRadius: 10,
    minWidth: 15,          
    justifyContent: "center",
  },

  tabBtn: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 30,
  },

  tabBtnPurple: {
      backgroundColor: "#2102FE",
    
     paddingHorizontal: 50,   // era 12
    paddingVertical: 10,     // era 6
    borderRadius: 10,
    minWidth: 35,  
    
    borderRadius: 8,
    
   
    alignItems: "center",
  },

  tabBtnPink: {
       backgroundColor: "#FF005E",
   paddingHorizontal: 15,   // era 12
    paddingVertical: 10,     // era 6
    borderRadius: 10,
    minWidth: 15,  
    borderRadius: 8,
   
    
    alignItems: "center",
  },

  tabActive: {
    borderWidth: 2,
    borderColor: "#fff",
  },

  tabBtnText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
  },

  content: { padding: 20 },

  sectionTitle: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "900",
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 12,
  },

  text: {
    color: "#ccc",
    lineHeight: 22,
    fontSize: 14,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 10,
  },

  gridCard: {
    width: "48%",
    marginBottom: 10,
  },

  commentsHeader: { marginBottom: 16 },

  ratingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
  },

  rating: {
    color: "#257CFF",
    fontWeight: "700",
    fontSize: 16,
  },

  total: { color: "#aaa", fontSize: 12 },

  commentItem: {
    flexDirection: "row",
    marginBottom: 16,
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#1a1a1a",
    paddingBottom: 16,
  },

  commentAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },

  commentBody: {
    flex: 1,
  },

  commentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  commentName: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },

  commentTime: {
    color: "#3B82F6",
    fontSize: 11,
  },

  starsRow: {
    flexDirection: "row",
    gap: 2,
    marginVertical: 4,
  },

  commentText: {
    color: "#ccc",
    fontSize: 13,
    lineHeight: 18,
  },

  messageBtn: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 30,
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  messageBtnText: {
    color: "#000",
    fontWeight: "700",
    fontSize: 16,
  },
});