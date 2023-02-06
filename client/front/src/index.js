import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store/storeIndex";
import { Provider } from "react-redux";
import axios from 'axios';
import { Auth0Provider } from "@auth0/auth0-react";

axios.defaults.baseURL = "http://localhost:3001";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
      <Auth0Provider 
                domain="dev-qbpt8eaprzg0wfvf.eu.auth0.com" 
                clientId="JlEe3AB9FZaRWMcClP6ykipsPweRhPBg" 
                authorizationParams={{
                redirect_uri: window.location.origin}}>
            <App />
        </Auth0Provider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
