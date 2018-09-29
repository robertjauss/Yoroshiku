<template>
  <v-app>
    <v-toolbar
      app
      dark
      color="blue lighten-2"
    >
      <img height="42px" src="./assets/yo-100px.png" alt="Yo!">
      <v-toolbar-title>Yoroshiku</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="clearName()">Clear</v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer class="pa-3" fixed app color="blue lighten-2">
      <span>&copy; {{ year }} Robert Jauss</span>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      title: 'Yoroshiku'
    }
  },
  computed: {
    year() {
      var now = new Date
      return now.getFullYear()
    }
  },
  methods: {
    clearName() {
      /**
       * Sets all localStorage variables back to empty values for testing.
       * reactivity is instant and modal will pop back up requesting name
       */
      this.localStorage.name = ''
      this.localStorage.hadCoffee = []
      this.localStorage.hadLunch = []
    }
  }
}
</script>

<style>
#app {
  background: url('./assets/bg.png'), -moz-linear-gradient(-45deg, #ffffff 0%, #fff7fb 11%, #d0d1e6 22%, #a6bddb 33%, #67a9cf 44%, #3690c0 55%, #02818a 66%, #02818a 77%, #016c59 88%, #014636 100%); /* FF3.6-15 */
  background: url('./assets/bg.png'), -webkit-linear-gradient(-45deg, #ffffff 0%,#fff7fb 11%,#d0d1e6 22%,#a6bddb 33%,#67a9cf 44%,#3690c0 55%,#02818a 66%,#02818a 77%,#016c59 88%,#014636 100%); /* Chrome10-25,Safari5.1-6 */
  background: url('./assets/bg.png'), linear-gradient(135deg, #ffffff 0%,#fff7fb 11%,#d0d1e6 22%,#a6bddb 33%,#67a9cf 44%,#3690c0 55%,#02818a 66%,#02818a 77%,#016c59 88%,#014636 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  background-size: cover;
}
</style>
