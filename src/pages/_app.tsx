import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState(false);

  const handleMode = () => {
    setMode((prev) => !prev);
  };

  return <Component {...pageProps} mode={mode} handleMode={handleMode} />;
}
