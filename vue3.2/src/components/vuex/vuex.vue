<template>
  <div>
    <h1>vuex</h1>
    <h2>state:{{state.name}}</h2>
    <h2>getters:{{store.getters.num}}</h2>
    <button @click="fn">dipatch</button>
    <button @click="fn2">commit.num</button>

  </div>
</template>
<script setup>
import { useStore, mapState } from "vuex"
import { computed } from "vue"
let store = useStore()
let { state } = store
let fn = () => {
  store.dispatch('name')
  console.log(store.getters, '000000')
}
let fn2 = () => {
  store.commit('num', 1)
}
</script>