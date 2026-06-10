// Paylaşılan JSON-LD schema yardımcıları. BaseLayout @graph'a ek node olarak geçilir.
const SITE = 'https://okmenhavalandirma.com';
const ORG_ID = `${SITE}/#organization`;

export interface Crumb {
  name: string;
  path: string; // örn /urunler/aksiyal-fan/
}

/** Görünür breadcrumb ile eşleşen BreadcrumbList schema */
export function breadcrumb(items: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE}${it.path}`,
    })),
  };
}

/** FAQPage schema — rich result + dönüşüm */
export function faqPage(qa: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: qa.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

/** Service schema — mevcut ana organizasyona @id ile bağlanır (ayrı LocalBusiness yaratmaz) */
export function service(opts: {
  serviceType: string;
  description: string;
  areaServed: string[];
}) {
  return {
    '@type': 'Service',
    serviceType: opts.serviceType,
    description: opts.description,
    provider: { '@id': ORG_ID },
    areaServed: opts.areaServed.map((name) => ({ '@type': 'City', name })),
  };
}
