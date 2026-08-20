---
sidebar_position: 4
---

# Înregistrare și consimțământ

DemoMed permite înregistrarea vizitelor în scopuri de documentație clinică, instruire sau control al calității — dar numai cu consimțământul explicit și înregistrat al pacientului, iar înregistrarea este **dezactivată implicit**.

## Activarea înregistrării pentru clinica ta

Înregistrarea trebuie activată mai întâi la nivel de clinică: **Setări → Video → Înregistrare**. Ți se va cere să:

1. Confirmi perioada de retenție a înregistrărilor clinicii tale (30, 90 sau 365 de zile, sau personalizată pentru planurile Network).
2. Alegi unde sunt stocate transcrierile (dacă sunt activate) în raport cu fișa pacientului.
3. Confirmi că înregistrările sunt supuse acelorași măsuri de protecție HIPAA ca și celelalte date medicale protejate — vezi [Conformitatea HIPAA](/security-compliance/hipaa-compliance).

## Fluxul de consimțământ în timpul unei vizite

Când un medic apasă **Începe înregistrarea** în timpul unei vizite active:

- Ambii participanți văd un banner pe ecran: „Această vizită este acum înregistrată”, care nu poate fi închis până nu este obținut consimțământul.
- Pacientul (sau tutorele/reprezentantul său) este rugat să apese **Sunt de acord cu această înregistrare**, sau medicul poate înregistra **consimțământ verbal obținut** dacă pacientul confirmă verbal (frecvent pentru pacienții cu dispozitive mai vechi, unde apăsarea butonului este dificilă).
- O înregistrare a consimțământului, cu marcaj temporal, este atașată vizitei și vizibilă ulterior în fișa pacientului, la **Istoricul vizitelor → Jurnal de consimțământ**.

Dacă un pacient refuză, înregistrarea nu poate fi pornită pentru acea vizită — nu există nicio derogare, nici măcar pentru proprietarul clinicii.

## Oprirea unei înregistrări

Fie medicul, fie un observator administrator (dacă este prezent) poate apăsa **Oprește înregistrarea** în orice moment. Înregistrările parțiale sunt totuși salvate și consemnate cu consimțământ pentru porțiunea care a fost capturată.

## Unde sunt păstrate înregistrările

Înregistrările sunt criptate în repaus și legate de fișa pacientului, la **Istoricul vizitelor**. Acestea **nu** pot fi descărcate implicit ca fișiere video brute — redarea se face prin vizualizatorul securizat din aplicație. Accesul la descărcare poate fi acordat per înregistrare de către un **Proprietar** al clinicii, ceea ce generează un URL semnat, valabil o perioadă limitată (expiră după 24 de ore), iar descărcarea este consemnată în jurnalul de audit.

## Ștergere automată \{#automatic-deletion}

Înregistrările sunt șterse automat la finalul perioadei de retenție configurate. Ștergerea este permanentă și nu poate fi anulată — exportă tot ce trebuie să păstrezi înainte de închiderea intervalului de retenție. Modificările perioadei de retenție se aplică doar pe viitor; scurtarea perioadei de retenție nu șterge retroactiv înregistrările făcute sub o perioadă mai lungă, până când acestea nu expiră individual conform setării *inițiale*.

## Transcrieri

Dacă **Transcriere automată** este activată (**Setări → Video → Înregistrare → Transcriere**), o transcriere text este generată la câteva minute după încheierea înregistrării și atașată alături de aceasta. Transcrierile respectă aceleași reguli de retenție și acces ca și înregistrarea propriu-zisă.
