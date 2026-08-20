---
sidebar_position: 3
---

# Întrebări frecvente despre facturare

### De ce a fost respinsă o decontare, în loc să fie refuzată — care e diferența?

O **respingere** se produce la nivelul casei de compensare, înainte ca asigurătorul să o proceseze — de obicei din cauza unei probleme de format, precum un modificator lipsă sau un ID de pacient nepotrivit. Poate fi corectată și retrimisă imediat din **Facturare → Decontări**. Un **refuz** înseamnă că asigurătorul a primit și a procesat decontarea, dar a refuzat plata, pentru un motiv de fond (de ex. serviciu neacoperit, autorizare prealabilă lipsă), afișat ca un cod de motiv — acesta poate necesita o contestație, nu doar o simplă retrimitere. Vezi [Plăți și facturare](/billing/payments-invoicing#submitting-insurance-claims).

### Pot percepe automat o taxă de absență pacienților?

Da, dacă ai activat-o pentru [tipul de programare](/scheduling/appointment-types#cancellation-policy-per-type) relevant și ai conectat un procesator de plăți (vezi [Configurarea asigurării și plăților](/billing/insurance-setup#connecting-a-payment-processor)). Taxa este percepută pe cardul din dosar atunci când un pacient ratează intervalul de anulare, iar pacientul este notificat cu un link de contestare.

### Cum funcționează rambursările?

Rambursările sunt emise din **Facturare → Facturi → [factură] → Rambursare** de către un membru al personalului cu rol de **Facturare** sau **Proprietar** și se întorc pe metoda de plată originală a pacientului — de obicei apar în 5–10 zile lucrătoare. Vezi [Plăți și facturare](/billing/payments-invoicing#refunds).

### Pot oferi un tarif de plată directă redus sau pe bază de venit?

Nu există un sistem automat de tarife variabile în funcție de venit, dar poți ajusta manual suma unei facturi individuale înainte de trimitere, din **Facturare → Facturi → [factură] → Ajustează**, cu o notă obligatorie de motiv, pentru evidențele tale. Pentru o reducere permanentă (de ex. un tarif redus pentru pacienții neasigurați, în general), creează un tip separat de programare cu plată directă, cu tariful mai mic, din [Tipuri de programări](/scheduling/appointment-types).

### SuperMed reține un comision din plățile pacienților?

SuperMed percepe comisioanele standard de procesare a plăților, transmise de procesatorul conectat (afișate la configurare, în **Facturare → Setări de plată → Procesator de plăți**) — nu există un comision suplimentar SuperMed peste comisioanele procesatorului, pentru planurile Practice și Network. Detaliile de preț pentru planul Solo sunt afișate pe aceeași pagină de setări și pot include un mic comision de platformă; verifică acolo termenii planului tău curent, deoarece structura comisioanelor poate varia între planuri.

### De ce factura unui pacient arată un sold rămas după ce asigurarea a plătit?

Factura reflectă responsabilitatea pacientului, nu suma totală facturată — după ce o decontare este marcată ca **Plătită** în **Facturare → Decontări**, factura se actualizează automat pentru a reflecta doar co-plata, coasigurarea sau franșiza rămasă în sarcina pacientului, conform raportării asigurătorului. Dacă suma pare greșită, verifică detaliile plății înregistrate pe decontarea respectivă, pentru defalcarea făcută de asigurător, înainte de a presupune că este o eroare de calcul a SuperMed.

### Personalul de recepție poate vedea facturarea fără să vadă notele clinice?

Da — alocă rolul **Facturare** (opțional combinat cu **Recepție**), nu rolul **Medic**. Personalul cu rolul Facturare poate vedea și gestiona facturi, decontări și rapoarte de plată, dar nu poate deschide note clinice sau vizite video. Vezi [Prezentarea rolurilor](/getting-started/inviting-staff#roles-overview).
