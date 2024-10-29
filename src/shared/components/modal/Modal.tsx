import React from 'react';
import { Alert, ModalProps as ModalPropsReact, Modal as ModalReact } from 'react-native';
import { ContainerModal, IconCloseModal } from './modal.style';
import Text from '../text/Text';
import { theme } from '../../themes/theme';
import { textTypes } from '../text/textTypes';
import Button from '../button/Button';

interface ModalProps extends ModalPropsReact {
    title: string;
    text: string;
    onCloseModal: () => void;
}

const Modal = ({ onCloseModal, title, text, ...props }: ModalProps) => {


    return (
        <ModalReact
            animationType="slide"
            transparent={true}

            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                onCloseModal()
            }}
            {...props}
        >
            <ContainerModal>
                <Text
                    type={textTypes.PARAGRAPH_SEMI_BOLD}
                    color={theme.color.mainTheme.primary}
                >
                    {title}
                </Text>
                <Text type={textTypes.PARAGRAPH_SEMI_BOLD}>
                    {text}
                </Text>
                <IconCloseModal name='cross' onPress={onCloseModal} />
                <Button title='OK' onPress={onCloseModal}></Button>
            </ContainerModal>
        </ModalReact>
    );
}

export default Modal;