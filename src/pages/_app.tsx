import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import "../../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {process.env.NODE_ENV !== "development" && (
          <script
            async
            defer
            data-domain="convertify.photos"
            src="https://plausible.io/js/plausible.js"
          />
        )}

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
        <meta name="color-scheme" content="light dark" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
