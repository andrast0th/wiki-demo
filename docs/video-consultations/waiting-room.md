---
sidebar_position: 2
---

# Configuring the Waiting Room

The waiting room is what a patient sees when they click their visit link before the provider has joined. Configuring it well reduces no-shows and last-minute confusion.

## Enabling the waiting room

Waiting rooms are **on by default** for all new clinics and can be managed under **Settings → Video → Waiting Room**. With it enabled:

- Patients who click their visit link are placed in a holding screen and cannot see or hear the provider until admitted.
- Providers see a notification badge with the count of patients currently waiting.
- The provider explicitly admits each patient by clicking **Admit** from the visit dashboard.

Turning the waiting room off lets patients join the call directly once the provider starts it — this is only recommended for group visits or clinics that pre-verify patient identity another way, since it removes the identity-check step described below.

## Identity check

While in the waiting room, patients are asked to confirm:

- Full legal name
- Date of birth

This is shown to the provider next to the **Admit** button so you can cross-check it against the scheduled appointment before letting someone into the visit — important for shared devices or family accounts where the wrong household member might click the link.

## Custom waiting room message

Under **Settings → Video → Waiting Room → Message**, set custom text shown to waiting patients, for example:

> "Thanks for joining, Dr. Osei will be with you shortly. If you haven't already, please complete your intake form — a link was sent to your email."

You can also enable **Show estimated wait time**, which pulls from the provider's current visit duration to give patients a rough estimate.

## Multiple patients waiting

When several patients are in the waiting room simultaneously (common if a provider is running behind schedule), the list is sorted by scheduled appointment time, not by arrival time — so a patient who joins early for a 2:00 PM visit won't jump ahead of a patient scheduled for 1:45 PM who joined a minute later.

## Late patients and no-shows

If a patient hasn't joined the waiting room within the grace period configured under **Settings → Video → No-show Grace Period** (default 10 minutes), the appointment is automatically flagged as **No-show** in the schedule, and a follow-up email is optionally sent (configurable in **Settings → Notifications**).

## Next steps

Once the waiting room is configured, review [Starting a Consultation](/video-consultations/starting-a-call) for the actual in-visit workflow.
