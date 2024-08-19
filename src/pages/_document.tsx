/* eslint-disable @next/next/next-script-for-ga */
import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" />
      </Head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5T98LSZ7"
            height="0"
            width="0"
            loading="lazy"
          ></iframe>
        </noscript>
        <Main />
        <NextScript />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function() {
              function loadGTM() {
                (function(w,d,s,l,i){
                  w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});
                  var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                  j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;
                  f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-5T98LSZ7');
              }
                loadGTM();
            })();
          `}
        </Script>
      </body>
    </Html>
  );
}
