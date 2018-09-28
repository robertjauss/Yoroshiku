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
            // Takes in an activity and checks if it's 'coffee' or not, returns 1 or 3-5 random choices from the list of coworkers
            if (activity == 'coffee') {
                let coworker = this.getCoworkers(1)
                if (coworker[0]) { // Checks if null list was passed back
                    this.group = coworker
                    this.localStorage.hadCoffee.push(coworker[0])
                } else {
                    this.group = null
                }
            } else {
                let rand = Math.floor(Math.random() * 3) + 3  // Random number between 3 and 5
                let lunchGroup = this.getCoworkers(rand)      
                this.group = lunchGroup                       
                this.localStorage.hadLunch.concat(lunchGroup) // Combines list of members to localStorage list
            }
            this.modal = true
        },
        getCoworkers(n) {
            // Does random selection based on passed number, n, provided by above function based on activity
            let available = []
            if (n == 1) {
                // Checks localStorage for list of coworkers and filters those out of the 'available' list for coffee
                available = this.coworkers.filter(c => !this.localStorage.hadCoffee.includes(c))
            } else {
                // parsing a stringified list ensures we are not mutating the original list and only a copy
                available = JSON.parse(JSON.stringify(this.coworkers))
            }
            let going = []
            for (let i = 0; i < n; i++) {
                let person = available[Math.floor(Math.random() * available.length)] // Uses Math functions to pick random number of elements from 'available' list
                going.push(person)                                                   
                available.splice(available.indexOf(person), 1) // Removes added person from 'available' list to avoid duplication
            }
            return going
        },
        closeModal() {
            this.modal = false // Creating function externally and passing in as we cannot mutate props internally
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
