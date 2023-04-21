/*

Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail

generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus:
Far comparire gli indirizzi email solamente quando sono stati tutti generati.

*/

const { createApp } = Vue

createApp({
    data() {
        return {
            // Array vuoto vuota per email
            emailGenerated: [],

            // Variabile booleana per controllare se tutte le email sono state generate
            allEmailsGenerated: false,
        }
    },
    created(){
        // Ciclio for che arriva fino a un massimo di 10
        for(let i = 0; i < 10; i++){
            // Richiamo l'API
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        }
    },
    methods: {

    },
}).mount('#app')