import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProductItem = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={styles.info}>
        <Text numberOfLines={2} style={styles.title}>
          {item.title}
        </Text>

        <Text style={styles.category}>{item.category}</Text>

        <Text style={styles.price}>${item.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 15,
    marginBottom: 15,
    flexDirection: "row",
    elevation: 3,
    shadowColor: "#000", 
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  info: {
    flex: 1,
    marginLeft: 15,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
  },
  category: {
    fontSize: 12,
    color: "#777",
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4CAF50",
  },
});

export default ProductItem;