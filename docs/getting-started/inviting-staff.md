---
sidebar_position: 3
---

# Inviting Staff & Setting Roles

Even a solo practice usually needs at least one additional login — for a medical assistant, front-desk coordinator, or billing contact. SuperMed uses role-based access so staff only see what they need.

## Roles overview

| Role | Can do | Cannot do |
|---|---|---|
| **Owner** | Everything, including billing and closing the account | — |
| **Provider** | Run video visits, view/edit charts for their own patients, manage their own availability | View other providers' patient records (unless explicitly shared), change clinic billing settings |
| **Front Desk** | Schedule/reschedule appointments, send intake forms, view appointment status | Join video visits, view clinical notes, access billing reports |
| **Billing** | View and manage invoices, insurance configuration, payment reports | Schedule appointments, view clinical notes |
| **Read-only Auditor** | View activity logs and reports | Change any settings, view PHI |

Roles can be combined — a staff member can be both **Front Desk** and **Billing**, for example.

## Sending an invite

1. Go to **Settings → Team → Invite Member**.
2. Enter the staff member's email and choose one or more roles.
3. If inviting a **Provider**, also select which **Location(s)** they'll be assigned to (see [Clinic Profile → Locations](/getting-started/clinic-profile#locations)).
4. Click **Send Invite**. The recipient gets an email with a link valid for 7 days.

Dr. Osei invites her medical assistant, Jordan, as **Front Desk + Billing**, so Jordan can manage the calendar and follow up on unpaid invoices, without being able to open patient video visits or clinical notes.

## Two-factor authentication

Because staff accounts can access PHI, SuperMed requires two-factor authentication (2FA) for every role except Read-only Auditor once your clinic has more than one active team member. Staff will be prompted to set up 2FA (authenticator app or SMS) on first login.

## Removing or downgrading access

Deactivate a departing staff member immediately from **Settings → Team**, rather than waiting until offboarding is "convenient" — deactivation immediately revokes API tokens and active sessions. Deactivated accounts are kept (not deleted) for 7 years to preserve the audit trail, in line with the retention policy described in [Data Retention](/security-compliance/data-retention).

## Next steps

Your account, clinic profile, and team are set up. Now configure how video visits will actually work: [Video & Audio Device Setup](/video-consultations/device-setup).
