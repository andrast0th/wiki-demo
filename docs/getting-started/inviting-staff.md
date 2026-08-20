---
sidebar_position: 3
---

# Invitarea personalului și setarea rolurilor

Chiar și un cabinet individual are de obicei nevoie de cel puțin un cont suplimentar — pentru un asistent medical, un coordonator de recepție sau o persoană de contact pentru facturare. DemoMed folosește acces bazat pe roluri, astfel încât personalul vede doar ce are nevoie.

## Prezentarea rolurilor \{#roles-overview}

| Rol | Poate face | Nu poate face |
|---|---|---|
| **Proprietar (Owner)** | Orice, inclusiv facturarea și închiderea contului | — |
| **Medic (Provider)** | Susține vizite video, vede/editează fișele propriilor pacienți, își gestionează propria disponibilitate | Vede fișele pacienților altor medici (dacă nu sunt partajate explicit), schimbă setările de facturare ale clinicii |
| **Recepție (Front Desk)** | Programează/reprogramează vizite, trimite formulare de admisie, vede statusul programărilor | Se alătură vizitelor video, vede notele clinice, accesează rapoartele de facturare |
| **Facturare (Billing)** | Vede și gestionează facturi, configurarea asigurărilor, rapoarte de plată | Programează vizite, vede notele clinice |
| **Auditor doar-citire** | Vede jurnalele de activitate și rapoartele | Modifică orice setare, vede date medicale protejate (PHI) |

Rolurile pot fi combinate — un membru al personalului poate avea, de exemplu, atât rolul **Recepție**, cât și **Facturare**.

## Trimiterea unei invitații

1. Accesează **Setări → Echipă → Invită membru**.
2. Introdu adresa de email a persoanei și alege unul sau mai multe roluri.
3. Dacă inviți un **Medic**, selectează și **locația (locațiile)** la care va fi alocat (vezi [Profilul clinicii → Locații](/getting-started/clinic-profile#locations)).
4. Apasă **Trimite invitația**. Destinatarul primește un email cu un link valabil 7 zile.

Dr. Osei o invită pe asistenta ei medicală, Jordan, cu rolurile **Recepție + Facturare**, astfel încât Jordan poate gestiona calendarul și poate urmări facturile neplătite, fără să poată deschide vizitele video ale pacienților sau notele clinice.

## Autentificare în doi pași

Deoarece conturile personalului pot accesa date medicale protejate (PHI), DemoMed impune autentificarea în doi pași (2FA) pentru orice rol, cu excepția Auditorului doar-citire, de îndată ce clinica ta are mai mult de un membru activ în echipă. Personalul va fi rugat să configureze 2FA (aplicație de autentificare sau SMS) la prima autentificare.

## Eliminarea sau restrângerea accesului

Dezactivează imediat din **Setări → Echipă** un membru al personalului care pleacă, în loc să aștepți un moment „convenabil” — dezactivarea revocă imediat token-urile API și sesiunile active. Conturile dezactivate sunt păstrate (nu șterse) timp de 7 ani, pentru a menține jurnalul de audit, conform politicii de retenție descrise în [Retenția datelor](/security-compliance/data-retention).

## Pașii următori

Contul tău, profilul clinicii și echipa sunt configurate. Acum configurează efectiv modul în care vor funcționa vizitele video: [Configurarea dispozitivelor video și audio](/video-consultations/device-setup).
