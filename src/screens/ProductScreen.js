import React, { useContext, useEffect } from "react";
import {View, FlatList, ActivityIndicator, Text,} from "react-native";
import { ProductContext } from "../context/ProductContext";
import { fetchProducts } from "../services/ProductService";
import ProductItem from "../components/ProductItem";
import ErrorState from "../components/ErrorState";

const ProductScreen = () => {
  const {
    products,
    setProducts,
    loading,
    setLoading,
    error,
    setError,
  } = useContext(ProductContext);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        await new Promise(resolve => setTimeout(resolve, 3000)); 

        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (products.length === 0) {
      loadProducts();
    }
  }, []);

  //Loading State
  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  // Error State
  if (error) {
    return <ErrorState message={error} />;
  }

  //Empty State
  if (!loading && products.length === 0) {
    return <Text style={{ textAlign: "center", marginTop: 20 }}>No products available</Text>;
  }

  //Success State
  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductItem item={item} />}
      />
    </View>
  );
};

export default ProductScreen;