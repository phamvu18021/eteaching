/* eslint-disable @next/next/next-script-for-ga */
import { Head, Html, Main, NextScript } from "next/document";
// eslint-disable-next-line no-unused-vars
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T9TX3NTQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            loading="lazy"
          ></iframe>
        </noscript>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T9TX3NTQ"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `
          }}
        />

        <Main />
        <NextScript />
        <script
          id="google-tag-manager"
          dangerouslySetInnerHTML={{
            __html: `            
            var timeoutID = setTimeout(function() {
                  (function(w,d,s,l,i){
                    w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});
                    var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                    j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;
                    f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-T9TX3NTQ')
                }, 8000);
                timeoutID();
            setTimeout(
              function() {
                    clearTimeout(timeoutID);
                  }, 5000);            
              `
          }}
        />
      </body>
    </Html>
  );
}
