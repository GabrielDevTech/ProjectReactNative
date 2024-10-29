import styled from "styled-components/native";
import { theme } from "../../themes/theme";
import { Icon } from "../icon/icon";
import { Platform } from "react-native";

export const ContainerModal = styled.View`

    background-color: ${theme.color.neutralTheme.white};
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    position: absolute;
    bottom: 0px;
    height: 200px;
    padding: 16px;
    z-index: 9;

    ${Platform.select({
    ios: `
            shadow-color: ${theme.color.neutralTheme.black};
            shadow-offset: 0px -2px;
            shadow-opacity: 0.25;
            shadow-radius: 4px;
        `,
    android: `
            elevation: 10;
        `
})}
`;

export const IconCloseModal = styled(Icon)`
    position: absolute;
    right: 24px;
    top: 24px;
    z-index: 10;
`