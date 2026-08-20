---
sidebar_position: 1
---

# Setting Your Availability

Availability determines the time slots patients can select when booking a video visit. It's configured per-provider, so each physician in a multi-provider clinic manages their own.

## Setting a weekly schedule

Go to **Schedule → Availability** and define recurring weekly hours, for example:

```
Monday      9:00 AM – 12:00 PM, 1:00 PM – 4:30 PM
Tuesday     9:00 AM – 4:30 PM
Wednesday   Off
Thursday    9:00 AM – 4:30 PM
Friday      9:00 AM – 1:00 PM
```

Dr. Osei blocks out Wednesdays entirely for administrative work and chart review, and shortens Friday to a half-day.

## Buffer time between visits

Under **Schedule → Availability → Buffers**, set a buffer (default 5 minutes, up to 30) automatically inserted after each appointment. This time is not bookable by patients and gives providers a moment to finish notes before the next visit starts.

## Appointment slot length

Slot length is set per **appointment type** (see [Appointment Types](/scheduling/appointment-types)) rather than globally — a "New Patient" visit might default to 45 minutes while a "Follow-up" is 20 minutes, and both can be offered within the same availability window.

## Blocking time off

For one-off exceptions — vacation, a conference, a half-day out sick — use **Schedule → Time Off** rather than editing your recurring weekly hours. Time off:

- Immediately removes those slots from the patient booking page.
- Optionally auto-cancels and notifies patients who already had appointments booked in that window (you'll be prompted to choose per block).
- Can be set as a one-time range or a recurring pattern (e.g. "first Monday of every month").

## Multi-provider clinics: shared vs. individual booking links

In clinics with more than one provider, **Settings → Team** lets you decide whether patients book:

- **Directly with a specific provider** (via that provider's individual booking link), or
- **With "next available provider"** using a shared clinic booking link, where VirtuCare assigns the earliest matching slot across all providers who offer that appointment type.

Riverside Family Health, being a solo practice, uses only the individual provider link — see [Patient Booking Links](/scheduling/patient-booking-links) for how to share it.

## Time zone handling

Availability is stored in the time zone set on your [clinic profile](/getting-started/clinic-profile), but the patient booking page automatically converts displayed times to the visitor's local browser time zone, with the clinic's time zone shown in parentheses as a reference (e.g. "2:00 PM (3:00 PM ET)").
