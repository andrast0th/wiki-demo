---
sidebar_position: 3
---

# Rețete electronice

SuperMed se integrează cu o rețea certificată de prescriere electronică, permițând medicilor să trimită rețete direct către farmacia pacientului, în timpul sau după o vizită video.

## Activarea prescrierii electronice \{#enabling-e-prescribing}

Prescrierea electronică trebuie activată per medic, deoarece necesită validarea numerelor individuale DEA și a licențelor pe regiune: **Setări → Prescriere → Activează pentru [Numele medicului]**. Vei avea nevoie de:

- Un număr DEA activ (pentru substanțe controlate) și/sau un număr NPI.
- Număr(e) de licență pentru fiecare regiune în care prescrii.
- Finalizarea verificării identității cerute pentru EPCS (prescrierea electronică a substanțelor controlate), care presupune un pas de verificare a identității realizat de un terț și, în majoritatea cazurilor, autentificare în doi pași în momentul semnării unei rețete pentru o substanță controlată.

Verificarea pentru prescrierea de substanțe necontrolate durează de obicei 1–2 zile lucrătoare; aprobarea EPCS poate dura până la 2 săptămâni, din cauza pasului suplimentar de verificare a identității.

## Trimiterea unei rețete în timpul unei vizite

Din panoul de note clinice din timpul vizitei (vezi [Începerea unei consultații](/video-consultations/starting-a-call)), apasă **Prescrie** pentru a:

1. Căuta medicamentul în baza de date, după nume.
2. Selecta doza, cantitatea, numărul de repetări și indicațiile de administrare.
3. Alege farmacia pacientului — SuperMed sugerează farmaciile folosite anterior de acel pacient, sau poți căuta după nume/locație.
4. Revizui și semna. Substanțele controlate necesită reintroducerea codului 2FA la acest pas, chiar dacă ești deja autentificat.

## Verificarea statusului unei rețete

Rețetele trimise apar în **Pacient → Rețete**, cu un status: **Trimisă**, **Primită de farmacie**, **Eliberată** sau **Eroare**. Erorile (de ex. farmacia a respins din cauza unei probleme de asigurare) declanșează o notificare către medicul prescriptor, astfel încât rețeta să poată fi retrimisă sau transmisă telefonic manual.

## Istoricul medicației și verificarea interacțiunilor

SuperMed verifică automat rețetele noi în raport cu medicația deja listată în fișa pacientului (fie prescrisă prin SuperMed, fie introdusă manual din formularul de admisie) și semnalează posibile interacțiuni sau tratamente duplicate înainte să poți semna. Aceste avertismente pot fi confirmate și suprascrise cu un motiv documentat, dar nu pot fi închise fără explicație.

## Prescrierea peste granițele regionale \{#prescribing-across-state-lines}

Deoarece legalitatea prescrierii depinde atât de licențierea medicului, cât și de locația fizică a pacientului în momentul vizitei, SuperMed cere confirmarea regiunii curente a pacientului la check-in (pre-completată din profilul lui, editabilă dacă este în călătorie) și va bloca prescrierea — cu o explicație — dacă medicul nu este licențiat în acea regiune. Vezi [Pot avea pacienți aflați într-o altă regiune?](/faq/general-faq#cross-state) pentru mai multe detalii despre licențierea multi-regională.
