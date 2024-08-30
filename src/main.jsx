import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const htmlDom = document.getElementById("root");
const reactDom = (
  <StrictMode>
    <App />
  </StrictMode>
);

createRoot(htmlDom).render(reactDom);
