EXE Computer Service - PWA

Come progetto, viene presentato un modello rappresentante il futuro sito ufficiale dell'attività commerciale "EXE Computer Service s.r.l.".

Alla base del progetto, vengono utilizzati vari framework e librerie di JavaScript:

- Framework "Angular" per la parte frontend:
  - Tailwindcss per i fogli di stile(basato su CSS)
- Node.js e libreria Express.js:
  - mysql2 per la comunicazione con il DB
  - b-crypt/crypto-js per la cryptazione delle password nel DB
  - JsonWebToken / expressJWT per la gestione dei Token di autenticazione
  - dotEnv per la creazione di un environment
  - nodemon per la creazione di un socket autoaggiornante

L'applicazione si basa su creazione e autenticazione dell'utente, che sia esso cliente o tecnico, scambio di informazioni (dalla semplice vista del profilo, fino alla richiesta di viste personalizzate) e autorizzazioni. Il tutto utilizzando il paradigma RESTfull.
