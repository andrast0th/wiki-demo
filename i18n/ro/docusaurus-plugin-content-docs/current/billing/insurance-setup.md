---
sidebar_position: 1
---

# Configurarea asigurării și plăților

SuperMed suportă atât facturarea prin asigurare (prin integrare cu o casă de compensare a decontărilor), cât și plata directă, iar clinicile pot oferi oricare dintre variante, sau ambele.

## Conectarea unei case de compensare

Din **Facturare → Asigurări → Casă de compensare**, conectează contul casei de compensare (SuperMed suportă principalele case de compensare naționale printr-o conexiune standard EDI 837). Vei avea nevoie de, pentru clinica ta:

- Codul fiscal (CUI/CIF)
- Numărul NPI (organizațional, dacă este cazul, pe lângă numerele NPI individuale ale medicilor)
- Credențialele contului la casa de compensare

Odată conectat, verificările de eligibilitate pot rula automat atunci când asigurarea unui pacient este introdusă în formularul de admisie (**Facturare → Asigurări → Verificare automată a eligibilității**), afișând recepției un status în timp real: „Activă” / „Inactivă” / „Necesită verificare”, înainte de vizită.

## Plătitori acceptați

Listează ce asigurători acceptă clinica ta din **Facturare → Asigurări → Plătitori acceptați**. Această listă controlează:

- Meniul derulant pe care îl văd pacienții în secțiunea de asigurare a formularului de admisie.
- Un avertisment „Momentan neacceptat”, afișat recepției dacă un pacient introduce un plătitor din afara acestei liste, astfel încât problema să fie depistată înainte de vizită, nu după respingerea decontării.

## Prețuri pentru plata directă

Din **Facturare → Setări de plată → Tarife plată directă**, setează un tarif fix per [tip de programare](/scheduling/appointment-types), sau marchează un tip ca „doar prin asigurare” pentru a ascunde prețul de plată directă pentru serviciile pe care nu vrei să le facturezi din buzunar.

## Conectarea unui procesator de plăți \{#connecting-a-payment-processor}

Pentru a încasa plăți cu cardul (co-plăți, solduri de plată directă sau taxe de absență), conectează un procesator de plăți din **Facturare → Setări de plată → Procesator de plăți**. SuperMed nu stochează numerele complete de card — procesatorul tokenizează detaliile cardului, iar SuperMed păstrează doar token-ul și ultimele 4 cifre ale cardului, ca referință, în conformitate cu cerințele PCI DSS.

## Colectarea co-plăților

Dacă planul de asigurare al unui pacient are o co-plată cunoscută în dosar, SuperMed poate solicita plata fie:

- **Înainte de vizită** — la finalul fluxului de rezervare/admisie, sau
- **După vizită** — ca factură standard, odată ce vizita este marcată ca finalizată.

Configurează asta din **Facturare → Setări de plată → Momentul colectării co-plății**. Dr. Osei colectează co-plățile înainte de vizită, pentru a reduce soldurile neplătite, deoarece Riverside Family Health nu are personal dedicat facturării care să urmărească plățile ulterior.

## Taxe de absență

Dacă este activată per [tip de programare](/scheduling/appointment-types#cancellation-policy-per-type), o taxă de absență este percepută automat pe cardul din dosar atunci când un pacient lipsește de la o vizită fără să anuleze în intervalul configurat. Pacienții sunt notificați prin email, cu o explicație detaliată și un link pentru a contesta taxa, care ajunge la personalul cu rol de **Facturare** pentru verificare manuală.
