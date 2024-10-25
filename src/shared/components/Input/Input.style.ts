import styled from "styled-components/native";
import { theme } from "../../themes/theme";

interface ContainerInputProps {
    isError?: boolean;
}
export const ContainerInput = styled.TextInput<ContainerInputProps>`
    width: 100%;
    height: 48px;
    padding: 16px;
    background-color: ${theme.color.neutralTheme.white};
    color: ${theme.color.neutralTheme.black};
    border-radius: 4px;
    border-width: 1px;
    border-color: ${theme.color.grayTheme.gray80};
    border-color: ${(props) => props.isError ? theme.color.orangeTheme.orange80 : theme.color.grayTheme.gray80};
`