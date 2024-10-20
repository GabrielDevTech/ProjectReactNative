import { Text, SafeAreaView, StyleSheet } from 'react-native';
import React from "react";
import styled from 'styled-components/native';
import Example from './Example';


const TextNew = styled.Text`
    font-size: 24px;
    color: #80819c;
`

const StyledComponets = () => {
    return (
        <SafeAreaView>
            <Example />
            <Text style={styles.container}>Testando</Text>
            <TextNew>NOVO TEXTE</TextNew>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        color: 'blue',
    }
});

export default StyledComponets;