---
sidebar_position: 1
---

# Configurarea dispozitivelor video și audio

Vizitele video DemoMed rulează direct în browser (Chrome, Edge, Safari 16+ sau Firefox) folosind WebRTC — nu este nevoie de nicio aplicație separată, nici pentru medici, nici pentru pacienți.

## Echipament recomandat

| Componentă | Minim | Recomandat |
|---|---|---|
| Cameră | Cameră web integrată în laptop (720p) | Cameră web externă 1080p, la nivelul ochilor |
| Microfon | Microfon integrat în laptop | Căști USB sau microfon dedicat (reduce ecoul și zgomotul de fundal) |
| Internet | 3 Mbps upload/download | 10+ Mbps upload/download, conexiune prin cablu preferabilă în locul Wi-Fi |
| Browser | Chrome 100+, Safari 16+ | Cea mai recentă versiune stabilă de Chrome sau Edge |

## Rularea verificării dispozitivelor

Înainte de prima ta consultație, rulează verificarea încorporată a dispozitivelor din DemoMed:

1. Din panoul de control, accesează **Setări → Video → Verificare dispozitive**.
2. Acordă permisiunile de cameră și microfon atunci când browserul îți cere. Dacă refuzi din greșeală permisiunea, vezi [Permisiunea pentru cameră/microfon a fost refuzată](/faq/technical-faq#permission-denied).
3. Verificarea raportează viteza măsurată de upload/download, rezoluția camerei și nivelul de intrare al microfonului, și semnalează tot ce este sub pragul recomandat.

Dr. Osei rulează verificarea de pe laptopul din cabinetul de consultații și primește un avertisment că viteza ei de upload (2,1 Mbps) este sub minimul de 3 Mbps — trece de la Wi-Fi la o conexiune prin cablu Ethernet și rulează din nou verificarea, care de această dată trece cu succes.

## Alegerea dispozitivelor implicite

Setează camera, microfonul și difuzorul implicite din **Setări → Video → Dispozitive implicite**. Acest lucru este util mai ales dacă folosești echipamente diferite în locații diferite (de ex. microfonul laptopului acasă, căști USB la cabinet) — DemoMed reține ultimul dispozitiv selectat per profil de browser, dar setarea explicită a dispozitivelor implicite evită pornirea accidentală a unei vizite cu microfonul greșit.

## Fundaluri virtuale și estompare

Din **Setări → Video → Aspect**, medicii pot activa:

- **Estomparea fundalului** — estompează tot ce se află în spatele medicului, util pentru birourile de acasă.
- **Fundaluri virtuale** — încarcă o imagine de fundal cu identitatea vizuală a clinicii (maximum 5 MB, se recomandă 16:9).

Fundalurile virtuale sunt dezactivate implicit pentru pacienți, pentru a evita fundaluri care distrag atenția sau sunt nepotrivite în timpul vizitelor clinice, dar pot fi activate per clinică din **Setări → Video → Opțiuni pacienți**, dacă se dorește.

## Modul de economisire a lățimii de bandă

Dacă un pacient sau un medic are o conexiune instabilă, oricare dintre părți poate activa **Modul de lățime de bandă redusă** din meniul de setări al apelului. Acesta limitează video-ul la 360p și prioritizează calitatea audio, ceea ce de obicei rezolvă problemele de imagine sacadată sau înghețată — vezi [Imaginea video îmi îngheață sau se întrerupe în timpul vizitei](/faq/technical-faq#choppy-video) pentru mai mulți pași de depanare.

## Pașii următori

Continuă cu [Configurarea sălii de așteptare](/video-consultations/waiting-room) pentru a controla ce experimentează pacienții înainte să te alături.
