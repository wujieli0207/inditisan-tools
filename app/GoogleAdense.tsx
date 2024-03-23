'use client'

import Script from 'next/script'

const GoogleAdense = () => {
  return (
    <>
      <Script
        id="google-adense"
        strategy="afterInteractive"
        crossOrigin="anonymous"
        dangerouslySetInnerHTML={{
          __html: `
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADENSE}";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();
          `,
        }}
      />
    </>
  )
}

export default GoogleAdense
