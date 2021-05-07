import React from 'react'
import { FlatList, StyleSheet, Text, View, Image } from 'react-native'

import categories from '../../assets/data/categories'

const firstCategory = categories.items[0];
// console.log(firstCategory.movies);
const HomeCategory = () => {
    return (
        <>
            <Text style={styles.title}>Popular on Netflix</Text>

            <FlatList 
                style={styles.list}
                data={firstCategory.movies}
                renderItem={({movie})=>{
                    <Image style={styles.image} source={{uri: movie.poster}} />
                }}

                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </>
    )
}

export default HomeCategory

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20
    },
    title:{
        fontSize:20,
        fontWeight:'bold'
    },
    image:{
        width:100,
        height:170,
        resizeMode:'cover',
        borderRadius:5,
        margin:5
    },
    list:{}
})
