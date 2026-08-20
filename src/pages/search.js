import {useEffect, useRef, useState} from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';

/**
 * Pagefind only produces /pagefind/* assets during `docusaurus build`
 * (via the `postbuild` script) — there is nothing to load in `npm start`.
 * This loads the pagefind-ui bundle client-side and mounts it into a div,
 * falling back to a friendly message when the assets aren't there yet.
 */
function PagefindSearch() {
  const containerRef = useRef(null);
  const [status, setStatus] = useState('loading');
  const pagefindCssUrl = useBaseUrl('pagefind/pagefind-ui.css');
  const pagefindJsUrl = useBaseUrl('pagefind/pagefind-ui.js');
  const pagefindBundlePath = useBaseUrl('pagefind/');

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
  }, [pagefindCssUrl, pagefindJsUrl, pagefindBundlePath]);

  return (
    <div>
      {status === 'loading' && <p>Loading search index…</p>}
      {status === 'unavailable' && (
        <div className="alert alert--warning" role="alert">
          <p style={{margin: 0}}>
            Search index not found. Pagefind only generates its index during
            a production build — run <code>npm run build</code> (which runs{' '}
            <code>pagefind</code> as a <code>postbuild</code> step) and then{' '}
            <code>npm run serve</code> to try search locally, or visit the
            deployed GitHub Pages site.
          </p>
        </div>
      )}
      <div ref={containerRef} id="pagefind-search" />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Layout title="Search" description="Search the SuperMed Help Center">
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Heading as="h1">Search</Heading>
            <p>Search across all SuperMed documentation and FAQs.</p>
            <BrowserOnly fallback={<p>Loading search…</p>}>
              {() => <PagefindSearch />}
            </BrowserOnly>
          </div>
        </div>
      </main>
    </Layout>
  );
}
