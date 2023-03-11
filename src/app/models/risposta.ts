import { Aggiornamento } from "./aggiornamento";
import { Hardware } from "./hardware";
import { Intervento } from "./intervento";
import { Utente } from "./utente";

export class Risposta {
    risultato: boolean = false;
    id_utente: string = '';
    nome: string = '';
    ruolo: string = '';
    token: string = '';
    scadenzaToken: number = 0;
    utenti: Utente[] = [];
    interventi: Intervento[] = [];
    hardwares: Hardware[] = [];
    aggiornamenti: Aggiornamento[] = [];
    messaggio: string = '';
}