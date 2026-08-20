---
sidebar_position: 4
---

# Recording & Consent

SuperMed allows visit recording for clinical documentation, training, or quality-assurance purposes — but only with explicit, logged patient consent, and recording is **off by default**.

## Enabling recording for your clinic

Recording must first be turned on at the clinic level: **Settings → Video → Recording**. You'll be asked to:

1. Confirm your clinic's recording retention period (30, 90, or 365 days, or custom for Network plans).
2. Choose where transcripts (if enabled) are stored relative to the patient chart.
3. Acknowledge that recordings are subject to the same HIPAA safeguards as other PHI — see [HIPAA Compliance](/security-compliance/hipaa-compliance).

## Consent flow during a visit

When a provider clicks **Start Recording** during a live visit:

- Both participants see an on-screen banner: "This visit is now being recorded" that cannot be dismissed until consent is captured.
- The patient (or their guardian/proxy) is asked to click **I consent to this recording**, or the provider can log **verbal consent given** if the patient confirms out loud (common for patients on older devices where clicking is difficult).
- A timestamped consent record is attached to the visit and visible later in the patient's chart under **Visit History → Consent Log**.

If a patient declines, recording cannot be started for that visit — there is no override, including for the clinic owner.

## Stopping a recording

Either the provider or an admin observer (if present) can click **Stop Recording** at any point. Partial recordings are still saved and consent-logged for the portion that was captured.

## Where recordings live

Recordings are encrypted at rest and linked to the patient's chart under **Visit History**. They are **not** downloadable as raw video files by default — playback happens through the secure in-app viewer. Download access can be granted per-recording by a clinic **Owner**, which generates a time-limited signed URL (expires after 24 hours) and logs the download in the audit trail.

## Automatic deletion

Recordings are automatically deleted at the end of your configured retention period. Deletion is permanent and cannot be undone — export anything you need to keep before the retention window closes. Retention changes only apply going forward; shortening the retention period does not retroactively delete recordings made under a longer window until they individually age out under the *original* setting.

## Transcripts

If **Auto-transcription** is enabled (**Settings → Video → Recording → Transcription**), a text transcript is generated within a few minutes of the recording ending and attached alongside it. Transcripts follow the same retention and access rules as the recording itself.
