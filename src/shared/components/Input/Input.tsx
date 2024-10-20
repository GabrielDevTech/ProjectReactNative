import React from "react";
import { ContainerInput } from "./Input.style";
import { TextInputProps } from "react-native/types";

type InputProps = TextInputProps;

const Input = ({ ...props }: InputProps) => {
    return (
        <ContainerInput {...props} />
    );
};


export default Input;