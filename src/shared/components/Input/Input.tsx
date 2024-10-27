import React, { useState } from "react";
import { ContainerInput, IconEye } from "./Input.style";
import { TextInputProps, View } from "react-native";
import { DisplayFexCollumn } from "../globalStyles/globlaView.style";
import Text from "../text/Text";
import { theme } from "../../themes/theme";
import { textTypes } from "../text/textTypes";


interface InputProps extends TextInputProps {
    title?: string;
    errorMessage?: string;
    secureTextEntry?: boolean;
    margin?: string;
}

const Input = ({ margin, secureTextEntry, errorMessage, title, ...props }: InputProps) => {
    const [currentSecure, setCurrentSecure] = useState<boolean>(!!secureTextEntry);


    const handleOnPressEye = () => {
        setCurrentSecure((current) => !current);
    };

    return (
        <DisplayFexCollumn customMargin={margin}>

            {title && (
                <Text margin="0px 0px 4px 8px"
                    color={theme.color.grayTheme.gray100}
                    type={textTypes.PARAGRAPH_SMALL_SEMI_BOLD}>
                    {title}
                </Text>
            )}

            <View>
                <ContainerInput
                    hasSecureTextEntry={secureTextEntry}
                    secureTextEntry={currentSecure}
                    {...props} isError={!!errorMessage} />
                {secureTextEntry && <IconEye onPress={handleOnPressEye} name={currentSecure ? 'eye' : 'eye-blocked'} size={20} color={theme.color.neutralTheme.black} />}

            </View>
            {errorMessage && (
                <Text
                    margin="0px 0px 0px 8px"
                    type={textTypes.PARAGRAPH_SMALL_SEMI_BOLD}
                    color={theme.color.orangeTheme.orange80}>
                    {errorMessage}
                </Text>
            )}
        </DisplayFexCollumn>
    );
};


export default Input;