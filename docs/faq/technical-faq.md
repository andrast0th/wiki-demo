---
sidebar_position: 2
---

# Întrebări frecvente tehnice

### Permisiunea pentru cameră/microfon a fost refuzată — cum o repar? \{#permission-denied}

Odată refuzate, permisiunile browserului nu mai sunt solicitate din nou automat. Reactivează-le manual:

- **Chrome/Edge:** dă clic pe iconița lacăt din bara de adrese → Setările site-ului → setează Camera și Microfonul pe „Permite” → reîncarcă pagina.
- **Safari:** meniul Safari → Setări → Site-uri web → Cameră/Microfon → găsește domeniul DemoMed → setează pe „Permite”.
- **Firefox:** dă clic pe iconița lacăt → Conexiune securizată → Mai multe informații → Permisiuni → șterge setarea blocată → reîncarcă.

După ce ai schimbat setările browserului, rulează din nou verificarea din **Setări → Video → Verificare dispozitive** ([Configurarea dispozitivelor video și audio](/video-consultations/device-setup)) pentru a confirma că totul funcționează corect.

### Imaginea video îmi îngheață sau se întrerupe în timpul vizitei \{#choppy-video}

Aproape întotdeauna este o problemă de lățime de bandă, nu o pană a DemoMed. Încearcă, în ordine:

1. Activează **Modul de lățime de bandă redusă** din meniul de setări al apelului (limitează video-ul la 360p, prioritizează audio-ul).
2. Trece de la Wi-Fi la o conexiune prin cablu Ethernet, dacă este posibil.
3. Închide alte aplicații care consumă multă lățime de bandă (streaming video, încărcări/descărcări de fișiere mari, backup-uri cloud rulate în fundal).
4. Roagă și celălalt participant să încerce Modul de lățime de bandă redusă — o conexiune slabă pe *oricare* dintre părți afectează apelul pentru amândoi.
5. Rulează **Setări → Video → Verificare dispozitive** pentru a confirma viteza ta măsurată în raport cu cei 10 Mbps recomandați.

Dacă problemele persistă la mai multe vizite din aceeași locație, ar putea merita să verifici conexiunea de internet a cabinetului — recomandările minime de lățime de bandă ale DemoMed presupun că nicio altă utilizare intensă nu partajează aceeași conexiune în timpul vizitelor.

### Pot folosi DemoMed cu un al doilea monitor?

Da — nimic din DemoMed nu restricționează configurațiile cu mai multe monitoare. O configurație obișnuită este vizita video pe un ecran și fișa/notele clinice ale pacientului pe celălalt, deschise ca ferestre separate de browser.

### Ce browsere sunt suportate?

Chrome 100+, Edge 100+, Safari 16+ și Firefox 100+ (se recomandă cele mai recente versiuni stabile). Internet Explorer nu este suportat. Safari pe mobil (iOS) și Chrome pentru Android sunt suportate atât pentru pacienți, cât și pentru medici.

### Pacienții se pot alătura fără o conexiune puternică la internet?

Pacienții se pot alătura prin date mobile, dacă Wi-Fi nu este disponibil; Modul de lățime de bandă redusă al DemoMed (vezi mai sus) ajută semnificativ pe conexiuni mobile limitate. Momentan nu există o variantă de rezervă „apel telefonic doar-audio” — dacă un pacient chiar nu poate obține o conexiune video funcțională, vizita va trebui convertită într-un apel telefonic în afara DemoMed sau reprogramată.

### Cum configurez un domeniu personalizat pentru notificări? \{#custom-domains}

Disponibil de la planul Practice în sus. Accesează **Setări → Profilul clinicii → Branding → Domeniu de email**, introdu domeniul tău (de ex. `riversidefamilyhealth.com`) și adaugă înregistrările DNS SPF, DKIM și CNAME furnizate, la registratorul tău de domeniu. Verificarea se finalizează de obicei în câteva ore de la propagarea înregistrărilor DNS, iar pagina afișează statusul în timp real pentru fiecare înregistrare.

### De ce nu pot șterge o fișă de pacient?

Fișele clinice sunt supuse unor cerințe obligatorii de retenție și nu pot fi șterse la cerere — vezi [Retenția datelor](/security-compliance/data-retention#requesting-patient-record-deletion) pentru ce poate fi restricționat față de ce trebuie păstrat, și de ce.

### DemoMed are un API?

Un API REST pentru programări, fișe de pacient și facturare este disponibil pe planurile Practice și Network, pentru clinicile care se integrează cu un sistem extern de fișă medicală electronică (EHR) sau de gestiune a cabinetului. Solicită acces la API și consultă documentația din **Setări → Dezvoltatori → Acces API**.
