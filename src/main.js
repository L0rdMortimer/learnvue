import Vue from 'vue';
import ('./main.scss');
import App from './App.vue';
import Bulma from "./Bulma.vue";


Vue.component('app', App);
Vue.component('bulma', Bulma);
let app = new Vue ({
    el: '#app',
    data: {
        message: '',
        items: [],
    },
    methods: {

    }
});