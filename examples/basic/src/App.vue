<template>
  <div id="app">
    <h1>Icon Loader Demo</h1>

    <icons-demo/>
  </div>
</template>

<script>
import IconsDemo from './components/IconsDemo'

export default {
  components: {
    IconsDemo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
