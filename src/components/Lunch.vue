<template>
    <v-flex xs5 offset-xs1 pa-5>
        <v-hover>
            <v-card
                slot-scope="{ hover }"
                :class="`elevation-${hover ? 12 : 2}`"
                @click.native="select('lunch')"
                ripple
            >
                <v-img
                    :src="require('../assets/lunch-square.jpg')"
                    aspect-ratio="1"
                    class="white--text"
                >
                    <v-expand-transition>
                        <div
                            v-if="hover"
                            class="d-flex transition-fast-in-fast-out blue v-card--reveal display-3 white--text"
                            style="height: 100%;"
                        >
                            Find a Lunch Group
                        </div>
                    </v-expand-transition>
                    <v-container fill-height fluid>
                        <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                                <span class="headline">
                                    Grab a bite with your officemates
                                </span>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-img>
            </v-card>
        </v-hover>
    </v-flex>
</template>

<script>
export default {
    props: ['select']
}
</script>

<style>

</style>
