import {slides} from "./data.js";

const {createApp} = Vue;

createApp({
    data(){
        return {
            slides: slides, //oppure scrivo solo slides: perché hanno lo stesso nome!!
            activeIndexSlide: 0,
        }
    },
    methods: {
        nextSlide(){
            if(this.activeIndexSlide === (slides.length -1)){
                this.activeIndexSlide = 0;
            } else {
                this.activeIndexSlide++;
            }

        },
        prevSlide(){
            if(this.activeIndexSlide === 0){
                this.activeIndexSlide = (slides.length -1);
            } else {
                this.activeIndexSlide--;
            }
        }
    },
    mounted(){

    }
}).mount('#app');

/*
Milestone2:
Al click dell'utente sulle frecce incrementare/ decrementare l'indice attivo facendo in modo che l'immagine visualizzata in grande cambi e la classe active si sposti sulla thumbnail corretta
Milestone 3:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso il basso.
Bonus:
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
*/