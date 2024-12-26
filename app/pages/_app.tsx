import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css"; // Import Tailwind
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
import AOS from "aos";

function MyApp({ Component, pageProps }: AppProps) {
  console.log("MyApp");
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
