import React, { useState } from 'react'
import { ScrollView, Text, Dimensions, View } from 'react-native'
import categoriesGetir from '../../../assets/categoriesGetir'
import { Category } from '../../models'
const { height, width } = Dimensions.get('window')


const CategoryBox = ({ item, active }: { item: Category, active: Category }) => {
    return (
        <View style={[{ paddingHorizontal: 9, alignItems: 'center', flexDirection: 'row' }, item.name == active.name && { borderBottomColor: '#FFD00C', borderBottomWidth: 2.5 }]}>
            <Text style={{ fontSize: 14, color: 'white', fontWeight: '600' }}>{item.name}</Text>
        </View>
    )
}

function index({ category }: { category: Category }) {
    const [categories, setCategories] = useState(categoriesGetir)
    return (
        <ScrollView style={{ width: '100%', backgroundColor: '#7849F7', height: height * 0.065 }} showsHorizontalScrollIndicator={false} bounces={true} horizontal={true} >
            {categories.map((item) => (
                <CategoryBox key={item.id} item={item} active={category} />
            ))
            }
        </ScrollView>
    )
}

export default index