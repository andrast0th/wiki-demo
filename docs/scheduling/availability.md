---
sidebar_position: 1
---

# Setarea disponibilității tale

Disponibilitatea determină intervalele orare pe care pacienții le pot selecta atunci când fac o programare pentru o vizită video. Este configurată per medic, astfel încât fiecare doctor dintr-o clinică cu mai mulți medici își gestionează propria disponibilitate.

## Setarea unui program săptămânal

Accesează **Agendă → Disponibilitate** și definește ore recurente săptămânale, de exemplu:

```
Luni        9:00 – 12:00, 13:00 – 16:30
Marți       9:00 – 16:30
Miercuri    Liber
Joi         9:00 – 16:30
Vineri      9:00 – 13:00
```

Dr. Osei blochează complet ziua de miercuri pentru muncă administrativă și revizuirea fișelor, iar vinerea o scurtează la jumătate de zi.

## Timp tampon între vizite

Din **Agendă → Disponibilitate → Timpi tampon**, setează un interval tampon (implicit 5 minute, până la 30) inserat automat după fiecare programare. Acest interval nu poate fi rezervat de pacienți și îi oferă medicului un moment pentru a finaliza notele înainte de începerea următoarei vizite.

## Durata intervalelor de programare

Durata unui interval se stabilește per **tip de programare** (vezi [Tipuri de programări](/scheduling/appointment-types)), nu global — o vizită „Pacient nou” poate avea implicit 45 de minute, în timp ce o vizită „Control” are 20 de minute, iar ambele pot fi oferite în aceeași fereastră de disponibilitate.

## Blocarea unor perioade libere

Pentru excepții punctuale — concediu, o conferință, o jumătate de zi de concediu medical — folosește **Agendă → Timp liber**, nu editarea orelor recurente săptămânale. Timpul liber:

- Elimină imediat acele intervale din pagina de rezervare a pacienților.
- Poate anula automat și notifica pacienții care aveau deja programări în acel interval (vei fi întrebat pentru fiecare bloc în parte).
- Poate fi setat ca interval unic sau ca model recurent (de ex. „prima zi de luni din fiecare lună”).

## Clinici cu mai mulți medici: linkuri de rezervare partajate vs. individuale

În clinicile cu mai mult de un medic, **Setări → Echipă** îți permite să decizi dacă pacienții fac programări:

- **Direct cu un anumit medic** (prin linkul individual de rezervare al acelui medic), sau
- **Cu „primul medic disponibil”**, folosind un link de rezervare comun al clinicii, în care DemoMed alocă cel mai apropiat interval disponibil dintre toți medicii care oferă acel tip de programare.

Riverside Family Health, fiind un cabinet individual, folosește doar linkul individual al medicului — vezi [Linkuri de rezervare pentru pacienți](/scheduling/patient-booking-links) pentru cum îl poți distribui.

## Gestionarea fusului orar

Disponibilitatea este stocată în fusul orar setat în [profilul clinicii](/getting-started/clinic-profile), dar pagina de rezervare a pacienților convertește automat orele afișate în fusul orar local al browserului vizitatorului, cu fusul orar al clinicii afișat între paranteze ca referință (de ex. „14:00 (15:00 ora clinicii)”).
