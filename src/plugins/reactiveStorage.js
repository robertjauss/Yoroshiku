import Vue from 'vue'
import reactiveStorage from 'vue-reactive-storage'

Vue.use(reactiveStorage, {
    'name': '',
    'hadCoffee': [],
    'hadLunch': []
})