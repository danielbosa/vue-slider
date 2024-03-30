import {slides} from "./data.js";

const {createApp} = Vue;

createApp({
    data(){
        return {
            slides: slides, //or just slides as they have same names
            activeIndexSlide: 0,
            intervallId: false,
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
        },
        pauseAutoplay(){
            clearInterval(this.intervallId),
            this.intervallId = false;
        },
        startAutoplay(){
            if (!this.intervallId){
            this.intervallId = setInterval(this.nextSlide, 2000)
        }},
    },
    mounted(){
        this.startAutoplay()
    }
}).mount('#app');