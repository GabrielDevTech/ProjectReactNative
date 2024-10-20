import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const Input1 = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>comeco</Text>
            <TextInput style={styles.input} />
            <Text>fim</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },
    input: {
        backgroundColor: '#ddd',
        width: 200,
        height: 40,
        padding: 10,
        margin: 20,
    },
    text: {
        fontSize: 60,
        marginTop: 50,
        margin: 20,
        color: 'black',
    }
});

export default Input1;