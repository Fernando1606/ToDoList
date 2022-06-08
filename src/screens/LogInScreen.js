import React, {useState} from "react";
import { Text, View, Image, StyleSheet, TextInput, Button, Alert } from "react-native";

const LogInScreen = ({navigation}) => {

    const [user,setUser] = useState("");
    const [password,setPassword] = useState("");

    const handleSignInPress = () =>{
        if(user.trim().length >0 && password.trim().length >0){
            if(user==='Usuario' && password === '1234'){
                navigation.navigate('LoggedIn')
            }else{
                Alert.alert('Error', 'Usuario y/o contraseña incorrecto');
                setUser("");
                setPassword("")
            }
        }

    }

    const handleUserTextChange = (text) => setUser(text);
    const handlePasswordTextChange = (text) =>setPassword(text);


    return(
        <View style={styles.container}>
            <Image
             source={{
                 uri: 'http://store-images.s-microsoft.com/image/apps.60166.13510798887304077.23063538-cc5b-48a6-877b-3b83e2722bce.426db1ff-299b-45cd-80f7-54d8188f749e'
             }}
             style={styles.imagen}
            />
            <Text style={styles.texto1}>Introduce tus datos</Text>
            <TextInput placeholder="Usuario" style={styles.textInput} onChangeText={handleUserTextChange}/>
            <TextInput placeholder="Contraseña" style={styles.textInput} secureTextEntry onChangeText={handlePasswordTextChange}/>
            <View style={styles.container2}>
                <Button style={styles.boton} title='Sign in' onPress={handleSignInPress}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    imagen: {
        marginTop: 20,
        width: 200,
        height: 200,
        alignSelf: 'center'
    },

    texto1: {
        marginTop: 40,
        fontSize: 30,
        alignSelf: 'center'
    },

    textInput: {
        backgroundColor: '#fff',
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10
    },

    container2: {
        backgroundColor: '#f5f5f5',
        marginTop: 20
    }
})
export default LogInScreen;