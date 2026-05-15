const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 14,
    paddingTop: 48,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  title: {
    color: "#F369D6",
    textAlign: "center",
    fontWeight: "900",
    fontSize: 20,
    marginBottom: 6,
  },

  subtitle: {
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 20,
  },

  matchRow: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
  marginBottom: 24,
},
card: {
  width: "46%",
  backgroundColor: "#000",
  borderRadius: 18,
  overflow: "hidden",
  borderWidth: 2,
  borderColor: "#fff",
},
image: {
  width: "100%",
  height: 185,
  resizeMode: "stretch",
},
  cardTitle: {
  color: "#fff",
  fontSize: 12,
  fontWeight: "700",
  paddingHorizontal: 10,
  paddingTop: 10,
  lineHeight: 18,
},
subtitle: {
  color: "#fff",
  textAlign: "center",
  fontSize: 14,
  lineHeight: 22,
  marginBottom: 20,
},
  cardUser: {
    color: "#8B8B8B",
    fontSize: 11,
    paddingHorizontal: 10,
    marginTop: 4,
  },

  heart: {
    position: "absolute",
    alignSelf: "center",
    zIndex: 99,
    top: "36%",
  },

  heartImage: {
    width: 74,
    height: 74,
    resizeMode: "contain",
  },

  desc: {
    color: "#fff",
    textAlign: "center",
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 14,
    borderTopWidth: 1,
    borderTopColor: "#2B2B2B",
    paddingTop: 16,
  },

  labelPink: {
    color: "#F369D6",
    fontWeight: "800",
    fontSize: 14,
    marginBottom: 8,
    marginTop: 6,
    textTransform: "uppercase",
  },

  selector: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
    borderBottomWidth: 1,
    borderBottomColor: "#3A3A3A",
    paddingBottom: 14,
    paddingTop: 6,
    gap: 10,
  },

  selectorText: {
    color: "#fff",
    flex: 1,
    fontSize: 15,
  },

  change: {
    color: "#8B8B8B",
    fontSize: 14,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#3A3A3A",
    paddingBottom: 14,
  },

  timeBox: {
    width: "48%",
  },

  text: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "400",
    marginTop: 4,
  },

  mainButton: {
    marginTop: 24,
    backgroundColor: "#2F80FF",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  mainButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
  },

  heartIcon: {
    width: 18,
    height: 18,
    marginLeft: 6,
    resizeMode: "contain",
  },
});