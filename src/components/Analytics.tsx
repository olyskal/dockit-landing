'use client';

import { useEffect, Suspense } from 'react';
import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';

// Substitua pelo seu ID de medição do GA4
const GA_MEASUREMENT_ID = 'G-J6Y96KYTGY';

function AnalyticsContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname && window.gtag) {
      // Página visualizada
      window.gtag('event', 'page_view', {
        page_path: pathname,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

export default function Analytics() {

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Suspense fallback={null}>
        <AnalyticsContent />
      </Suspense>
    </>
  );
}

// Função para rastrear eventos de download
export function trackDownload(productType: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'download', {
      event_category: 'engagement',
      event_label: productType,
    });
  }
}
