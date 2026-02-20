import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ErrorState = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: "center" },
  text: { color: "red" },
});

export default ErrorState;