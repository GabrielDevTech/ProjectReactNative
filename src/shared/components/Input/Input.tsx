import React from "react";
import { ContainerInput } from "./Input.style";
import { TextInputProps } from "react-native";
import { DisplayFexCollumn } from "../globalStyles/globlaView.style";
import Text from "../text/Text";
import { theme } from "../../themes/theme";
import { textTypes } from "../text/textTypes";

interface InputProps extends TextInputProps {
    title?: string
}

const Input = ({ title, ...props }: InputProps) => {
    return (
        <DisplayFexCollumn>
            {title && (
                <Text margin="0px 0px 4px 8px"
                    color={theme.color.grayTheme.gray100}
                    type={textTypes.PARAGRAPH_SMALL_SEMI_BOLD}>
                    {title}
                </Text>
            )}
            <ContainerInput {...props} />
        </DisplayFexCollumn>
    );
};


export default Input;