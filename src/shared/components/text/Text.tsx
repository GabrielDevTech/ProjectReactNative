import React, { useMemo } from "react";
import { TextProps as TextPropsNative } from "react-native";
import { ContainerText } from "./Text.style";
import { textTypes } from "./textTypes";


interface TextProps extends TextPropsNative {
    color?: string,
    type?: string,

}

const Text = ({ type, color, ...props }: TextProps) => {
    const handleFontSize = useMemo(() => {
        switch (type) {
            case textTypes.TITLE:
                return '32px';
            default:
                return '16px'
        }
    }, []);


    return <ContainerText fontSize={handleFontSize} color={color} {...props} />

}


export default Text;