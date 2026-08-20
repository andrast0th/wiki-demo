---
sidebar_position: 1
---

# Conformitatea HIPAA

SuperMed este construit pentru a susține utilizarea conformă cu HIPAA de către clinici, dar conformitatea este o responsabilitate partajată între SuperMed (ca „Business Associate”) și clinica ta (ca „Covered Entity”).

## Acordul de asociere în afaceri (BAA)

Înainte ca orice date reale despre pacienți să fie procesate, clinica ta trebuie să accepte Acordul de asociere în afaceri (BAA) al SuperMed: **Setări → Conformitate → Acord de asociere în afaceri**. Acesta este un pas obligatoriu în timpul [configurării contului](/getting-started/account-setup) — conturile nu pot trece în status de producție fără un BAA acceptat, aflat în dosar.

## Ce gestionează SuperMed

- **Criptare în tranzit și în repaus** pentru toate datele medicale protejate (PHI), inclusiv fluxurile video (SRTP/DTLS pentru video live), înregistrările stocate, datele din fișe și formulare.
- **Controale de acces și jurnalizare de audit** — fiecare vizualizare, editare sau export al unei fișe de pacient este înregistrată împreună cu utilizatorul care a acționat, marcajul temporal și acțiunea (vezi **Setări → Conformitate → Jurnal de audit**).
- **Măsuri de protecție la nivel de infrastructură** — centre de date redundante, cu acces controlat, și evaluări periodice de securitate realizate de terți.

## De ce este responsabilă clinica ta

- **Instruirea personalului** — asigurarea că personalul înțelege utilizarea acceptabilă, de ex. să nu partajeze credențialele de autentificare (funcția SuperMed de [acces bazat pe roluri](/getting-started/inviting-staff) există tocmai pentru ca fiecare membru al personalului să nu fie nevoit să partajeze un singur cont).
- **Acces la minimul necesar** — alocarea unor roluri care reflectă exact ce trebuie să vadă fiecare membru al personalului, în loc ca toată lumea să primească implicit acces de nivel Proprietar.
- **Securitatea dispozitivelor** — medicii și personalul ar trebui să folosească browsere actualizate, să-și blocheze ecranele și să evite accesarea datelor pacienților pe rețele Wi-Fi publice nesecurizate, ori de câte ori este rezonabil posibil.
- **Consimțământul pacientului** — pentru funcții precum [înregistrarea vizitelor](/video-consultations/recording-consent), clinica ta decide când și cum le folosește, în cadrul propriei politici de conformitate.

## Jurnal de audit

**Setări → Conformitate → Jurnal de audit** afișează o evidență căutabilă și exportabilă a accesului la date medicale protejate (PHI) în cadrul clinicii tale: cine a vizualizat ce fișă de pacient, când a fost semnată sau modificată o notă, când a fost descărcată o înregistrare și evenimentele de autentificare/deconectare. Personalul cu rolul de Auditor doar-citire (vezi [Prezentarea rolurilor](/getting-started/inviting-staff#roles-overview)) poate vedea acest jurnal fără niciun alt acces la PHI.

## Notificarea incidentelor de securitate

Dacă SuperMed identifică un incident de securitate care afectează datele clinicii tale, procedurile de notificare respectă termenele specificate în BAA-ul tău. Proprietarii de clinici pot verifica statusul curent al incidentelor, dacă există, și notificările anterioare, din **Setări → Conformitate → Notificări de securitate**.

## Expirarea sesiunii

Pentru a reduce riscul ca un dispozitiv autentificat și nesupravegheat să expună date medicale protejate, SuperMed deconectează automat personalul după o perioadă de inactivitate (implicit 30 de minute, configurabilă până la minimum 10 minute din **Setări → Conformitate → Expirarea sesiunii** — nu poate fi extinsă peste 30 de minute pentru conturile cu acces la PHI).
