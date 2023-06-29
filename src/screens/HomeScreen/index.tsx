import React from 'react'
import {ScrollView} from "react-native"
import styles from './styles'
import HeaderMain from "../../components/HeaderMain/Index"
function index() {
  return (
    <ScrollView stickyHeaderIndices={[0]} style={{height:'100%',backgroundColor:'#f5f5f5'}}>
        <HeaderMain />
    </ScrollView>
  )
}

export default index