import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="/images/logo.webp" rel="icon" type="image/webp" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
