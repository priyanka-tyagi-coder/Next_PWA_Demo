import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />

          <link rel="apple-touch-icon" href="images/icons/icon-72x72.png" />
          <link rel="apple-touch-icon" href="images/icons/icon-96x96.png" />
          <link rel="apple-touch-icon" href="images/icons/icon-128x128.png" />
          <link rel="apple-touch-icon" href="images/icons/icon-144x144.png" />
          <link rel="apple-touch-icon" href="images/icons/icon-152x152.png" />
          <link rel="apple-touch-icon" href="images/icons/icon-192x192.png" />
          <link rel="apple-touch-icon" href="images/icons/icon-384x384.png" />
          <link rel="apple-touch-icon" href="images/icons/icon-512x512.png" />
          <meta name="apple-mobile-web-app-status-bar" content="#db4938" />
          <meta name="theme-color" content="#db4938" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;