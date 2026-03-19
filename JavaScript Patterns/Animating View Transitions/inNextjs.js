// pages/_app.js
import "@/styles/globals.css";
import { StrictMode } from "react";
import ViewTransition from "@/components/ViewTransition";

export default function App({ Component, pageProps }) {
  return (
    <ViewTransition>
      <StrictMode>
        <Component {...pageProps} />
      </StrictMode>
    </ViewTransition>
  );
}