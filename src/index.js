import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { MainLayout } from './components/MainLayout';
import { configureStore } from './store';

import "./styles/reset.css"

const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <StrictMode>
      <MainLayout />
    </StrictMode>
  </Provider>
);