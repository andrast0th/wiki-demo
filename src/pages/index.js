import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Starfield from '@site/src/components/Starfield';

import Heading from '@theme/Heading';
import styles from './index.module.css';

const STATS = [
  {value: '7', label: 'Doc sections'},
  {value: '21', label: 'Guides & FAQs'},
  {value: '100%', label: 'Client-side search'},
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <Starfield />
      <div className={clsx('container', styles.heroInner)}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          UNOFFICIAL DEMO WIKI
        </div>
        <Heading as="h1" className={styles.title}>
          <span>SuperMed</span>
          <span className={styles.titleGradient}>Help Center</span>
        </Heading>
        <p className={styles.subtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/intro">
            Browse the Docs
          </Link>
          <Link className={styles.arrowLink} to="/search">
            Search the docs <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className={styles.stats}>
          {STATS.map((stat, idx) => (
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
  return (
    <Layout
      title="Home"
      description="Documentation and FAQs for clinics running video consultations on SuperMed.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
