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

    },
    mounted(){

    }
}).mount('#app');