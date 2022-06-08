import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button, FlatList } from "react-native";

const LoggedInScreen = () => {

    const [thing, setThing] = useState("");
    const [todoList, setTodoList] = useState([]);


    const handleTextInputOnChange = (text) => setThing(text);

    const handleAddPress = () => {
        if(thing.trim().length>0){
            setTodoList((value) => value.concat(thing))
            setThing("")
        }
    };

    const handleRenderListItem =({item})=>{
        return <Text style={styles.listText}>- {item}</Text>
    }

    const handleDeletePress = () => setTodoList([])



    return(
        <View style={styles.container}>
            <Text style={styles.header}>To Do</Text>
            <View style={styles.container2}>
             <TextInput placeholder="To do thing" style={styles.textInput} onChangeText={handleTextInputOnChange} value={thing}/>
            </View>
            <Button title='Add' onPress={handleAddPress}/>
            <View>
                <FlatList
                    data={todoList}
                    renderItem={handleRenderListItem}
                    style={styles.estiloFlat}
                />
            </View>
            <Button title='Delete' onPress={handleDeletePress}/>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    container2:{
        borderTopColor: 'black',
        borderTopWidth: 2,
    },

    header: {
        fontSize: 42,
        marginLeft: 15,
        marginTop: 15,
        fontWeight: 'bold'
    }, 

    textInput: {
        backgroundColor: '#f5f5f5',
        marginTop: 30
    },

    listText: {
        marginLeft: 20
    },

    estiloFlat: {
        marginTop: 30,
        marginBottom: 50,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#E5DCDC'
    }
})
export default LoggedInScreen;