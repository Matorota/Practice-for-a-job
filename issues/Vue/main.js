import Vue from 'vue'
import test from './App.vue' 

Vue.config.productionTip = false

new Vue({
    render: h => h(test),
}).$mount('#test')