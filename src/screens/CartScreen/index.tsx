import {
  View,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import productsGetir from "../../../assets/productsGetir";
import Cartİtem from "../../components/Cartİtem";
import ProductItem from "../../components/ProductItem";
//redux
import { connect } from "react-redux";
import { Product } from "../../models";

const { width, height } = Dimensions.get("window");

const index = ({
  cartItems,
}: {
  cartItems: { product: Product; quantity: number }[];
}) => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  
  const getProductsPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.product.fiyat;
      setTotalPrice(total);
    });
    //cartItems.length ? null : setTotalPrice(0)
  };
  React.useEffect(() => {
    getProductsPrice();
    return () => {
      setTotalPrice(0);
    };
  }, [cartItems]);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <FlatList
          style={{}}
          data={cartItems}
          renderItem={({ item }) => (
            <Cartİtem product={item.product} quantity={item.quantity} />
          )}
        />
        <Text style={{ padding: 15, fontWeight: "bold", color: "#5D3EBD" }}>
          Önerilen Ürünler
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          bounces={true}
          style={{ backgroundColor: "white" }}
        >
          {productsGetir.map((item, index) => (
            <ProductItem key={index} item={item} />
          ))}
        </ScrollView>
      </ScrollView>
      <View
        style={{
          height: height * 0.12,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: "4%",
          position: "absolute",
          bottom: 0,
          width: "100%",
          backgroundColor: "#f8f8f8",
        }}
      >
        <TouchableOpacity
          style={{
            height: height * 0.06,
            flex: 3,
            backgroundColor: "#5D3EBD",
            justifyContent: "center",
            alignItems: "center",
            marginTop: -10,
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
            Devam
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            marginTop: -10,
            height: height * 0.06,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
          }}
        >
          <Text style={{ color: "#5D3EBD", fontWeight: "bold", fontSize: 16 }}>
            <Text>{"\u20BA"}</Text>
            {totalPrice.toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};

export default connect(mapStateToProps, null)(index);
