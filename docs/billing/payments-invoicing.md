---
sidebar_position: 2
---

# Payments & Invoicing

## How invoices are generated

An invoice is automatically created when a visit is marked **Complete**, combining:

- The self-pay rate or expected insurance co-pay/coinsurance for the appointment type.
- Any add-on charges a provider entered during the visit (e.g. an in-visit rapid test fee, if applicable).
- Adjustments from a previously posted insurance payment, if the claim has already been adjudicated.

Invoices appear under **Billing → Invoices** and in the patient's own portal under **My Health → Billing**.

## Submitting insurance claims

If insurance billing is configured (see [Insurance & Payment Setup](/billing/insurance-setup)), a claim is generated automatically from the visit's billing codes and submitted through your connected clearinghouse. Claim status is tracked under **Billing → Claims**:

| Status | Meaning |
|---|---|
| **Submitted** | Sent to clearinghouse, awaiting payer response |
| **Accepted** | Payer has accepted the claim for processing |
| **Rejected** | Failed clearinghouse-level validation (e.g. missing modifier) — needs correction and resubmission |
| **Denied** | Payer processed the claim and denied payment — reason code shown, can be appealed |
| **Paid** | Payment posted; patient invoice updated with remaining balance, if any |

## Entering billing codes

Providers (or billing staff) attach CPT and ICD-10 codes to a visit from the chart's **Billing** tab. SuperMed suggests commonly paired codes based on the appointment type, but does not auto-select them — codes must be reviewed and confirmed by a provider before a claim is submitted, since only a licensed provider can attest to the codes billed.

## Patient statements

Configure automatic statement emails under **Billing → Payment Settings → Statements** — for example, "send a reminder statement every 14 days for balances over $10, up to 3 reminders." Patients can pay directly from the emailed statement link without logging in, using the payment processor connected in [Insurance & Payment Setup](/billing/insurance-setup#connecting-a-payment-processor).

## Refunds

Issue a refund from **Billing → Invoices → [invoice] → Refund**. Full or partial refunds are supported; refunds route back to the original payment method and typically post to the patient's statement within 5–10 business days, per standard card network timelines. Refunds require the **Billing** or **Owner** role.

## Monthly reporting

**Billing → Reports** provides monthly summaries of collected revenue, outstanding balances, claim denial rates, and no-show fee totals, exportable as CSV for your accountant or practice management software.
