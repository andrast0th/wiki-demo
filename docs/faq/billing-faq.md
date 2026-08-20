---
sidebar_position: 3
---

# Billing FAQ

### Why was a claim rejected instead of denied — what's the difference?

A **rejection** happens at the clearinghouse level, before the insurance payer ever processes it — usually due to a formatting issue like a missing modifier or mismatched patient ID. It can be corrected and resubmitted right away from **Billing → Claims**. A **denial** means the payer received and processed the claim but declined to pay, for a substantive reason (e.g. service not covered, prior authorization missing) shown as a reason code — this may require an appeal rather than a simple resubmission. See [Payments & Invoicing](/billing/payments-invoicing#submitting-insurance-claims).

### Can I charge patients a no-show fee automatically?

Yes, if you've enabled it for the relevant [appointment type](/scheduling/appointment-types#cancellation-policy-per-type) and connected a payment processor (see [Insurance & Payment Setup](/billing/insurance-setup#connecting-a-payment-processor)). The fee is charged to the card on file when a patient misses the cancellation window, and the patient is notified with a dispute link.

### How do refunds work?

Refunds are issued from **Billing → Invoices → [invoice] → Refund** by a **Billing** or **Owner** role staff member, and route back to the patient's original payment method — typically posting within 5–10 business days. See [Payments & Invoicing](/billing/payments-invoicing#refunds).

### Can I offer a sliding-scale or discounted self-pay rate?

There's no automated income-based sliding scale, but you can manually adjust an individual invoice's amount before it's sent from **Billing → Invoices → [invoice] → Adjust**, with a required reason note for your own records. For a standing discount (e.g. a reduced rate for uninsured patients generally), create a separate self-pay appointment type with the lower rate under [Appointment Types](/scheduling/appointment-types).

### Does SuperMed take a cut of patient payments?

SuperMed charges standard payment processing fees passed through from the connected processor (shown at setup under **Billing → Payment Settings → Payment Processor**) — there is no separate SuperMed markup on top of processor fees for Practice and Network plans. Solo plan pricing details are shown on the same settings page and may include a small platform fee; check your current plan's terms there, since fee structures can change between plan tiers.

### Why is a patient's invoice showing a balance after insurance paid?

The invoice reflects patient responsibility, not total charges — after a claim is marked **Paid** in **Billing → Claims**, the invoice automatically updates to reflect only the patient's remaining co-pay, coinsurance, or deductible amount as reported by the payer. If the number looks wrong, check the posted payment details on the claim itself for the payer's breakdown before assuming it's a SuperMed calculation error.

### Can front desk staff see billing without seeing clinical notes?

Yes — assign the **Billing** role (optionally combined with **Front Desk**) rather than **Provider**. Billing role staff can view and manage invoices, claims, and payment reports, but cannot open clinical notes or video visits. See [Roles overview](/getting-started/inviting-staff#roles-overview).
