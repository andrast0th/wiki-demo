---
sidebar_position: 3
---

# Patient Booking Links

Every SuperMed clinic and provider gets a shareable booking link where patients can view availability and self-schedule, without needing a SuperMed account.

## Finding your link

- **Clinic-wide link:** `https://book.supermed.example/riverside-family-health`
- **Provider-specific link:** `https://book.supermed.example/riverside-family-health/dr-osei`

Both are available under **Schedule → Booking Links**, along with a QR code version suitable for printing on a business card or clinic signage.

## Embedding on your own website

If your clinic has an existing website, embed the booking widget with a copy-paste snippet from **Schedule → Booking Links → Embed**:

```html
<iframe
  src="https://book.supermed.example/riverside-family-health?embed=true"
  width="100%"
  height="700"
  frameborder="0">
</iframe>
```

The `embed=true` parameter removes SuperMed's header/footer chrome so the widget blends into your site.

## What patients see

1. Select an appointment type (only self-bookable types appear — see [Appointment Types](/scheduling/appointment-types)).
2. Choose a date and time from available slots.
3. Enter their name, date of birth, email, and phone number, or log into an existing SuperMed patient account.
4. Complete or defer the linked intake form.
5. Receive a confirmation email/SMS with the video visit link, added automatically to their calendar via an attached `.ics` file.

## New vs. returning patients

The booking flow automatically detects returning patients by matching email + date of birth against existing records, and pre-fills their information rather than asking them to re-enter it. If a match can't be made confidently, SuperMed creates a new patient record and flags it for front-desk review to check for accidental duplicates.

## Restricting who can book

Under **Schedule → Booking Links → Restrictions**, you can require:

- **State restriction** — only allow booking from patients physically located in states where the provider is licensed (uses the patient's stated address; SuperMed does not geofence by IP for this).
- **Existing patient only** — hides self-booking for new patients entirely, useful for specialty practices that only accept referrals.
- **Approval required** — new-patient bookings are held as "Requested" until a staff member confirms, rather than instantly confirming the slot.

## Disabling self-booking temporarily

Toggle **Pause Online Booking** under **Schedule → Booking Links** to immediately hide the booking page (visitors see a "currently not accepting online bookings" message) without deleting your configured availability — useful when a provider is out unexpectedly and you'd rather have front desk handle rescheduling by phone.
