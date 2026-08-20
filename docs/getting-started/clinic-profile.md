---
sidebar_position: 2
---

# Setting Up Your Clinic Profile

Your clinic profile controls what patients see when they receive appointment confirmations, visit reminder links, and invoices from SuperMed.

## Basic information

Navigate to **Settings → Clinic Profile** and fill in:

- **Clinic name** — appears in emails, SMS reminders, and the patient-facing booking page (e.g. "Riverside Family Health").
- **Specialty** — used to tailor default intake form templates. Dr. Osei selects **Family Medicine**.
- **Time zone** — all appointment times, availability windows, and calendar exports use this setting. Get this right before you configure availability; changing it later shifts all future (not past) appointments to the new time zone.
- **Contact phone & address** — shown on invoices and used as the fallback contact number if a video call fails.

## Branding

Under **Settings → Clinic Profile → Branding**, you can upload:

- A clinic logo (SVG or PNG, transparent background recommended, max 2 MB) shown on the patient booking page and in the video waiting room.
- A primary brand color, used for buttons on the patient-facing booking page.
- A custom "from" name for email notifications (e.g. "Riverside Family Health" instead of the default "SuperMed Notifications").

:::info
Custom email sending domains (so reminders come from `@riversidefamilyhealth.com` instead of `@supermed.example`) require the **Practice** plan or higher and DNS verification. See [Custom notification domains](/faq/technical-faq#custom-domains).
:::

## Business hours

Set the hours your clinic is generally open under **Settings → Clinic Profile → Business Hours**. This does *not* control when patients can book appointments — that's handled per-provider in [Setting Your Availability](/scheduling/availability) — but it does control:

- When the automated phone/chat support widget shows "we're currently open" vs. "leave a message."
- The default range shown on the patient booking calendar before a specific provider is selected.

## Locations

If your clinic operates from more than one physical address (or you split time between an office and a home-based telehealth setup), add each as a **Location** under **Settings → Clinic Profile → Locations**. Each location can have:

- Its own address and phone number, shown on visit summaries for in-person follow-ups.
- Its own set of assigned providers.
- An optional "virtual-only" flag, which hides the address from patients entirely and shows only "Telehealth Visit."

Dr. Osei adds a single virtual-only location called "Riverside Telehealth" since Riverside Family Health does not see patients in person.

## Next steps

With your profile configured, continue to [Inviting Staff & Setting Roles](/getting-started/inviting-staff).
