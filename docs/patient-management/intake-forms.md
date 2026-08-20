---
sidebar_position: 1
---

# Formulare digitale de admisie

Formularele de admisie colectează informații despre pacient înainte de o vizită — istoric medical, medicație curentă, motivul vizitei și detalii despre asigurare — astfel încât medicul să vină pregătit.

## Folosirea unui șablon

DemoMed vine cu șabloane inițiale specifice fiecărei specialități, selectate în funcție de specialitatea setată în [profilul clinicii](/getting-started/clinic-profile). Șablonul **Medicină de familie** al Dr. Osei include:

- Date demografice și contact de urgență
- Informații despre asigurare
- Medicație curentă și alergii
- Motivul vizitei (text liber)
- Textul standard de consimțământ pentru tratament și pentru telemedicină

Accesează **Formulare → Șabloane → Admisie Medicină de familie** pentru a-l vizualiza sau a-l duplica înainte de a-l personaliza.

## Personalizarea unui formular

Duplică un șablon (editarea șablonului original este dezactivată, pentru a evita alterarea accidentală a celui implicit) și folosește constructorul de formulare pentru a adăuga, elimina sau reordona câmpuri. Tipurile de câmpuri acceptate includ text scurt, text lung, opțiune unică, opțiuni multiple, dată, încărcare de fișier (de ex. fotografia cardului de asigurare) și semnătură.

Dr. Osei adaugă o întrebare personalizată, „Ai făcut vaccinul antigripal sau anti-COVID în ultimele 12 luni?”, ca și câmp obligatoriu cu opțiune unică.

## Alocarea formularelor pe tipuri de programări

Formularele nu se trimit automat decât dacă sunt asociate unui [tip de programare](/scheduling/appointment-types) din **Agendă → Tipuri de programări → [tip] → Formular de admisie**. Poți trimite manual orice formular, ad-hoc, din fișa unui pacient, folosind **Trimite formular**.

## Când se trimit formularele

Implicit, formularele de admisie sunt trimise prin email imediat după programare, cu un reminder trimis cu 24 de ore înainte de vizită dacă nu au fost încă completate. Momentul trimiterii este configurabil din **Formulare → Setări → Programarea trimiterii**. Personalul de recepție poate vedea statusul completării direct în agenda zilei, ca un punct colorat (verde = complet, galben = început, roșu = neînceput).

## Completare obligatorie vs. opțională

Din **Formulare → Setări**, alege dacă un formular de admisie incomplet:

- **Blochează check-in-ul** — pacientul nu poate fi admis din sala de așteptare până nu este trimis formularul (medicul vede un avertisment, cu opțiune de suprascriere), sau
- **Este doar informativ** — medicul vede un marcaj „formular incomplet”, dar poate continua indiferent de acesta.

Majoritatea cabinetelor individuale, inclusiv Riverside Family Health, folosesc opțiunea doar informativă, deoarece blocarea check-in-ului poate crea fricțiuni pentru pacienții care uită sau întâmpină probleme tehnice cu formularul.

## Unde ajung răspunsurile

Formularele de admisie completate se atașează la fișa pacientului, la **Pacient → Formulare**, și sunt vizibile medicului înainte și în timpul vizitei, în panoul lateral. Răspunsurile sunt disponibile și în **Rapoarte → Exporturi formulare**, ca fișier CSV, pentru cabinetele care trebuie să introducă datele într-un sistem extern de fișă medicală electronică (EHR).
