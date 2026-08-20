---
sidebar_position: 3
---

# Linkuri de rezervare pentru pacienți

Fiecare clinică și fiecare medic din DemoMed primește un link de rezervare care poate fi distribuit, unde pacienții pot vedea disponibilitatea și se pot programa singuri, fără să aibă nevoie de un cont DemoMed.

## Găsirea linkului tău

- **Link general al clinicii:** `https://book.demomed.example/riverside-family-health`
- **Link specific medicului:** `https://book.demomed.example/riverside-family-health/dr-osei`

Ambele sunt disponibile din **Agendă → Linkuri de rezervare**, alături de o versiune cu cod QR potrivită pentru tipărire pe o carte de vizită sau pe semnalizarea clinicii.

## Integrarea pe propriul site

Dacă clinica ta are deja un site, integrează widget-ul de rezervare cu un fragment de cod gata de copiat din **Agendă → Linkuri de rezervare → Integrare**:

```html
<iframe
  src="https://book.demomed.example/riverside-family-health?embed=true"
  width="100%"
  height="700"
  frameborder="0">
</iframe>
```

Parametrul `embed=true` elimină antetul/subsolul DemoMed, astfel încât widget-ul se integrează vizual în site-ul tău.

## Ce văd pacienții

1. Selectează un tip de programare (apar doar tipurile auto-programabile — vezi [Tipuri de programări](/scheduling/appointment-types)).
2. Aleg o dată și o oră dintre intervalele disponibile.
3. Introduc numele, data nașterii, emailul și numărul de telefon, sau se autentifică într-un cont de pacient DemoMed existent.
4. Completează sau amână formularul de admisie asociat.
5. Primesc un email/SMS de confirmare cu linkul vizitei video, adăugat automat în calendarul lor printr-un fișier `.ics` atașat.

## Pacienți noi vs. pacienți existenți

Fluxul de rezervare detectează automat pacienții existenți, potrivind emailul și data nașterii cu fișele deja existente, și le pre-completează informațiile în loc să le ceară să le reintroducă. Dacă nu se poate face o potrivire sigură, DemoMed creează o fișă nouă de pacient și o marchează pentru verificare de către recepție, pentru a depista eventuale duplicate accidentale.

## Restricționarea cine se poate programa

Din **Agendă → Linkuri de rezervare → Restricții**, poți impune:

- **Restricție de stat/regiune** — permite rezervarea doar pacienților aflați fizic în regiunile în care medicul este licențiat (folosește adresa declarată de pacient; DemoMed nu face geo-blocare după IP pentru această funcție).
- **Doar pacienți existenți** — ascunde complet auto-programarea pentru pacienți noi, util pentru cabinete de specialitate care acceptă doar pacienți trimiși prin recomandare.
- **Aprobare necesară** — programările pacienților noi rămân în starea „Solicitat” până când un membru al personalului le confirmă, în loc să confirme instant intervalul.

## Dezactivarea temporară a auto-programării

Comută opțiunea **Pauzează programările online** din **Agendă → Linkuri de rezervare** pentru a ascunde imediat pagina de rezervare (vizitatorii văd mesajul „momentan nu acceptăm programări online”) fără să ștergi disponibilitatea configurată — util atunci când un medic lipsește neașteptat și preferi ca recepția să gestioneze reprogramările telefonic.
