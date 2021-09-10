import { StyleSheet } from "react-native";

const styles= StyleSheet.create (
  {
    menuItems: {
      marginTop: 20,
      marginRight: 20,
      marginLeft: 20,
    },

    icon: {
      color: "white",
      fontSize: 23
    },
    menuText: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
      marginLeft: 16,
      textTransform: "uppercase"
    },
    menuRow: {
      marginTop: 15,
      marginBottom: 15,
      flexDirection: "row",
      alignItems: "center",
    },
    menuTextBox: {
      flexGrow: 1,
      
    },
    subTitle: {
      color: "grey",
      fontSize: 14,
      marginLeft: 15
    },
    arrowIcon: {
      color: "#4D4D4E",
    }
  }
)
export default styles;