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
      this.localStorage.name = ''
      this.localStorage.hadCoffee = []
      this.localStorage.hadLunch = []
    }
  }
}
</script>

<style>
#app {
  background: #298baa url('./assets/bg.png');
  background-size: cover;
}
</style>
