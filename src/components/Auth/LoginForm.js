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
import { useFormik } from 'formik'
import * as Yup from 'yup'

export default function LoginForm() {
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: (formValue) => {
            console.log("formulario enviado");
            console.log(formValue);
        },
    })
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text>Nombre de Usuario</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ash"
                    autoCapitalize="none"
                    value={formik.values.username}
                    onChangeText={(text) => formik.setFieldValue("username", text)}
                />
                <Text>Contraseña</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="*******"
                    minLenght="18"
                    value={formik.values.password}
                    onChangeText={(text) => formik.setFieldValue("password", text)}
                ></TextInput>
                <Button
                    style={styles.button}
                    title="Submit"
                    onPress={formik.handleSubmit}
                />
                <Text style={styles.error}>{formik.errors.username}</Text>
                <Text style={styles.error}>{formik.errors.password}</Text>

            </ScrollView>
        </SafeAreaView>
    )
}
function initialValues() {
    return {
      username: "",
      password: "",
    };
  }
  
  function validationSchema() {
    return {
      username: Yup.string().required("El usuario es obligatorio"),
      password: Yup.string().required("La contraseña es obligatoria"),
    };
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
        top: 45,
        justifyContent: 'center',
        backgroundColor: "#fff",
        alignContent: "center",
        alignItems: "center"
    },
    button: {
        backgroundColor: "#7895CB",
        color: "#000",
        borderRadius: 15,
    },
    error: {
        textAlign: "center",
        color: "#f00",
        marginTop: 20,
      },

})
