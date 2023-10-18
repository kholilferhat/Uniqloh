<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import { mapWritableState } from 'pinia'
import { useUserStore } from './stores';

export default {
  components: {
    Navbar
  },
  computed: {
    ...mapWritableState(useUserStore, ['username'])
  },
  created(){
    this.username = localStorage.username
  },
  

}
</script>

<template>
  <Navbar />

  <RouterView />
</template>

<style scoped></style>
