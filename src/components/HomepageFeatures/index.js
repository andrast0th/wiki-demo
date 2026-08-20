import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Video Consultations',
    emoji: '🎥',
    description: (
      <>
        Configure waiting rooms, device settings, and recording consent so
        your video visits run smoothly for you and your patients.
      </>
    ),
    to: '/video-consultations/device-setup',
  },
  {
    title: 'Scheduling & Booking',
    emoji: '🗓️',
    description: (
      <>
        Set your availability, define appointment types, and share a booking
        link patients can use to self-schedule visits.
      </>
    ),
    to: '/scheduling/availability',
  },
  {
    title: 'Patients & Billing',
    emoji: '🩺',
    description: (
      <>
        Manage intake forms, patient records, e-prescriptions, insurance, and
        invoicing — all from one clinic dashboard.
      </>
    ),
    to: '/patient-management/intake-forms',
  },
];

function Feature({emoji, title, description, to}) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={to} className={styles.featureCard}>
        <div className="text--center">
          <span className={styles.featureEmoji} role="img" aria-hidden="true">
            {emoji}
          </span>
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
