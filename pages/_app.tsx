import "../styles/globals.css";
import type { AppProps } from "next/app";
import { LanguageProvider } from '../contexts/LanguageContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <div className="min-h-screen transition-colors duration-300">
        <Component {...pageProps} />
      </div>
    </LanguageProvider>
  );
}
