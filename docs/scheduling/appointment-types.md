---
sidebar_position: 2
---

# Tipuri de programări

Tipurile de programări controlează durata vizitei, ce formular de admisie este trimis și ce apare pe pagina de rezervare a pacienților.

## Crearea unui tip de programare

Din **Agendă → Tipuri de programări → Nou**, configurează:

- **Nume** — afișat pacienților (de ex. „Vizită pacient nou”, „Control”, „Revizuire tratament”).
- **Durată** — în trepte de 5 minute, între 10 și 120 de minute.
- **Formular de admisie** — ce formular (dacă este cazul) se trimite automat când este rezervat acest tip. Vezi [Formulare digitale de admisie](/patient-management/intake-forms).
- **Vizibilitate** — dacă pacienții se pot programa singuri pentru acest tip, sau dacă este disponibil doar pentru personal (de ex. pentru intervale urgente în aceeași zi, programate manual de recepție).
- **Preț / cod de facturare** — opțional, folosit pentru facturarea plăților directe și generarea de superbill-uri. Vezi [Plăți și facturare](/billing/payments-invoicing).

## Exemplu de configurare

Dr. Osei configurează trei tipuri de programări pentru Riverside Family Health:

| Tip | Durată | Formular de admisie | Auto-programabil |
|---|---|---|---|
| Vizită pacient nou | 45 min | Admisie completă + asigurare | Da |
| Control | 20 min | Doar verificare simptome | Da |
| Urgență în aceeași zi | 15 min | Niciunul | Nu (doar recepția) |

## Impunerea unui preaviz minim de rezervare

Din **Agendă → Tipuri de programări → [tip] → Reguli de rezervare**, setează un termen minim de anunț (de ex. „pacienții trebuie să facă programarea cu cel puțin 2 ore înainte”) pentru a evita programările de ultim moment pe care nu le poți pregăti realist, precum și o fereastră maximă de rezervare (de ex. „nu mai mult de 60 de zile în avans”) pentru a evita ca agenda să se umple cu programări-placeholder în viitor îndepărtat.

## Politica de anulare per tip \{#cancellation-policy-per-type}

Fiecare tip de programare poate avea propria fereastră de anulare (de ex. „trebuie anulat cu cel puțin 24 de ore înainte, pentru a evita o taxă”). Aceasta este doar informativă, cu excepția cazului în care ai conectat și o metodă de plată din **Facturare → Setări de plată**, caz în care o taxă de absență configurată este percepută automat pentru anulările tardive. Vezi [Configurarea asigurării și plăților](/billing/insurance-setup).

## Reordonare și arhivare

Trage pentru a reordona tipurile de programări — ordinea afișată aici corespunde ordinii pe care o văd pacienții pe pagina de rezervare. Arhivarea (în loc de ștergere) a unui tip păstrează intacte programările istorice de acel tip în rapoarte, eliminându-l în același timp din rezervările viitoare.
