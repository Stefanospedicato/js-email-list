Email List
===
**Descrizione**

Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

**Bonus**

Abbellire con CSS o Bootstrap
Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)
mostrare le 10 email solo quando solo al termine delle 10 chiamate all’API

## Papar Information
- Ho creato i file html, js, css
- Ho collegato lo script all'html e a quest'ultimo ho incollato le cdn di axios e di bootstrap.
- Sul file js ho creato una const per poter utilizzare l'endpoint più comodamente e un'altra const per richiamare la mia lista dall'html.
- Con thunder client ho verificato la struttura dell'oggetto dell'endpoint.
- Ho provato con due strade, ma alla fine sono arrivato alla soluzione usando due funzioni distinte, una per popolare un array con le mie emails random e una per creare, poi,  la stringa da incollare nell'html.
- Per la prima funzione, ho creato innanzitutto due let, una per l'array vuoto (emails) e una per un contatore.
- Ho utilizzato un classico ciclo For per richiamare 10 volte l'axios che mi chiama una singola email random. Questa mail viene poi pushata nel mio array emails e il contatore si incrementa.
- Ho quindi dato una condizione, dove se il mio counter arriva a 10, entra in atto la funzione per incollare la mia lista all'html.
- Per la funzione della stringa da inserire in html ho utilizzato un ciclo forEach, che mi prende ogni singolo elemento del mio array Emails, ne crea il tag 'li' e ne incolla al suo interno l'elemento in sè.