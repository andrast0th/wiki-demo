---
sidebar_position: 2
---

# Appointment Types

Appointment types control visit length, which intake form is sent, and what shows up on the patient booking page.

## Creating an appointment type

From **Schedule → Appointment Types → New**, configure:

- **Name** — shown to patients (e.g. "New Patient Visit", "Follow-up", "Medication Review").
- **Duration** — in 5-minute increments, 10–120 minutes.
- **Intake form** — which form (if any) is auto-sent when this type is booked. See [Digital Intake Forms](/patient-management/intake-forms).
- **Visibility** — whether patients can self-book this type, or whether it's staff-only (e.g. for urgent same-day slots front desk schedules manually).
- **Price / billing code** — optional, used for self-pay invoicing and superbill generation. See [Payments & Invoicing](/billing/payments-invoicing).

## Example setup

Dr. Osei configures three appointment types for Riverside Family Health:

| Type | Duration | Intake form | Self-bookable |
|---|---|---|---|
| New Patient Visit | 45 min | Full intake + insurance | Yes |
| Follow-up | 20 min | Symptom check-in only | Yes |
| Urgent Same-Day | 15 min | None | No (front desk only) |

## Requiring a minimum booking notice

Under **Schedule → Appointment Types → [type] → Booking Rules**, set a minimum lead time (e.g. "patients must book at least 2 hours in advance") to avoid last-minute bookings you can't realistically prepare for, and a maximum booking window (e.g. "no more than 60 days out") to keep the calendar from filling with far-future placeholder appointments.

## Cancellation policy per type

Each appointment type can have its own cancellation window (e.g. "must cancel at least 24 hours ahead to avoid a fee"). This is display-only unless you've also connected a payment method under **Billing → Payment Settings**, in which case a configured no-show fee is automatically charged for late cancellations. See [Insurance & Payment Setup](/billing/insurance-setup).

## Reordering and archiving

Drag to reorder appointment types — the order shown here matches the order patients see on the booking page. Archiving (rather than deleting) a type keeps historical appointments of that type intact in reporting while removing it from future booking.
