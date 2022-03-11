<template>
  <div id="app">
    <layout/>
  </div>
</template>

<script>
import Layout from './layout'
export default {
  name: 'App',
  components: {
    Layout,
  }
}
</script>

<style>
*,
*::before,
*::after{
  box-sizing:border-box;
  margin: 0;
  padding:0;
}
#app {
  height: 100%;
}
</style>
