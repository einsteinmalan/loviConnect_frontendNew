
 import reportWebVitals from './reportWebVitals';
import React from "react";
import "./index.css";
import App from "./App";
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import  {store} from "./store/index";

const container = document.getElementById('root');
reportWebVitals();

if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
      <App />
      </Provider>
    
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}


