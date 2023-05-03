import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState(false);

  const handleMode = () => {
    setMode((prev) => !prev);

    console.log(mode);
  };

  return <Component {...pageProps} mood={mode} handleMode={handleMode} />;
}
