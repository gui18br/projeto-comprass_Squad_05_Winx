import { StyleSheet } from "react-native";
import { colors } from "../../../styles/globalStyles";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  button: {
    width: 343,
    height: 48,
    borderRadius: 25,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: colors.red_500,
    backgroundColor: colors.red_500,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "800",
  },
});
