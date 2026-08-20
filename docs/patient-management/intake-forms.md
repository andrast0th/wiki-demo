---
sidebar_position: 1
---

# Digital Intake Forms

Intake forms collect patient information before a visit — history, current medications, reason for visit, and insurance details — so providers walk in prepared.

## Using a template

VirtuCare ships with specialty-specific starter templates selected based on the specialty you set in your [clinic profile](/getting-started/clinic-profile). Dr. Osei's **Family Medicine** template includes:

- Demographics & emergency contact
- Insurance information
- Current medications & allergies
- Reason for visit (free text)
- Standard consent-to-treat and telehealth consent language

Go to **Forms → Templates → Family Medicine Intake** to view or duplicate it before customizing.

## Customizing a form

Duplicate a template (editing the original template is disabled to avoid accidentally breaking the default) and use the form builder to add, remove, or reorder fields. Supported field types include short text, long text, single choice, multiple choice, date, file upload (e.g. photo of insurance card), and signature.

Dr. Osei adds a custom question, "Have you had a flu or COVID vaccine in the last 12 months?", as a required single-choice field.

## Assigning forms to appointment types

Forms aren't sent automatically unless linked to an [appointment type](/scheduling/appointment-types) under **Schedule → Appointment Types → [type] → Intake Form**. You can also manually send any form ad hoc from a patient's chart via **Send Form**.

## When forms are sent

By default, intake forms are emailed immediately upon booking, with a reminder sent 24 hours before the visit if not yet completed. Timing is configurable under **Forms → Settings → Send Timing**. Front desk staff can see completion status directly on the day's schedule as a colored dot (green = complete, yellow = started, red = not started).

## Required vs. optional completion

Under **Forms → Settings**, choose whether an incomplete intake form:

- **Blocks check-in** — the patient cannot be admitted from the waiting room until the form is submitted (a warning is shown to the provider with an override option), or
- **Is advisory only** — the provider sees a "form incomplete" flag but can proceed regardless.

Most solo practices, including Riverside Family Health, use advisory-only, since blocking check-in can create friction for patients who forget or have technical trouble with the form.

## Where responses go

Completed intake forms attach to the patient's chart under **Patient → Forms** and are visible to the provider before and during the visit in the side panel. Responses are also available in **Reports → Form Exports** as a CSV for practices that need to feed data into an external EHR.
