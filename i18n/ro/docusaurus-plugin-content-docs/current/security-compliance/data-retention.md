---
sidebar_position: 2
---

# Retenția datelor

## Perioade implicite de retenție

| Tip de date | Retenție implicită | Configurabilă? |
|---|---|---|
| Fișe de pacient, note clinice | 10 ani de la ultima activitate | Nu — corespunde cerințelor tipice privind evidențele medicale |
| Înregistrări ale vizitelor | 90 de zile | Da, 30–365 zile sau personalizat (plan Network) — vezi [Înregistrare și consimțământ](/video-consultations/recording-consent#automatic-deletion) |
| Transcrieri de chat (chat din timpul vizitei) | 90 de zile | Nu |
| Conturi de personal dezactivate | 7 ani | Nu |
| Jurnale de audit | 7 ani | Nu |
| Evidențe de facturare/facturi | 7 ani | Nu |

Perioadele de retenție pentru date clinice și de facturare sunt setate conservator, pentru a satisface cele mai lungi cerințe naționale și locale comune, în toate jurisdicțiile în care operează SuperMed — verifică legea locală privind retenția evidențelor medicale dacă pacienții tăi sunt concentrați într-o singură regiune, deoarece unele impun minime mai lungi (valorile implicite SuperMed nu vor coborî niciodată sub pragul minim al regiunii tale).

## Solicitarea ștergerii fișei unui pacient \{#requesting-patient-record-deletion}

Din când în când, pacienții cer ștergerea datelor lor. Deoarece fișele clinice sunt supuse unor cerințe obligatorii de retenție, SuperMed **nu poate** șterge o fișă activă de pacient la cerere, în modul în care o aplicație obișnuită de consum ar șterge un cont. În schimb:

- Datele neclinice (de ex. preferințele de comunicare de marketing, un cont neconfirmat fără istoric de vizite) pot fi șterse.
- Fișele clinice pot fi marcate ca **Restricționate**, ceea ce le ascunde din vizualizările și căutările curente ale personalului, păstrându-le în același timp pentru perioada de retenție obligatorie cerută de lege. Doar un **Proprietar** poate aplica sau elimina o restricție, iar acțiunea este înregistrată în jurnalul de audit.

## Exportarea datelor înainte de ștergere

Orice este programat pentru ștergere (de ex. o înregistrare aproape de finalul perioadei de retenție) poate fi exportat în prealabil din locația sa respectivă — înregistrările din **Pacient → Istoricul vizitelor**, formularele din **Rapoarte → Exporturi formulare**, facturile din **Facturare → Rapoarte**. Odată ce o perioadă de retenție se încheie, ștergerea se produce automat și nu poate fi anulată.

## Închiderea contului clinicii tale

Dacă îți închizi contul SuperMed (**Setări → Facturare → Închide contul**), fișele clinice ale pacienților sunt păstrate pentru perioadele standard de mai sus, chiar dacă contul nu mai este activ, deoarece obligația de retenție este legată de fișele în sine, nu de starea abonamentului tău. Poți solicita un export complet al datelor înainte de închidere — vezi **Setări → Conformitate → Solicită export de date**, care generează o arhivă descărcabilă în 5 zile lucrătoare.
