import React, {useState} from 'react';
import {View, Text, StyleSheet, StatusBar, Platform, TextInput, TouchableOpacity, FlatList, Alert} from "react-native"
import {Card} from "../components"
import {COLORS, SIZES, FONTS, SHADOW} from "../constants"

const styles = StyleSheet.create({
    container: {
        padding: Platform.OS === "ios" ? 40 : StatusBar.currentHeight + 10,
        flex: 1,
        backgroundColor: COLORS.primary,
        padding: SIZES.padding
    },
    wrapper: {
        width: "100%",
        position: "absolute",
        bottom: 0,
        left: 0,
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: SIZES.padding,
    },
    textIn: {
        ...SHADOW,
        borderRadius: SIZES.textBoxRadius,
        backgroundColor: COLORS.secondary,
        height: 42,
        paddingLeft: 15,
        width: "90%",
        color: COLORS.primary,
        marginRight: 15,
        ...FONTS.h2_semiBold,
        

    },
    button: {
        backgroundColor: COLORS.accent,
        height: 42,
        width: "23%",
        borderRadius: 67688,
        alignItems: "center",
        justifyContent: "center"

    }


})

export default function Homepage(){

    const [list, setList] = useState([])
    const [value, setValue] = useState("")
    console.log(value)
    const list2 = []

    function addCard(text) {
        if (value !== ""){
            setList(prev => {
                return [
                    ...prev,
                    {text: text, isSelected: false}
                ]
            }) 
            setValue("") 
        } else {
            alert("No input!")
        }
        
    }

    function setIsSelected(index, value){
        let data = []

        for(let i = 0; i < list.length; i++) {
            if (index === i){
                data.push({...list[i], isSelected: value})
            } else {
                data.push(list[i])
            }
        }

        setList(data)
    }

    function deleteCard(ind) {
        Alert.alert("Delete task", "Do you want to delete this item?", [
            {
                text: "Cancel",
                style: "cancel"
            },
            {text: "Yes", onPress: () => {
                const arr = list.filter((item, index) => index !== ind) 
                setList(arr)
            }}
        ])
        
    }

    return <View style={styles.container}>
        <Text style={{...FONTS.h1_semiBold, color: COLORS.secondary, marginBottom: 20}}>Tasks to do:</Text>
        <FlatList style={{flex: 1}}
            data={list}
            renderItem={({item, index}) => <Card data={item} index={index} setIsSelected={setIsSelected} deleteCard={deleteCard}/>}
            keyExtractor={(item, index) => index.toString()}
        />


        <View style={styles.wrapper}>
            <TextInput style={styles.textIn} placeholder="New Task" placeholderTextColor={COLORS.primary} onChangeText={text => setValue(text)} value={value}/>
            <TouchableOpacity style={styles.button} onPress={() => addCard(value)}>
            <Text style={{fontSize: 25}}>+</Text>
            </TouchableOpacity>
        </View>
    </View>
}
