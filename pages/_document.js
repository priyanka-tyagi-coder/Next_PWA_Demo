import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#fff" />
         
        </Head>
        <body>
        {/* <script src="https://www.gstatic.com/firebasejs/7.20.0/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/7.20.0/firebase-messaging.js"></script> */}
  {/* <script src="https://www.gstatic.com/firebasejs/7.20.0/firebase-messaging.js"></script> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;