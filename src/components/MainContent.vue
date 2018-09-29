<template>
    <v-container>
        <v-layout wrap row>
            <coffee :select="select" />
            <lunch :select="select" />
            <outing-modal :modal="modal" :closeModal="closeModal" :group="group" />
        </v-layout>
    </v-container>
</template>

<script>
import Coffee from './Coffee.vue'
import Lunch from './Lunch.vue'
import OutingModal from './OutingModal.vue'

export default {
    data: () => ({
        coworkers: ['Happy', 'Dopey', 'Grumpy', 'Sneezy', 'Bashful', 'Sleepy', 'Doc', 'Snow'],
        group: null,
        modal: false
    }),
    components: {
        Coffee,
        Lunch,
        OutingModal
    },
    methods: {
        select(activity) {
            /**
             * Takes in an activity string to check if 'coffee' or not,
             * calls second function to get list of random coworkers,
             * then adds those choices to the localStorage to allow for
             * duplicate checking
             */
            if (activity == 'coffee') {
                let coworker = this.getCoworkers(1)
                if (coworker[0]) { // Checks if null list was passed back
                    this.group = coworker
                    this.localStorage.hadCoffee.push(coworker[0])
                } else {
                    this.group = null
                }
            } else {
                let rand = Math.floor(Math.random() * 3) + 3
                let lunchGroup = this.getCoworkers(rand)      
                this.group = lunchGroup                       
                this.localStorage.hadLunch.concat(lunchGroup)
            }
            this.modal = true
        },
        getCoworkers(n) {
            /**
             * Called by select() above to facilitate random choices,
             * if 'coffee' was passed in above, first checks localStorage 
             * and replaces available list with coworkers who have not
             * yet been to coffee with user, else between 3 and 5 are
             * returned.
             */
            let available = []
            if (n == 1) {
                available = this.coworkers.filter(c => !this.localStorage.hadCoffee.includes(c))
            } else {
                available = JSON.parse(JSON.stringify(this.coworkers))
            }
            let going = []
            for (let i = 0; i < n; i++) {
                let person = available[Math.floor(Math.random() * available.length)]
                going.push(person)                                                   
                available.splice(available.indexOf(person), 1)
            }
            return going
        },
        closeModal() {
            /**
             * Very simple function to change local data variable,
             * but needed here as components cannot change props
             * internally, so this function is passed in to facilitate
             */
            this.modal = false
        }
    }
}
</script>

<style>
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: 0.65;
    position: absolute;
    width: 100%;
}
</style>
