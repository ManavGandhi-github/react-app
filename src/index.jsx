import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { AuthProvider } from "./context/AuthContext";
import { AnimatePresence } from "framer-motion";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <AuthProvider>
  <AnimatePresence>
    <App />
  </AnimatePresence>
</AuthProvider>
  
);



