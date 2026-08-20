import {useCallback, useEffect, useRef, useState} from 'react';
import {useHistory} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {translate} from '@docusaurus/Translate';
import {getRootBaseUrl, toDocusaurusRoute} from '@site/src/utils/pagefind';
import styles from './styles.module.css';

const MAX_RESULTS = 6;

// A pagefind instance persists across navbar re-renders (the component
// stays mounted across client-side route changes), so the core module is
// only ever loaded/configured once per page load.
let pagefindPromise = null;
function loadPagefind(baseUrl) {
  if (!pagefindPromise) {
    pagefindPromise = import(
      /* webpackIgnore: true */ `${baseUrl}pagefind/pagefind.js`
    ).then(async (pagefind) => {
      // `baseUrl` here is the site root pagefind resolves each result's
      // stored (relative) content url against — NOT the folder the
      // pagefind assets themselves live in (that's auto-detected from
      // this very import's own URL). Passing the pagefind folder here by
      // mistake doubles it into every result url (.../pagefind/pagefind/...).
      await pagefind.options({baseUrl});
      await pagefind.init();
      return pagefind;
    });
  }
  return pagefindPromise;
}

export default function NavbarSearchBar() {
  const {i18n, siteConfig} = useDocusaurusContext();
  const history = useHistory();
  const rootBaseUrl = getRootBaseUrl({
    currentLocale: i18n.currentLocale,
    defaultLocale: i18n.defaultLocale,
    baseUrl: siteConfig.baseUrl,
  });

  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null); // null = not searched yet
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);
  const searchIdRef = useRef(0);

  const placeholder = translate({
    id: 'navbarSearch.placeholder',
    message: 'Search',
  });
  const noResultsLabel = translate({
    id: 'navbarSearch.noResults',
    message: 'No results',
  });
  const seeAllLabel = translate({
    id: 'navbarSearch.seeAll',
    message: 'See all results',
  });

  useEffect(() => {
    function onKeyDown(e) {
      const active = document.activeElement;
      const typing =
        active &&
        (active.tagName === 'INPUT' ||
          active.tagName === 'TEXTAREA' ||
          active.isContentEditable);
      if (e.key === '/' && !typing) {
        e.preventDefault();
        inputRef.current?.focus();
      } else if (e.key === 'Escape') {
        setOpen(false);
        inputRef.current?.blur();
      }
    }
    function onClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onClickOutside);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, []);

  const runSearch = useCallback(
    async (value) => {
      const thisSearchId = ++searchIdRef.current;
      if (!value.trim()) {
        setResults(null);
        return;
      }
      try {
        const pagefind = await loadPagefind(rootBaseUrl);
        const search = await pagefind.debouncedSearch(value, {}, 150);
        // A newer keystroke superseded this one (debouncedSearch returns
        // null in that case), or the input changed while we awaited.
        if (!search || thisSearchId !== searchIdRef.current) return;
        const data = await Promise.all(
          search.results
            .slice(0, MAX_RESULTS)
            .map((r) => r.data().catch(() => null)),
        );
        if (thisSearchId !== searchIdRef.current) return;
        setResults(data.filter(Boolean));
      } catch {
        if (thisSearchId === searchIdRef.current) setResults([]);
      }
    },
    [rootBaseUrl],
  );

  function onChange(e) {
    const value = e.target.value;
    setQuery(value);
    setOpen(true);
    runSearch(value);
  }

  function goToResult(url) {
    setOpen(false);
    setQuery('');
    setResults(null);
    history.push(toDocusaurusRoute(url));
  }

  // siteConfig.baseUrl is locale-scoped (e.g. "/wiki-demo/en/" on the
  // English build) — exactly what a same-site route like /search needs.
  // history.push() does NOT add this itself (unlike Docusaurus's own
  // <Link>, which resolves it internally before pushing); pushing a bare
  // "/search" 404s because it's missing the site's baseUrl entirely.
  function searchPageUrl(q) {
    return `${siteConfig.baseUrl}search?q=${encodeURIComponent(q)}`;
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!query.trim()) return;
    setOpen(false);
    history.push(searchPageUrl(query.trim()));
  }

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <form className={styles.form} onSubmit={onSubmit} role="search">
        <svg
          className={styles.icon}
          viewBox="0 0 18 18"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.4 11h-.7l-.3-.3c1-1.1 1.6-2.6 1.6-4.2C13 2.9 10.1 0 6.5 0S0 2.9 0 6.5 2.9 13 6.5 13c1.6 0 3.1-.6 4.2-1.6l.3.3v.7L16 17.5 17.5 16 12.4 11zm-5.9 0C4 11 2 9 2 6.5S4 2 6.5 2 11 4 11 6.5 9 11 6.5 11z"
            fill="currentColor"
          />
        </svg>
        <input
          ref={inputRef}
          type="search"
          className={styles.input}
          placeholder={placeholder}
          aria-label={placeholder}
          value={query}
          onChange={onChange}
          onFocus={() => setOpen(true)}
        />
      </form>
      {open && results !== null && (
        <div className={styles.dropdown}>
          {results.length === 0 ? (
            <div className={styles.empty}>{noResultsLabel}</div>
          ) : (
            <>
              <ul className={styles.resultList}>
                {results.map((result) => (
                  <li key={result.url}>
                    <a
                      href={toDocusaurusRoute(result.url)}
                      className={styles.resultLink}
                      onClick={(e) => {
                        e.preventDefault();
                        goToResult(result.url);
                      }}>
                      <span className={styles.resultTitle}>
                        {result.meta?.title || result.url}
                      </span>
                      {result.excerpt && (
                        <span
                          className={styles.resultExcerpt}
                          // Pagefind returns a sanitized excerpt with
                          // <mark> tags around matched terms.
                          dangerouslySetInnerHTML={{__html: result.excerpt}}
                        />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className={styles.seeAll}
                onClick={() => {
                  setOpen(false);
                  history.push(searchPageUrl(query.trim()));
                }}>
                {seeAllLabel} →
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
