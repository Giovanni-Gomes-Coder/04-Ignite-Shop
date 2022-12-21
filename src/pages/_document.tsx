import { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '../styles'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />

        <style id='stitches' dangerouslySetInnerHTML={{ __html: getCssText() }}></style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}