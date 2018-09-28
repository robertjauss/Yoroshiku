<template>
    <v-dialog
        persistent
        no-click-animation
        v-model="modal"
        max-width="600px"
    >
        <v-card
            color="blue lighten-4"
        >
            <h1 class="display-4 text-xs-center">Hi there!</h1>
            <v-card-text>
                <h1 class="text-xs-center">You must be the new person 😄</h1>
                <h2 class="text-xs-center mb-5">Tell me your name so we can get started!</h2>
                <v-text-field
                    outline
                    clearable
                    label="Name"
                    v-model="nameTextEntry"
                    @keydown.enter="setName"
                    :rules="[v => !!v || 'You need a name!']"
                >
                    <v-btn
                        :disabled="!nameTextEntry"
                        color="success"
                        slot="append-outer"
                        @click="setName()"
                        style="top: -12px"
                    >Save</v-btn>
                </v-text-field>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    data: () => ({
        modal: false,
        nameTextEntry: ''
    }),
    computed: {
        name() {
            return this.localStorage.name
        }
    },
    methods: {
        checkName() {
            if (!this.name) {
                this.modal = true
                this.nameTextEntry = ''
            }
        },
        setName() {
            if (this.nameTextEntry) {
                this.localStorage.name = this.nameTextEntry
                this.modal = false
            }
        }
    },
    mounted() {
        this.checkName()
    },
    watch: {
        name: {
            handler: 'checkName',
            immediate: true
        }
    }
}
</script>

<style>

</style>
