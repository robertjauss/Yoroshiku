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
            if (activity == 'coffee') {
                let coworker = this.getCoworkers(1)
                if (coworker.length > 0) {
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
            this.modal = false
        }
    },
    computed: {
        hadCoffee() {
            return this.localStorage.hadCoffee
        },
        hadLunch() {
            return this.localStorage.hadLunch
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
