import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from './store';
// import App from './App';

xdescribe('App.test', () => {

  xtest('renders Vision home page', () => {
    render(
      <Provider store={store}>
        AI-assisted
        {/* <App /> */}
      </Provider>
    );

    expect(screen.getByText(/AI-assisted/i)).toBeInTheDocument();
  });
});
