---
sidebar_position: 1
---

# Insurance & Payment Setup

SuperMed supports both insurance billing (via claims clearinghouse integration) and direct self-pay, and clinics can offer either or both.

## Connecting a clearinghouse

Under **Billing → Insurance → Clearinghouse**, connect your clearinghouse account (SuperMed supports the major national clearinghouses via a standard EDI 837 connection). You'll need your clinic's:

- Tax ID (EIN)
- NPI (organizational, if applicable, in addition to individual provider NPIs)
- Clearinghouse account credentials

Once connected, eligibility checks can run automatically when a patient's insurance is entered on their intake form (**Billing → Insurance → Auto Eligibility Check**), showing front desk a real-time "Active" / "Inactive" / "Needs Review" status before the visit.

## Accepted payers

List which insurance payers your clinic accepts under **Billing → Insurance → Accepted Payers**. This list drives:

- The dropdown patients see on the intake form's insurance section.
- A "Not currently accepted" warning shown to front desk if a patient enters a payer outside this list, so it can be caught before the visit rather than after the claim is denied.

## Self-pay pricing

Under **Billing → Payment Settings → Self-Pay Rates**, set a flat rate per [appointment type](/scheduling/appointment-types), or mark a type as "insurance only" to hide self-pay pricing for services you don't want billed out of pocket.

## Connecting a payment processor

To collect card payments (co-pays, self-pay balances, or no-show fees), connect a payment processor under **Billing → Payment Settings → Payment Processor**. SuperMed does not store full card numbers — the processor tokenizes card details and SuperMed only stores the token and card last-4 for reference, in line with PCI DSS requirements.

## Collecting co-pays

If a patient's insurance plan has a known co-pay amount on file, SuperMed can prompt for payment either:

- **Before the visit** — at the end of the booking/intake flow, or
- **After the visit** — as a standard invoice once the visit is marked complete.

Configure this under **Billing → Payment Settings → Co-pay Collection Timing**. Dr. Osei collects co-pays before the visit to reduce unpaid balances, since Riverside Family Health doesn't have dedicated billing staff to chase down payments afterward.

## No-show fees

If enabled per [appointment type](/scheduling/appointment-types#cancellation-policy-per-type), a no-show fee is automatically charged to the card on file when a patient misses a visit without canceling inside the configured window. Patients are notified by email with an itemized explanation and a link to dispute the charge, which routes to your **Billing** role staff for manual review.
