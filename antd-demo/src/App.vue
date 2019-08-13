<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  name: 'app'
}
</script>

<style>
  @import url('./assets/css/Normalize.css');
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
  background-size:cover;
  position: relative;
  width: 100%;
  height: 100%;
}
  div{
    box-sizing: border-box;
  }
</style>
