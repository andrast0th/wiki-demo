---
sidebar_position: 2
---

# Technical FAQ

### Camera/microphone permission was denied — how do I fix it? \{#permission-denied}

Browser permissions, once denied, aren't re-prompted automatically. Re-enable manually:

- **Chrome/Edge:** click the padlock icon in the address bar → Site settings → set Camera and Microphone to "Allow" → reload the page.
- **Safari:** Safari menu → Settings → Websites → Camera/Microphone → find the SuperMed domain → set to "Allow."
- **Firefox:** click the padlock icon → Connection secure → More information → Permissions → clear the blocked setting → reload.

After changing browser settings, re-run the check at **Settings → Video → Device Check** ([Video & Audio Device Setup](/video-consultations/device-setup)) to confirm it's picked up correctly.

### My video keeps freezing or dropping mid-visit \{#choppy-video}

This is almost always a bandwidth issue rather than a SuperMed outage. Try, in order:

1. Enable **Low Bandwidth Mode** from the in-call settings menu (caps video at 360p, prioritizes audio).
2. Switch from Wi-Fi to a wired ethernet connection if possible.
3. Close other bandwidth-heavy applications (video streaming, large file uploads/downloads, cloud backups running in the background).
4. Ask the other participant to also try Low Bandwidth Mode — a poor connection on *either* side degrades the call for both.
5. Run **Settings → Video → Device Check** to confirm your current measured speed against the recommended 10 Mbps.

If problems persist across multiple visits from the same location, it may be worth having your office internet connection assessed — SuperMed's minimum bandwidth recommendations assume no other heavy usage sharing the same connection during visits.

### Can I use SuperMed with a second monitor?

Yes — nothing in SuperMed restricts multi-monitor setups. A common configuration is the video visit on one screen and the patient's chart/clinical notes on the other, opened as separate browser windows.

### What browsers are supported?

Chrome 100+, Edge 100+, Safari 16+, and Firefox 100+ (latest stable versions recommended). Internet Explorer is not supported. Mobile Safari (iOS) and Chrome for Android are supported for patients and providers alike.

### Can patients join without a strong internet connection?

Patients can join over cellular data if Wi-Fi isn't available; SuperMed's Low Bandwidth Mode (see above) helps significantly on constrained mobile connections. There is currently no audio-only "dial-in by phone" fallback — if a patient truly cannot get a working video connection, the visit will need to be converted to a phone call outside SuperMed or rescheduled.

### How do I set up a custom notification domain? \{#custom-domains}

Available on the Practice plan and above. Go to **Settings → Clinic Profile → Branding → Email Domain**, enter your domain (e.g. `riversidefamilyhealth.com`), and add the provided SPF, DKIM, and CNAME DNS records at your domain registrar. Verification typically completes within a few hours of the DNS records propagating, and the page shows real-time status for each record.

### Why can't I delete a patient record?

Clinical records are subject to mandatory retention requirements and can't be deleted on demand — see [Data Retention](/security-compliance/data-retention#requesting-patient-record-deletion) for what can be restricted versus what must be retained, and why.

### Does SuperMed have an API?

A REST API for appointments, patient records, and billing is available on the Practice and Network plans for clinics integrating with an external EHR or practice management system. Request API access and view documentation from **Settings → Developer → API Access**.
