import { SafeAreaView, } from 'react-native';
import React from "react";
import Login from './modules/login';
import store from './store'
import { Provider } from 'react-redux'
import GlobalModal from './shared/components/modal/globalMolda/GlobalModal';



const App = () => {
    return (
        <Provider store={store}>
            <GlobalModal />
            <SafeAreaView>
                <Login />
            </SafeAreaView>
        </Provider>
    );
};


export default App;

