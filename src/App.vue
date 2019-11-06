<template>
  <div id="app">
    <MainNavigation />
    <HeroHeader />
  </div>
</template>

<script>
import MainNavigation from './components/MainNavigation.vue'
import HeroHeader from './components/HeroHeader.vue'

export default {
  name: 'app',
  components: {
    MainNavigation,
    HeroHeader
  }
}
</script>

<style>
body {
  background: #000;
  overflow-x: hidden;
}
h3 {
  margin: 40px 0 0;
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
    text-decoration: none;
    cursor: pointer;
    color: #fff;
    background-color: transparent;
}

a:hover {
  color: #b3b3b3;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}

.flex {
  display: flex;
}
</style>
