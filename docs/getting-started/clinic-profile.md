---
sidebar_position: 2
---

# Configurarea profilului clinicii

Profilul clinicii tale controlează ce văd pacienții atunci când primesc confirmări de programare, linkuri de reamintire pentru vizite și facturi de la DemoMed.

## Informații de bază

Accesează **Setări → Profilul clinicii** și completează:

- **Numele clinicii** — apare în emailuri, remindere SMS și pagina de rezervare vizibilă pacienților (de ex. „Riverside Family Health”).
- **Specialitatea** — folosită pentru a adapta șabloanele implicite de formulare de admisie. Dr. Osei alege **Medicină de familie**.
- **Fusul orar** — toate orele programărilor, intervalele de disponibilitate și exporturile de calendar folosesc această setare. Configurează-o corect înainte de a-ți seta disponibilitatea; modificarea ei ulterioară mută toate programările viitoare (nu și pe cele trecute) în noul fus orar.
- **Telefon și adresă de contact** — apar pe facturi și sunt folosite ca număr de contact alternativ dacă un apel video eșuează.

## Identitate vizuală (branding)

Din **Setări → Profilul clinicii → Branding**, poți încărca:

- Un logo al clinicii (SVG sau PNG, se recomandă fundal transparent, maximum 2 MB), afișat pe pagina de rezervare a pacienților și în sala de așteptare video.
- O culoare principală de brand, folosită pentru butoanele din pagina de rezervare vizibilă pacienților.
- Un nume personalizat de „expeditor” pentru notificările prin email (de ex. „Riverside Family Health” în loc de numele implicit „DemoMed Notifications”).

:::info
Domeniile personalizate de trimitere a emailurilor (astfel încât reamintirile să vină de la `@riversidefamilyhealth.com` în loc de `@demomed.example`) necesită planul **Practice** sau superior și verificare DNS. Vezi [Domenii personalizate de notificare](/faq/technical-faq#custom-domains).
:::

## Program de lucru

Setează orele în care clinica ta este în general deschisă din **Setări → Profilul clinicii → Program de lucru**. Această setare *nu* controlează când pot pacienții să facă programări — asta se gestionează per medic în [Setarea disponibilității tale](/scheduling/availability) — dar controlează:

- Când widget-ul automat de telefon/chat afișează „suntem deschiși acum” sau „lasă un mesaj”.
- Intervalul implicit afișat în calendarul de rezervare al pacienților înainte de selectarea unui medic anume.

## Locații \{#locations}

Dacă clinica ta funcționează din mai multe adrese fizice (sau îți împarți timpul între un cabinet și o configurație de telemedicină de acasă), adaugă fiecare adresă ca **Locație** din **Setări → Profilul clinicii → Locații**. Fiecare locație poate avea:

- Propria adresă și propriul număr de telefon, afișate în rezumatele vizitelor pentru urmăriri în persoană.
- Propriul set de medici alocați.
- Un marcaj opțional „doar virtual”, care ascunde complet adresa față de pacienți și afișează doar „Vizită telemedicină”.

Dr. Osei adaugă o singură locație doar-virtuală numită „Riverside Telehealth”, deoarece Riverside Family Health nu primește pacienți în persoană.

## Pașii următori

După ce ți-ai configurat profilul, continuă cu [Invitarea personalului și setarea rolurilor](/getting-started/inviting-staff).
