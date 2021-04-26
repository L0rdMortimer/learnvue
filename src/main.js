
import Vue from 'vue';

let app = new Vue ({
    el: '#app',
    created(){
        console.log('Tere Frog');
    },
    data: {
        message: '',
        items: [],
    },
    methods: {
        addItem(){
            if(this.message.trim() !== '') {
                this.items.push(this.message);
                this.message = '';
            }
        }
    }
});