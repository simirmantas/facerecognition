import React from 'react';
import ReactDom from 'react-dom/client';
import 'tachyons';
import './index.css';
import App from './App';



const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App />);