import styled from "styled-components/native";
interface ContainerTextProps {
    color?: string,
    fontSize: string,
    fontFamily: 'Poppins-Bold' | 'Poppins-Regular' | 'Poppins-Ligth'
}
export const ContainerText = styled.Text<ContainerTextProps>`
    font-family:'Poppins-Black';
    ${(props) => props.color ? `color: ${props.color}` : ''};
    font-size: ${(props) => props.fontSize};
    font-family: ${(props) => props.fontFamily}
`;

