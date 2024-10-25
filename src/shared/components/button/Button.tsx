import { TouchableOpacityProps } from "react-native";
import { ActivityIndicator, ButtonContainer, ButtonDisable, ButtonSecondary, GradientButton } from "./button.style";
import React from "react";
import Text from "../text/Text";
import { theme } from "../../themes/theme";
import { textTypes } from "../text/textTypes";






interface ButtonProps extends TouchableOpacityProps {
    title: string;
    margin?: string;
    type?: string;
    loading?: boolean;
    disable?: boolean;
    onPress: () => void
}


const Button = ({ title, type, loading, margin, onPress, disable, ...props }: ButtonProps) => {
    const handleOnPress = () => {
        if (!loading && !disable && onPress) {
            onPress();
        }
    }
    const renderText = (color: string) => (
        <>
            <Text type={textTypes.BUTTON_SEMI_BOLD} color={color}>
                {title}
            </Text>
            {loading && <ActivityIndicator color={theme.color.neutralTheme.white} />}
        </>
    );
    if (disable) {
        return (
            <ButtonDisable {...props} margin={margin}>
                {renderText(theme.color.neutralTheme.white)}
            </ButtonDisable>
        );
    }
    switch (type) {
        case theme.buttons.buttonsTheme.secondary:
            return (
                <ButtonSecondary {...props} margin={margin} onPress={handleOnPress}>
                    {renderText(theme.color.mainTheme.primary)}
                </ButtonSecondary>
            )
        case theme.buttons.buttonsTheme.primary:
        default:
            return (
                <ButtonContainer {...props} margin={margin} onPress={handleOnPress}>
                    <GradientButton start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 1.0 }} colors={[theme.color.purpleTheme.purple80, theme.color.pinkTheme.pink80]}>
                        {renderText(theme.color.neutralTheme.white)}
                    </GradientButton>
                </ButtonContainer>
            )
    }

}


export default Button;