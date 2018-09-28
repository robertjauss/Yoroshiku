<template>
    <v-flex xs5 offset-xs1 pa-5>
        <v-hover>
            <v-card
                slot-scope="{ hover }"
                :class="`elevation-${hover ? 12 : 2}`"
                @click.native="select('coffee')"
                ripple
            >
                <v-img
                    :src="require('../assets/coffee-square.jpg')"
                    aspect-ratio="1"
                    class="white--text"
                >
                    <v-expand-transition>
                        <div
                            v-if="hover"
                            class="d-flex transition-fast-in-fast-out blue lighten-2 v-card--reveal display-3 white--text"
                            style="height: 100%;"
                        >
                            Find a Coffee Buddy
                        </div>
                    </v-expand-transition>
                    <v-container fill-height fluid>
                        <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                                <span class="headline">
                                    Connect with your coworkers
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
