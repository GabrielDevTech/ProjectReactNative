
import React from "react";

import store from './store'
import { Provider } from 'react-redux'
import GlobalModal from './shared/components/modal/globalMolda/GlobalModal';
import Navigation from "./Navigation";

const App = () => {
    return (
        <Provider store={store}>
            <GlobalModal />
            <Navigation />
        </Provider>
    );
};


export default App;

