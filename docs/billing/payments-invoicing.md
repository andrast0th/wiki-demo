---
sidebar_position: 2
---

# Plăți și facturare

## Cum sunt generate facturile

O factură este creată automat atunci când o vizită este marcată **Finalizată**, combinând:

- Tariful de plată directă sau co-plata/coasigurarea așteptată de la asigurare pentru acel tip de programare.
- Orice taxe suplimentare introduse de medic în timpul vizitei (de ex. o taxă pentru un test rapid făcut în timpul vizitei, dacă este cazul).
- Ajustări dintr-o plată de asigurare înregistrată anterior, dacă decontarea a fost deja soluționată.

Facturile apar în **Facturare → Facturi** și în portalul propriu al pacientului, la **Sănătatea mea → Facturare**.

## Trimiterea decontărilor către asigurare \{#submitting-insurance-claims}

Dacă facturarea prin asigurare este configurată (vezi [Configurarea asigurării și plăților](/billing/insurance-setup)), o decontare este generată automat din codurile de facturare ale vizitei și trimisă prin casa de compensare conectată. Statusul decontării este urmărit în **Facturare → Decontări**:

| Status | Semnificație |
|---|---|
| **Trimisă** | Trimisă către casa de compensare, în așteptarea răspunsului asigurătorului |
| **Acceptată** | Asigurătorul a acceptat decontarea pentru procesare |
| **Respinsă** | Nu a trecut validarea la nivelul casei de compensare (de ex. lipsește un modificator) — necesită corectare și retrimitere |
| **Refuzată** | Asigurătorul a procesat decontarea și a refuzat plata — se afișează un cod de motiv, poate fi contestată |
| **Plătită** | Plata a fost înregistrată; factura pacientului este actualizată cu soldul rămas, dacă există |

## Introducerea codurilor de facturare

Medicii (sau personalul de facturare) atașează codurile CPT și ICD-10 unei vizite din fila **Facturare** a fișei. DemoMed sugerează coduri asociate frecvent, în funcție de tipul de programare, dar nu le selectează automat — codurile trebuie revizuite și confirmate de un medic înainte de trimiterea decontării, deoarece doar un medic licențiat poate atesta codurile facturate.

## Extrase de cont pentru pacienți

Configurează emailuri automate cu extrase de cont din **Facturare → Setări de plată → Extrase de cont** — de exemplu, „trimite un extras de reamintire la fiecare 14 zile pentru solduri peste 50 de lei, până la 3 reamintiri.” Pacienții pot plăti direct din linkul extrasului primit prin email, fără autentificare, folosind procesatorul de plăți conectat în [Configurarea asigurării și plăților](/billing/insurance-setup#connecting-a-payment-processor).

## Rambursări \{#refunds}

Emite o rambursare din **Facturare → Facturi → [factură] → Rambursare**. Sunt suportate rambursări totale sau parțiale; rambursările se întorc pe metoda de plată originală și de obicei apar în extrasul pacientului în 5–10 zile lucrătoare, conform termenelor standard ale rețelelor de carduri. Rambursările necesită rolul **Facturare** sau **Proprietar**.

## Raportare lunară

**Facturare → Rapoarte** oferă rezumate lunare ale veniturilor încasate, soldurilor restante, ratelor de refuz al decontărilor și totalurilor taxelor de absență, exportabile ca CSV pentru contabilul tău sau pentru software-ul de gestiune a cabinetului.
