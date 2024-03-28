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
        },
        showUp(index){
            this.activeIndexSlide = index;
        }
    },
    mounted(){

    }
}).mount('#app');

/*
Bonus:
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
*/