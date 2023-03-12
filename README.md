<h1> EXE Computer Service - PWA </h1>

Come progetto, viene presentato il futuro sito ufficiale dell'attività commerciale "EXE Computer Service s.r.l.".

Alla base del progetto, vengono utilizzati vari framework e librerie di JavaScript:

- Framework "Angular" per la parte frontend:
  - Tailwindcss per i fogli di stile(basato su CSS)
- Node.js e libreria Express.js:
  - mysql2 per la comunicazione con il DB
  - b-crypt/crypto-js per la cryptazione delle password nel DB
  - JsonWebToken / expressJWT per la gestione dei Token di autenticazione
  - dotEnv per la creazione di un environment
  - nodemon per la creazione di un socket autoaggiornante

<h2>Caratteristiche</hh2>

- L'applicazione si basa su creazione e autenticazione dell'utente, che sia esso cliente o tecnico,
  scambio di informazioni (dalla semplice vista del profilo, fino alla richiesta di viste personalizzate) e autorizzazioni.

- Il tutto utilizzando il paradigma RESTful.

- l'utente standard, a seguito di una registrazione effettuata sia autonomamente, sia da un tecnico autorizzato,
  avrà la possibilità di controllare, in completa autonomia, la situazione dei sui dati nella sezione "Profilo",
  la lista dei sui dispositivi e degli interventi ad essi associati.

- Il tecnico, oltre che controllare il proprio profilo, sarà in grado di ricevere dal server tutte le informazioni necessarie 
  per il controllo di tutti i dispositivi presenti nel DB, controllare gli interventi ed aggiornarli in base allo svolgimento
  della relativa assistenza.

<h2>Installabilità</h2>

- L'applicazione ha la possibilità di essere installata su di un dispositivo grazie all'applicazione di un service worker.
  Ovviamente, non essendo attualmente in un ambiente diverso dal localhost, tale servizio è installabile solamente sul dispositivo 
  su cui viene avviato il server http (altrimenti il service worker necessiterebbe di una connessione HTTPS per poter essere
  correttamente installato e funzionante).

<h2>Sicurezza</h2>

- Autenticazione ed autorizzazione avvengono mediante l'uso di un token, generato al rispettivo login dell'utente/tecnico,
  trasmesso tramite intercettazione delle richieste HTTP ed inserito nel relativo header, grazie al quale il server sarà
  in grado di riconoscere l'utente ad ogni richiesta inviata.

- Grazie alla funzionalità messa a disposizione da Expressjs, viene gestito semplicemente il CORS tramite impostazione
  dei domini permessi. In fase di progettazione il cors è abilitato di default. Per abilitarlo in fase di produzione,
  sarà semplicemente richiesto l'inserimento dei domini attendibili come argomento della funzione.

- Grazie all'uso di bcrypt, le password vengono salvate nel DB in maniera cryptata

- Attacchi SQL injection vengono evitati grazie alla validazione degli input e alle query parametrizzate

Parte delle funzionalità legate alla gestione dei dispositivi e dei loro interventi sono ancora in fase di progettazione.