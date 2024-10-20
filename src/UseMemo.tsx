import React, { useMemo, useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Memo = () => {
    const [value1, setValue1] = useState(1);
    const [value2, setValue2] = useState(2);

    useEffect(() => {
        console.log('Memo renderizado');
    }, []);

    const calc = useMemo(() => {
        let sum = 0;
        for (let i = 0; i < 1e4; i++) {
            sum += value1;
        }
        return sum;
    }, [value1]);

    return (
        <View style={styles.container}>
            <Text>{calc}</Text>
            <Button title={`Value 1: ${value1}`} onPress={() => setValue1(current => current + 1)} />
            <Button title={`Value 2: ${value2}`} onPress={() => setValue2(current => current + 1)} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Memo;