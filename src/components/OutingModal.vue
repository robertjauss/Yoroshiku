<template>
    <v-dialog
        v-model="modal"
        max-width="800px"
    >
        <v-card
            color="blue lighten-3"
        >
            <v-card-text class="display-2 text-xs-center pa-5">
                <div v-if="notEmpty">{{ user }}, you should {{ activity }} with {{ groupParsed }}!</div>
                <div v-if="!notEmpty">Looks like you've had coffee with everybody already!</div>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="success" @click="closeModal">{{ phrase }}</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: ['modal', 'closeModal', 'group'],
    computed: {
        groupParsed() {
            /**
             * Checks that this.group is truthy before continuing,
             * then formats the list of group members into a huamn readable format
             */
            if (this.notEmpty) {
                if (this.group.length > 1) {
                    let stringify = ""
                    for (let person of this.group) {
                        if (person == this.group.slice(-1)[0]) {
                            stringify += `and ${person}`
                        } else {
                            stringify += `${person}, `
                        }
                    }
                    return stringify
                } else {
                    return this.group[0]
                }
            }
        },
        activity() {
            /**
             * Sets the leading phrase of modal to match activity
             */
            if (this.notEmpty) {
                if (this.group.length == 1) {
                    return 'grab a coffee'
                } else {
                    return 'go to lunch'
                }
            }
        },
        phrase() {
            /**
             * When all staff had had coffee with user, changes phrase on 'ok' button
             */
            return this.notEmpty ? 'Sounds good!' : 'Lunch it is!'
        },
        notEmpty() {
            if (!!this.group) {
                if (this.group[0]) {
                    return true
                } else {
                    return false
                }
            }
        },
        user() {
            return this.localStorage.name
        }
    }
}
</script>

<style>

</style>
