<script setup>

import Userrouter from "./components/useroute/useroute.vue"
</script>

<template>
  <div id="app">

    <Userrouter />

  </div>
</template>

<style>
#app a {
  font-weight: bold;
  color: #2c3e50;
}

#app a.router-link-exact-active {
  color: #42b983;
}
</style>
