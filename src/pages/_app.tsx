import { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import "../../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="alternate icon"
          className="js-site-favicon"
          type="image/png"
          href="favicon/apple-touch-icon.png"
        />

        <link
          rel="mask-icon"
          href="favicon/favicon.svg"
          className="text-current"
          color="currentColor"
        />
        <link
          rel="icon"
          className="js-site-favicon"
          type="image/svg+xml"
          href="favicon/favicon.svg"
        />

        <meta name="theme-color" content="#2563EB" />
      </Head>
      <Component {...pageProps} />
      <Script
        async
        defer
        data-website-id="5027eb0b-e9bf-45d0-aef5-e49c44423fdf"
        src="https://analytics.traveler.dev/umami.js"
      />
    </>
  );
}

export default MyApp;
