import { TouchableOpacityProps } from "react-native";
import { ButtonContainer } from "./button.style";
import React from "react";
import Text from "../text/Text";
import { theme } from "../../themes/theme";
import { textTypes } from "../text/textTypes";




interface ButtonProps extends TouchableOpacityProps {
    title: string;
    margin?: string;
}


const Button = ({ title, margin, ...props }: ButtonProps) => {
    return (
        <ButtonContainer margin={margin} {...props}>
            <Text type={textTypes.TITLE} color={theme.color.neutralTheme.white}>{title}</Text>
        </ButtonContainer>
    )

}


export default Button;