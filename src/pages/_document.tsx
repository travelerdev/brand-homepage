import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* HACK(zack): Inline opacity-0 so we don't have a flash while css loads */}
          <style>{".opacity-0 { opacity: 0; }"}</style>
        </Head>
        <body className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
