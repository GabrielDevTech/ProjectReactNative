import { SafeAreaView, } from 'react-native';
import React, { useState } from "react";
import Login from './modules/login';
import Modal from './shared/components/modal/Modal';
import Button from './shared/components/button/Button';



const App = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (

        <SafeAreaView>
            <Modal
                onCloseModal={() => setModalVisible(false)}
                visible={modalVisible}
                title='TITULO TESTE'
                text='TEXTO TESTE' />
            <Button title='oppen' onPress={() => setModalVisible(true)} />
            <Login />
        </SafeAreaView>
    );
};


export default App;