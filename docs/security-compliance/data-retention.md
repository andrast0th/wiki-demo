---
sidebar_position: 2
---

# Data Retention

## Default retention periods

| Data type | Default retention | Configurable? |
|---|---|---|
| Patient charts, clinical notes | 10 years after last activity | No — matches typical state medical record requirements |
| Visit recordings | 90 days | Yes, 30–365 days or custom (Network plan) — see [Recording & Consent](/video-consultations/recording-consent#automatic-deletion) |
| Chat transcripts (in-visit chat) | 90 days | No |
| Deactivated staff accounts | 7 years | No |
| Audit logs | 7 years | No |
| Billing/invoice records | 7 years | No |

Clinical and billing retention periods are set conservatively to satisfy the longest common state and federal requirements across the jurisdictions VirtuCare operates in — check your own state's medical records retention law if your patients are concentrated in a single state, as some require longer minimums (VirtuCare's defaults will never fall below your state's floor).

## Requesting patient record deletion

Patients occasionally ask to have their data deleted. Because clinical records are subject to mandatory retention requirements, VirtuCare **cannot** delete an active patient chart on request in the way a typical consumer app might delete an account. Instead:

- Non-clinical data (e.g. marketing communication preferences, an unconfirmed account with no visit history) can be deleted.
- Clinical records can be marked **Restricted**, which hides them from routine staff views and search, while preserving them for the mandatory retention period as required by law. Only an **Owner** can apply or remove a restriction, and doing so is logged in the audit trail.

## Exporting data before deletion

Anything scheduled for deletion (e.g. a recording nearing the end of its retention window) can be exported beforehand from its respective location — recordings from **Patient → Visit History**, forms from **Reports → Form Exports**, invoices from **Billing → Reports**. Once a retention window closes, deletion happens automatically and is not reversible.

## Closing your clinic account

If you close your VirtuCare account (**Settings → Billing → Close Account**), patient clinical records are retained for the standard periods above even though the account is no longer active, since the retention obligation is tied to the records themselves, not to whether your subscription is current. You can request a full data export before closing — see **Settings → Compliance → Request Data Export**, which generates a downloadable archive within 5 business days.
