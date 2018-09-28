<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <new-user />
        <main-content />
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import NewUser from '../components/NewUser.vue'
import MainContent from '../components/MainContent.vue'

export default {
  components: {
    NewUser,
    MainContent
  },
  computed: {
    name() {
      return this.localStorage.name
    }
  }
  
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app {
  background: url('../assets/bg.png')
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
