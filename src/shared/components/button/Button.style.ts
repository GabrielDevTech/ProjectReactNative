import styled from "styled-components/native";
import { theme } from "../../themes/theme";
import LinearGradient from "react-native-linear-gradient";

interface ButtonContainerProps {
    margin?: string;
}
export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
    width: 100%;
    height: 48px;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    ${(props) => props.margin ? `margin: ${props.margin};` : ''};
    flex-direction: row;
`
export const GradientButton = styled(LinearGradient) <ButtonContainerProps>`
    width: 100%;
    height: 100%;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    ${(props) => props.margin ? `margin: ${props.margin};` : ''};
    flex-direction: row;
`
export const ButtonSecondary = styled(ButtonContainer) <ButtonContainerProps>`
    ${(props) => props.margin ? `margin: ${props.margin};` : ''};
    background-color: transparent;
    border-width:1px;
    border-color: ${theme.color.mainTheme.primary};
`
export const ButtonDisable = styled(ButtonContainer) <ButtonContainerProps>`
    background-color: ${theme.color.grayTheme.gray100};
`

export const ActivityIndicator = styled.ActivityIndicator`
    margin-left: 8px;
`