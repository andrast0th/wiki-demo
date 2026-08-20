// Shared helpers for anything that talks to Pagefind directly (the
// navbar search bar and the /search page), so the two don't drift.

// Pagefind ships built-in UI strings for several languages, but not
// Romanian — passed as PagefindUI's `translations` option so the search
// box, "N results for ...", "load more", etc. render in Romanian too.
export const PAGEFIND_TRANSLATIONS_RO = {
  placeholder: 'Caută',
  clear_search: 'Șterge',
  load_more: 'Încarcă mai multe rezultate',
  search_label: 'Caută pe acest site',
  filters_label: 'Filtre',
  zero_results: 'Niciun rezultat pentru [SEARCH_TERM]',
  one_result: '[COUNT] rezultat pentru [SEARCH_TERM]',
  many_results: '[COUNT] rezultate pentru [SEARCH_TERM]',
  alt_search:
    'Niciun rezultat pentru [SEARCH_TERM]. Se afișează rezultate pentru [DIFFERENT_TERM]',
  search_suggestion:
    'Niciun rezultat pentru [SEARCH_TERM]. Încearcă una dintre căutările următoare:',
  searching: 'Se caută [SEARCH_TERM]...',
};

// Pagefind's index/assets are built once at the site root (build/pagefind),
// not per-locale. useBaseUrl()/siteConfig.baseUrl both resolve to the
// *locale-scoped* baseUrl on non-default locales (e.g. "/wiki-demo/en/",
// matching that locale's own build/en/ output folder), which 404s against
// the shared, un-localized pagefind folder — so the locale segment has to
// be stripped back off here to get the true site-root path.
export function getRootBaseUrl({currentLocale, defaultLocale, baseUrl}) {
  return currentLocale === defaultLocale
    ? baseUrl
    : baseUrl.replace(new RegExp(`${currentLocale}/$`), '');
}

// Pagefind indexes the physical *.html files docusaurus build emits
// (trailingSlash:false), and links results to that literal path — but
// Docusaurus's own client-side router only knows the extension-less
// route (e.g. /billing/payments-invoicing, not
// /billing/payments-invoicing.html). Rewritten here to match.
export function toDocusaurusRoute(url) {
  if (!url) return url;
  const hashIndex = url.indexOf('#');
  const hash = hashIndex === -1 ? '' : url.slice(hashIndex);
  const path = hashIndex === -1 ? url : url.slice(0, hashIndex);
  return path.replace(/(?:index)?\.html$/, '') + hash;
}
