import {useEffect, useRef, useState} from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate, {translate} from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import {
  PAGEFIND_TRANSLATIONS_RO,
  getRootBaseUrl,
  toDocusaurusRoute,
} from '@site/src/utils/pagefind';

function toDocusaurusResult(result) {
  if (!result) return result;
  return {
    ...result,
    url: toDocusaurusRoute(result.url),
    sub_results: result.sub_results?.map((sub) => ({
      ...sub,
      url: toDocusaurusRoute(sub.url),
    })),
  };
}

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
  const rootBaseUrl = getRootBaseUrl({
    currentLocale,
    defaultLocale: i18n.defaultLocale,
    baseUrl: siteConfig.baseUrl,
  });
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
          processResult: toDocusaurusResult,
          showSubResults: true,
          showImages: false,
          resetStyles: false,
        });

        // Carry over a query typed into the always-visible navbar search
        // bar (linked here as /search?q=...) into Pagefind's own input,
        // which owns its search state internally — poke its value and
        // dispatch a real "input" event so Pagefind picks it up.
        const initialQuery = new URLSearchParams(window.location.search).get(
          'q',
        );
        if (initialQuery) {
          const input = containerRef.current?.querySelector(
            'input.pagefind-ui__search-input',
          );
          if (input) {
            const setter = Object.getOwnPropertyDescriptor(
              window.HTMLInputElement.prototype,
              'value',
            ).set;
            setter.call(input, initialQuery);
            input.dispatchEvent(new Event('input', {bubbles: true}));
          }
        }

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
