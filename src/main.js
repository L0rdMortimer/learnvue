import Vue from 'vue';
import App from './App.vue';

Vue.component('app', App);

let app = new Vue ({
    el: '#app',
    data: {
        message: '',
        items: [],
    },
    methods: {

    }
});