---
sidebar_position: 1
---

# HIPAA Compliance

VirtuCare is built to support HIPAA-compliant use by clinics, but compliance is a shared responsibility between VirtuCare (as your Business Associate) and your clinic (as the Covered Entity).

## Business Associate Agreement (BAA)

Before any real patient data is processed, your clinic must accept VirtuCare's Business Associate Agreement: **Settings → Compliance → Business Associate Agreement**. This is a required step during [account setup](/getting-started/account-setup) — accounts cannot be moved to production status without an accepted BAA on file.

## What VirtuCare handles

- **Encryption in transit and at rest** for all PHI, including video streams (SRTP/DTLS for live video), stored recordings, chart data, and forms.
- **Access controls and audit logging** — every view, edit, or export of a patient record is logged with the acting user, timestamp, and action (see **Settings → Compliance → Audit Log**).
- **Infrastructure-level safeguards** — redundant, access-controlled data centers and regular third-party security assessments.

## What your clinic is responsible for

- **Workforce training** — ensuring staff understand acceptable use, e.g. not sharing login credentials (VirtuCare's [role-based access](/getting-started/inviting-staff) exists precisely so individual staff don't need to share one login).
- **Minimum necessary access** — assigning roles that reflect what each staff member actually needs to see, rather than defaulting everyone to Owner-level access.
- **Device security** — providers and staff should use up-to-date browsers, lock their screens, and avoid accessing patient data on unsecured public Wi-Fi where reasonably avoidable.
- **Patient-facing consent** — for features like [visit recording](/video-consultations/recording-consent), your clinic determines when and how to use them within your own compliance posture.

## Audit log

**Settings → Compliance → Audit Log** shows a searchable, exportable record of PHI access across your clinic: who viewed which patient chart, when a note was signed or amended, when a recording was downloaded, and login/logout events. Read-only Auditor role staff (see [Inviting Staff](/getting-started/inviting-staff#roles-overview)) can view this without any other PHI access.

## Breach notification

If VirtuCare identifies a security incident affecting your clinic's data, notification procedures follow the timelines specified in your BAA. Clinic owners can review current incident status, if any, and past notices at **Settings → Compliance → Security Notices**.

## Session timeouts

To reduce the risk of an unattended, logged-in device exposing PHI, VirtuCare automatically signs staff out after a period of inactivity (default 30 minutes, configurable down to 10 minutes under **Settings → Compliance → Session Timeout** — it cannot be extended beyond 30 minutes for accounts with PHI access).
