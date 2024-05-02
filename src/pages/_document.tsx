import { Head, Html, Main, NextScript } from "next/document";
// eslint-disable-next-line no-unused-vars
import Script from "next/script";

export default function Document() {
  // eslint-disable-next-line no-unused-vars
  const GA_ID = process.env.NEXT_PUBLIC_GA || "G-B2032WPKYW";

  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
        {/* <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WXW3K2P');
        `}
        </Script>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        ></Script>
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_ID}');
        `,
          }}
        ></Script> */}
      </Head>
      <body>
        {/* <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WXW3K2P"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        /> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
