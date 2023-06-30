import React from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import { Entypo } from '@expo/vector-icons';


const { height, width } = Dimensions.get("window");
function index() {
    return (
        <TouchableOpacity
            style={{
                width: width * 0.285,
                marginTop: 12,
                height: height * 0.25,
                flexDirection: "column",
                alignItems: "flex-start",
                marginLeft: 12,
                // backgroundColor:'red',
                marginBottom: 10
            }}
        >
            <Image
                style={{
                    width: width * 0.285,
                    height: width * 0.285,
                    borderRadius: 12,
                    borderWidth: 0.1,
                    borderColor: "gray",
                }}
                source={{
                    uri: "https://cdn.getir.com/product/5ced4830d349d10001e7055f_tr_1584536178243.jpeg"
                }}
            />
            <View style={{ flexDirection: "row", marginTop: 10, alignItems: 'center' }}>
                <Text
                    style={{
                        textDecorationLine: "line-through",
                        color: "#747990",
                        fontWeight: "bold",
                        fontSize: 11,
                    }}>
                    <Text>{"\u20BA"}</Text>13.95
                </Text>

                <Text
                    style={{
                        color: "#5D3EBD",
                        fontWeight: "bold",
                        fontSize: 12,
                        marginLeft: 4
                    }}>
                    <Text>{"\u20BA"}</Text>12.45
                </Text>
            </View>
            <Text style={{ fontWeight: '600', fontSize: 13, marginTop: 4 }}>Granny Smith Elma</Text>
            <Text style={{ color: '#747990', fontSize: 12, marginTop: 4, fontWeight: '600' }}>1 kg</Text>
            <TouchableOpacity
                style={{
                    position: 'absolute', borderWidth: 0.3, right: -10, top: -10, borderRadius: 5,
                    shadowRadius: 3.8,
                    shadowOpacity: 0.05, borderColor: 'lightgrey', backgroundColor: 'white',
                    flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 30, height: 30
                }}>
                <Entypo name="plus" size={22} color="#5D3EBD" />
            </TouchableOpacity>
        </TouchableOpacity>
    );
}

export default index