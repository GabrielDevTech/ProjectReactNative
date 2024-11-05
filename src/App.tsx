import { SafeAreaView, } from 'react-native';
import React from "react";
import Login from './modules/login';
import store from './store'
import { Provider } from 'react-redux'



const App = () => {
    return (
        <Provider store={store}>
            <SafeAreaView>
                <Login />
            </SafeAreaView>
        </Provider>
    );
};


export default App;

