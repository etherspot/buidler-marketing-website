import React from "react";
import ReactDOM from "react-dom/client";
import "./init";
import App from "./App";
import "./index.css";
import WagmiProvider from "./WagmiProvider/WagmiProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WagmiProvider>
      <App />
    </WagmiProvider>
  </React.StrictMode>
);
