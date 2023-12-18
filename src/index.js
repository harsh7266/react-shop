import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ShopContextProvider } from './components/data/shop-Context';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
  <ShopContextProvider>

      <App />
    </ShopContextProvider>
  );




