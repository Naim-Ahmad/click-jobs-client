import emailjs from '@emailjs/browser';
import { ThemeProvider } from "@material-tailwind/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./context/AuthProvider.jsx";
import "./index.css";
import router from "./routes/routes.jsx";

emailjs.init("hHTXS9JawQYx_zKJU")

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <HelmetProvider>
          <QueryClientProvider client={client}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </HelmetProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
