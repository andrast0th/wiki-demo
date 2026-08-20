import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Starfield from '@site/src/components/Starfield';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function useStats() {
  return [
    {
      value: '7',
      label: translate({
        id: 'homepage.stats.sections',
        message: 'Doc sections',
      }),
    },
    {
      value: '21',
      label: translate({
        id: 'homepage.stats.guides',
        message: 'Guides & FAQs',
      }),
    },
    {
      value: '100%',
      label: translate({
        id: 'homepage.stats.search',
        message: 'Client-side search',
      }),
    },
  ];
}

function HomepageHeader() {
  const stats = useStats();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <Starfield />
      <div className={clsx('container', styles.heroInner)}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          <Translate id="homepage.badge">UNOFFICIAL DEMO WIKI</Translate>
        </div>
        <Heading as="h1" className={styles.title}>
          <span>DemoMed</span>
          <span className={styles.titleGradient}>
            <Translate id="homepage.title.helpCenter">Help Center</Translate>
          </span>
        </Heading>
        <p className={styles.subtitle}>
          <Translate id="homepage.subtitle">
            Documentation and FAQs for running your clinic on DemoMed
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/intro">
            <Translate id="homepage.cta.browseDocs">
              Browse the Docs
            </Translate>
          </Link>
          <Link className={styles.arrowLink} to="/search">
            <Translate id="homepage.cta.search">Search the docs</Translate>{' '}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className={styles.stats}>
          {stats.map((stat, idx) => (
            <div key={stat.label} className={styles.statItem}>
              {idx > 0 && <span className={styles.statDivider} />}
              <div>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const title = translate({id: 'homepage.meta.title', message: 'Home'});
  const description = translate({
    id: 'homepage.meta.description',
    message:
      'Documentation and FAQs for clinics running video consultations on DemoMed.',
  });
  return (
    <Layout title={title} description={description}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
