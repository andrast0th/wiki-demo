---
sidebar_position: 1
---

# Video & Audio Device Setup

VirtuCare video visits run directly in the browser (Chrome, Edge, Safari 16+, or Firefox) using WebRTC — no separate app install is required for providers or patients.

## Recommended equipment

| Component | Minimum | Recommended |
|---|---|---|
| Camera | Built-in laptop webcam (720p) | External 1080p webcam at eye level |
| Microphone | Built-in laptop mic | USB headset or dedicated microphone (reduces echo and background noise) |
| Internet | 3 Mbps up/down | 10+ Mbps up/down, wired connection preferred over Wi-Fi |
| Browser | Chrome 100+, Safari 16+ | Latest stable Chrome or Edge |

## Running the device check

Before your first consultation, run VirtuCare's built-in device check:

1. From the dashboard, go to **Settings → Video → Device Check**.
2. Grant camera and microphone permissions when your browser prompts you. If you accidentally deny permission, see [Camera/microphone permission was denied](/faq/technical-faq#permission-denied).
3. The check reports your measured upload/download speed, camera resolution, and mic input level, and flags anything below the recommended threshold.

Dr. Osei runs the check from her exam room laptop and gets a warning that her upload speed (2.1 Mbps) is below the 3 Mbps minimum — she switches from Wi-Fi to a wired ethernet connection and re-runs the check, which now passes.

## Choosing default devices

Set default camera, microphone, and speaker under **Settings → Video → Default Devices**. This is especially useful if you use different equipment at different locations (e.g. a laptop mic at home, a USB headset at the office) — VirtuCare will remember the last device you selected per browser profile, but setting explicit defaults avoids accidentally starting a visit on the wrong microphone.

## Virtual backgrounds and blur

Under **Settings → Video → Appearance**, providers can enable:

- **Background blur** — blurs everything behind the provider, useful for home offices.
- **Virtual backgrounds** — upload a clinic-branded background image (max 5 MB, 16:9 recommended).

Virtual backgrounds are disabled by default for patients to avoid distracting or inappropriate backgrounds during clinical visits, but can be enabled per-clinic under **Settings → Video → Patient Options** if desired.

## Bandwidth-saving mode

If a patient or provider has an unstable connection, either party can toggle **Low Bandwidth Mode** from the in-call settings menu. This caps video to 360p and prioritizes audio quality, which usually resolves choppy or freezing video — see [My video keeps freezing or dropping mid-visit](/faq/technical-faq#choppy-video) for more troubleshooting steps.

## Next steps

Continue to [Configuring the Waiting Room](/video-consultations/waiting-room) to control what patients experience before you join.
