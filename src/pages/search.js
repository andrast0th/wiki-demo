import {useEffect, useRef, useState} from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate, {translate} from '@docusaurus/Translate';
import Heading from '@theme/Heading';

// Pagefind ships built-in UI strings for several languages, but not
// Romanian — this is passed as the `translations` option so the search
// box, "N results for ...", "load more", etc. render in Romanian too.
const PAGEFIND_TRANSLATIONS_RO = {
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

/**
 * Pagefind only produces /pagefind/* assets during `docusaurus build`
 * (via the `postbuild` script) — there is nothing to load in `npm start`.
 * This loads the pagefind-ui bundle client-side and mounts it into a div,
 * falling back to a friendly message when the assets aren't there yet.
 */
function PagefindSearch() {
  const containerRef = useRef(null);
  const [status, setStatus] = useState('loading');
  const {i18n, siteConfig} = useDocusaurusContext();
  const currentLocale = i18n.currentLocale;
  // Pagefind's index/assets are built once at the site root (build/pagefind),
  // not per-locale. useBaseUrl() and siteConfig.baseUrl both resolve to the
  // *locale-scoped* baseUrl on non-default locales (e.g. "/wiki-demo/ro/",
  // matching that locale's own build/ro/ output folder), which 404s against
  // the shared, un-localized pagefind folder — so the locale segment has to
  // be stripped back off here to get the true site-root path.
  const rootBaseUrl =
    currentLocale === i18n.defaultLocale
      ? siteConfig.baseUrl
      : siteConfig.baseUrl.replace(new RegExp(`${currentLocale}/$`), '');
  const pagefindCssUrl = `${rootBaseUrl}pagefind/pagefind-ui.css`;
  const pagefindJsUrl = `${rootBaseUrl}pagefind/pagefind-ui.js`;
  const pagefindBundlePath = `${rootBaseUrl}pagefind/`;

  useEffect(() => {
    let cancelled = false;

    async function init() {
      try {
        const cssHref = pagefindCssUrl;
        if (!document.querySelector(`link[href="${cssHref}"]`)) {
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = cssHref;
          document.head.appendChild(link);
        }

        await import(/* webpackIgnore: true */ pagefindJsUrl);

        if (cancelled) return;

        if (typeof window.PagefindUI === 'undefined') {
          throw new Error('PagefindUI failed to load');
        }

        // eslint-disable-next-line no-new
        new window.PagefindUI({
          element: containerRef.current,
          bundlePath: pagefindBundlePath,
          language: currentLocale,
          translations:
            currentLocale === 'ro' ? PAGEFIND_TRANSLATIONS_RO : undefined,
          showSubResults: true,
          showImages: false,
          resetStyles: false,
        });

        setStatus('ready');
      } catch (err) {
        if (!cancelled) setStatus('unavailable');
      }
    }

    init();
    return () => {
      cancelled = true;
    };
  }, [pagefindCssUrl, pagefindJsUrl, pagefindBundlePath, currentLocale]);

  return (
    <div>
      {status === 'loading' && (
        <p>
          <Translate id="search.loading">Loading search index…</Translate>
        </p>
      )}
      {status === 'unavailable' && (
        <div className="alert alert--warning" role="alert">
          <p style={{margin: 0}}>
            <Translate
              id="search.unavailable"
              values={{
                buildCmd: <code>npm run build</code>,
                pagefindCmd: <code>pagefind</code>,
                postbuildCmd: <code>postbuild</code>,
                serveCmd: <code>npm run serve</code>,
              }}>
              {
                'Search index not found. Pagefind only generates its index during a production build — run {buildCmd} (which runs {pagefindCmd} as a {postbuildCmd} step) and then {serveCmd} to try search locally, or visit the deployed GitHub Pages site.'
              }
            </Translate>
          </p>
        </div>
      )}
      <div ref={containerRef} id="pagefind-search" />
    </div>
  );
}

export default function SearchPage() {
  const title = translate({id: 'search.meta.title', message: 'Search'});
  const description = translate({
    id: 'search.meta.description',
    message: 'Search the DemoMed Help Center',
  });
  return (
    <Layout title={title} description={description}>
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Heading as="h1">
              <Translate id="search.heading">Search</Translate>
            </Heading>
            <p>
              <Translate id="search.description">
                Search across all DemoMed documentation and FAQs.
              </Translate>
            </p>
            <BrowserOnly
              fallback={
                <p>
                  <Translate id="search.loadingFallback">
                    Loading search…
                  </Translate>
                </p>
              }>
              {() => <PagefindSearch />}
            </BrowserOnly>
          </div>
        </div>
      </main>
    </Layout>
  );
}
