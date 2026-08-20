---
sidebar_position: 3
---

# E-Prescriptions

VirtuCare integrates with a certified e-prescribing network to let providers send prescriptions directly to a patient's pharmacy during or after a video visit.

## Enabling e-prescribing

E-prescribing must be enabled per-provider, since it requires validating individual DEA and state license numbers: **Settings → Prescribing → Enable for [Provider Name]**. You'll need:

- Active DEA number (for controlled substances) and/or NPI number.
- State license number(s) for every state you're prescribing into.
- Completion of identity proofing required for EPCS (Electronic Prescribing of Controlled Substances), which involves a third-party identity verification step and, in most cases, two-factor authentication at the time of signing a controlled-substance prescription.

Verification for non-controlled prescribing typically takes 1–2 business days; EPCS approval can take up to 2 weeks due to the additional identity-proofing step.

## Sending a prescription during a visit

From the in-visit clinical notes panel (see [Starting a Consultation](/video-consultations/starting-a-call)), click **Prescribe** to:

1. Search the medication database by name.
2. Select dose, quantity, refills, and directions (SIG).
3. Choose the patient's pharmacy — VirtuCare pulls previously used pharmacies for that patient, or you can search by name/location.
4. Review and sign. Controlled substances require re-entering your 2FA code at this step even if you're already logged in.

## Checking prescription status

Sent prescriptions appear under **Patient → Prescriptions** with a status: **Sent**, **Received by pharmacy**, **Filled**, or **Error**. Errors (e.g. pharmacy rejected due to insurance issue) trigger a notification to the prescribing provider so it can be resubmitted or called in manually.

## Medication history and interaction checks

VirtuCare automatically checks new prescriptions against medications already listed in the patient's chart (whether prescribed through VirtuCare or manually entered from the intake form) and flags potential interactions or duplicate therapy before you can sign. These warnings can be acknowledged and overridden with a documented reason, but cannot be silently dismissed.

## Prescribing across state lines

Because prescribing legality depends on both provider licensure and the patient's physical location at the time of the visit, VirtuCare requires confirming the patient's current state at check-in (pre-filled from their profile, editable if they're traveling) and will block prescribing — with an explanation — if the provider isn't licensed in that state. See [Can I see patients who are located in a different state?](/faq/general-faq#cross-state) for more on multi-state licensure.
