import { TouchableOpacityProps } from "react-native";
import { ButtonContainer } from "./button.style";
import React from "react";
import Text from "../text/Text";
import { theme } from "../../themes/theme";





interface ButtonProps extends TouchableOpacityProps {
    title: string;
    margin?: string;
}


const Button = ({ title, margin, ...props }: ButtonProps) => {
    return (
        <ButtonContainer margin={margin} {...props}>
            <Text color={theme.color.neutralTheme.white}>{title}</Text>
        </ButtonContainer>
    )

}


export default Button;