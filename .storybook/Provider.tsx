import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { EnhancedStore } from '@reduxjs/toolkit';

interface ProviderProps {
    children: React.ReactChildren | React.ReactNode;
    store: EnhancedStore;
}

const ProviderWrapper = (props: ProviderProps) => {
    return (
        <Provider store={props.store}>
            {/* @ts-ignore */}
            <Router>{props.children}</Router>
        </Provider>
    );
};

export default ProviderWrapper;
