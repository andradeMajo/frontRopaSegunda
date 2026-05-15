import { StyleSheet } from "react-native";

export function Fonts() { }

export const fuentes = {
  poppins: "Poppins_400Regular",
  TitleFontSize: 24,
  SubtitleFontSize: 15,
  titleFontWeight: "900",

  textAlign: "center",
};

export const colores = {
  primary: "#3B82F6",
  secundary: "#F369D6",
  text: "#fff",
  black: "#111",
  grey: "#333",
  lightGrey: "#888",
};

export const radius = {
  borderRadius: 12,
  marginBottom: 14,
};


export const titleColorBlue = {
  color: colores.primary,
  fontSize: fuentes.TitleFontSize,
  fontFamily: fuentes.poppins,
  fontWeight: fuentes.titleFontWeight,
  textAlign: fuentes.textAlign,
  marginBottom: radius.marginBottom,
};

export const titleColorPink = {
  color: colores.secundary,
  fontSize: fuentes.TitleFontSize,
  fontFamily: fuentes.poppins,
  fontWeight: fuentes.titleFontWeight,
  textAlign: fuentes.textAlign,
  marginBottom: radius.marginBottom,
};

export const textColorWhite = {
  color: colores.text,
  textAlign: "center",
  fontWeight: "700",
  fontFamily: fuentes.poppins,
  fontSize: 16, 
};

export const subTitleColorWhite = {
  color: colores.text,
  fontSize: fuentes.SubtitleFontSize,
  textAlign: fuentes.textAlign,
  marginBottom: 35,
};

export const primaryButton = {
  backgroundColor: colores.primary,
  padding: 16,
  borderRadius: radius.borderRadius,
  marginBottom: radius.marginBottom,
};

export const secondaryButton = {
  backgroundColor: colores.secundary,
  padding: 16,
  borderRadius: radius.borderRadius,
  marginBottom: radius.marginBottom,
};

export const underlineWhiteText = {
  color: colores.text,
  textAlign: "center",
  textDecorationLine: "underline",
  fontSize: 13,
  opacity: 0.75,
  marginTop: 4,
};

export const label = {
  fontFamily: fuentes.poppins,
  color: colores.text,
  marginBottom: 6,
  padding: 14,
};

export const input = {
  fontFamily: fuentes.poppins,
  backgroundColor: colores.black,
  borderRadius: radius.borderRadius,
  padding: 14,
  color: colores.text,
  borderWidth: 1,
  borderColor: colores.grey,
  marginBottom: radius.marginBottom,
};

export const filterStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  scroll: { paddingHorizontal: 16, paddingTop: 10 },
  section: { borderBottomWidth: 1, borderBottomColor: "#222", paddingVertical: 14 },
  label: { color: "#fff", fontSize: 15, fontWeight: "600" },
  chipContainer: { flexDirection: "row", flexWrap: "wrap", marginTop: 10 },
  chip: {
    backgroundColor: "#141414",
    borderWidth: 2,
    borderColor: "#F369D6",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 12,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    minWidth: 90,
    minHeight: 32,
  },
  estadoContainer: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: 12,
  gap: -5,
},

estadoCard: {
   backgroundColor: "#141414",
    borderWidth: 2,
    borderColor: "#0088FF",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 12,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    minWidth: 90,
    minHeight: 32,
},

estadoCardActive: {
  backgroundColor: "#161616",
},

estadoIcon: {
  width: 22,
  height: 22,
  resizeMode: "contain",
  marginRight: 7,
},

estadoText: {
  color: "#FFFFFF",
  fontSize: 13,
  fontWeight: "700",
},

estadoTextActive: {
  color: "#FFFFFF",
},
  sizeContainer: {
  flexDirection: "row",
  flexWrap: "wrap",
  gap: 8,
  marginTop: 10,
},
sizeBox: {
  paddingHorizontal: 16,
  paddingVertical: 8,
  borderRadius: 6,
  borderWidth: 1,
  borderColor: "#CCCCCC",
  backgroundColor: "#FFFFFF",
  minWidth: 48,
  alignItems: "center",
  justifyContent: "center",
},
sizeBoxActive: {
  borderColor: "#2D2D2D",
  backgroundColor: "#2D2D2D",
},

sizeText: {
  fontSize: 13,
  fontWeight: "600",
  color: "#2D2D2D",
},
sizeTextActive: {
  color: "#FFFFFF",
},
tallaCajaContainer: {
  flexDirection: "row",
  flexWrap: "wrap",
  gap: 8,
  marginTop: 10,
},
tallaCaja: {
  paddingHorizontal: 16,
  paddingVertical: 8,
  borderRadius: 6,
  borderWidth: 1,
  borderColor: "#CCCCCC",
  backgroundColor: "#FFFFFF",
  minWidth: 48,
  alignItems: "center",
  justifyContent: "center",
},
tallaCajaActive: {
  borderColor: "#2D2D2D",
  backgroundColor: "#2D2D2D",
},
tallaCajaText: {
  fontSize: 13,
  fontWeight: "600",
  color: "#2D2D2D",
},
tallaCajaTextActive: {
  color: "#FFFFFF",
},
  chipActive: {
    borderColor: "#F369D6",
    backgroundColor: "#1a1a1a",
  },
  chipText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "600",
  },
  chipTextActive: {
    color: "#F369D6",
  },
  sizeContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
  },
  sizeBox: {
    backgroundColor: "#141414",
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 16,
    minWidth: 32,
    minHeight: 32,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
    marginBottom: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  sizeBoxActive: {
    borderColor: "#F369D6",
    backgroundColor: "#F369D6",
  },
  sizeText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
  },
  sizeTextActive: {
    color: "#141414",
  },
  colorContainer: { flexDirection: "row", flexWrap: "wrap", marginTop: 10 },
  colorBox: { width: 28, height: 28, borderRadius: 6, marginRight: 8, marginBottom: 8, borderWidth: 2, borderColor: "transparent" },
  selectedColor: { borderColor: "#fff" },
});

const global = StyleSheet.create({
  title: titleColorBlue,
  subtitle: subTitleColorWhite,
  primaryButton: primaryButton,
  primaryText: textColorWhite,
  secondaryButton: secondaryButton,
  underlineWhiteText: underlineWhiteText,
  titleSecundary: titleColorPink,
  label: label,
  input: input,
  picker: { color: "#fff", width: "100%", backgroundColor: "transparent" },
});

export default global;