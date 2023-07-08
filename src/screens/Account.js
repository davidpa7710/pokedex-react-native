import React from 'react'
import {
    Button,
    StyleSheet,
    Text,
    SafeAreaView,
    TextInput,
    ScrollView,
    Alert
} from 'react-native'

export default function Account() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text>Nombre</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ash"
                />
                <Text>Correo</Text>
                <TextInput
                    style={styles.input}
                    placeholder="ash_ketchum@pokemon.com"
                    keyboardType="email-address"
                ></TextInput>
                <Text>Numero</Text>
                <TextInput
                    style={styles.input}
                    placeholder="+15554444333"
                    keyboardType="phone-pad"
                ></TextInput>
                <Text>Contraseña</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="*******"
                    minLenght="18"
                ></TextInput>
                <Button
                    style={styles.button}
                    title="Submit"
                    onPress={() => Alert.alert('Simple Button pressed')}
                />

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: "gray",
        width: "95%",
        borderWidth: 1,
        borderRadius: 15,
        padding: 10,
        margin: 10,
        backgroundColor: "#fff"
    },
    container: {
        flex: 1,
        backgroundColor: "#4A55A2",
        alignContent: "center",
        alignItems: "center"
    },
    button:{
        backgroundColor:"#7895CB",
        color: "#000",
        borderRadius: 15,
    }

})
