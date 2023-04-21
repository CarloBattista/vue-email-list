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
            // Variabile vuota per email
            emailGenerated: '',
        }
    },
    created(){
        // Link API email
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( (res) => {
            // Stampo in console l'email generata dall' API
            console.log(res.data.response)
            // Stampo in pagina l'email generata dall' API
            this.emailGenerated = res.data.response
        } )
    },
    methods: {

    },
}).mount('#app')