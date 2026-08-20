---
sidebar_position: 2
---

# Patient Records

Every patient in VirtuCare has a chart containing demographics, visit history, clinical notes, intake responses, and attached documents.

## Creating a patient record manually

While most records are created automatically when a patient books through your [booking link](/scheduling/patient-booking-links), front-desk staff can also create one directly: **Patients → New Patient**. Required fields are name, date of birth, and either an email or phone number.

## Chart structure

Each patient chart is organized into tabs:

- **Overview** — demographics, insurance on file, emergency contact, flags (allergies, etc.).
- **Visit History** — past and upcoming appointments, with recordings/transcripts if enabled.
- **Clinical Notes** — signed and draft notes, organized by visit date.
- **Forms** — completed and pending intake forms.
- **Documents** — uploaded files (referral letters, lab results, insurance cards).
- **Billing** — invoices and payment history for this patient.

## Draft vs. signed clinical notes

Notes taken during a visit (see [Starting a Consultation](/video-consultations/starting-a-call)) remain editable **drafts** until a provider clicks **Sign & Lock**. Signed notes:

- Become read-only (edits require an addendum, which is timestamped and appended rather than replacing the original text).
- Are included if the patient requests a records export.
- Count toward the mandatory documentation your state's telehealth regulations may require to be finalized within a set number of days of the visit — VirtuCare shows a reminder banner on any draft note older than 5 days.

## Merging duplicate patients

If two records are created for the same person (e.g. a returning patient who booked with a slightly different email), an **Owner** or **Provider** can merge them from **Patients → [patient] → Merge Duplicate**. Merging combines visit history, forms, and documents into a single chart and is **not reversible** — VirtuCare shows a side-by-side comparison and requires typing "MERGE" to confirm.

## Sharing a chart with another provider

For clinics with multiple providers, a chart can be explicitly shared with a colleague (e.g. for a covering physician) via **Patient → Share Access**, which grants time-limited or standing view access without changing the patient's assigned primary provider.

## Patient-requested records export

Patients can request a full export of their record from their own patient portal (**My Health → Request My Records**), which generates a PDF of notes, forms, and visit summaries within 24 hours, consistent with standard patient right-of-access requirements. Providers can also trigger this on a patient's behalf from **Patient → Export Records**.
