import React from 'react'
import { View, Text } from "react-native"
import productsGetir from '../../../assets/productsGetir'
import ProductItem from "../../components/ProductItem"

function index() {
    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white' }}>

            </View>
            <Text style={{ color: "gray", fontWeight: 'bold', padding: 14 }}>
                Çubuk
            </Text>
            <View style={{
                flexDirection: 'row', alignItems: 'center'
                , flex: 1, flexWrap: 'wrap', width: '100%', backgroundColor: 'white', paddingVertical: 10
            }}>
            </View>
        </View>
    )
}

export default index