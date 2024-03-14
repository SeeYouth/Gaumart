import "./index.scss";

import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";

import App from "./pages/App";
import Contact from "./pages/Contact";
import FormSubmit from "./pages/FormSubmit";
import Quote from "./pages/Quote";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/devis" element={<FormSubmit />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
