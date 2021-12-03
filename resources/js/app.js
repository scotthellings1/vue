require('./bootstrap');
import Vue from 'vue'
const app = new Vue({
    el: '#app',

    mounted() {
       axios.get('/skills')
       .then(response => console.log(response))
    }
})