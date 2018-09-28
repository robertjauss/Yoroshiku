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
      // Pulls 'name' object from localStorage, which avoids opening the set modal
      return this.localStorage.name
    }
  }
  
}
</script>


<style scoped>
#app {
  background: url('../assets/bg.png')
}
h1, h2 {
  font-weight: normal;
}
</style>
