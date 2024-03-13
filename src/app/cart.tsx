import { Platform, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

const CartScreen = () => {
  return (
    <View>
      <Text>CartScreen</Text>

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
