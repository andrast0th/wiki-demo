import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    id: 'video',
    title: (
      <Translate id="homepage.feature.video.title">
        Video Consultations
      </Translate>
    ),
    emoji: '🎥',
    description: (
      <Translate id="homepage.feature.video.description">
        Configure waiting rooms, device settings, and recording consent so
        your video visits run smoothly for you and your patients.
      </Translate>
    ),
    to: '/video-consultations/device-setup',
  },
  {
    id: 'scheduling',
    title: (
      <Translate id="homepage.feature.scheduling.title">
        Scheduling & Booking
      </Translate>
    ),
    emoji: '🗓️',
    description: (
      <Translate id="homepage.feature.scheduling.description">
        Set your availability, define appointment types, and share a booking
        link patients can use to self-schedule visits.
      </Translate>
    ),
    to: '/scheduling/availability',
  },
  {
    id: 'billing',
    title: (
      <Translate id="homepage.feature.billing.title">
        Patients & Billing
      </Translate>
    ),
    emoji: '🩺',
    description: (
      <Translate id="homepage.feature.billing.description">
        Manage intake forms, patient records, e-prescriptions, insurance, and
        invoicing — all from one clinic dashboard.
      </Translate>
    ),
    to: '/patient-management/intake-forms',
  },
];

function Feature({emoji, title, description, to}) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={to} className={styles.featureCard}>
        <span className={styles.featureIcon} role="img" aria-hidden="true">
          {emoji}
        </span>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props) => (
            <Feature key={props.id} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
