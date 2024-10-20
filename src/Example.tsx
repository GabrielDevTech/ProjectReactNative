import { Button, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

interface ExampleProps {
    text?: string;
    color?: string;
    children?: string;
}

const Example = ({ children, text }: ExampleProps) => {
    const [newText, setNewText] = useState('');



    useEffect(() => {
        console.log('passou aqui', newText, text, children);
    }, [newText, text, children]);

    useEffect(() => {
        console.log('Componente Example renderizado');
    });

    const handleOnPress = () => {
        setNewText('NOVO TEXTO');
    };


    return (
        <View>
            <Text style={{ color: 'pink' }}>{children}</Text>
            <Text style={{ color: 'blue' }}>{newText || text}</Text>
            <Button onPress={handleOnPress} title="Atualizar Texto" />
        </View>
    );
};

export default Example