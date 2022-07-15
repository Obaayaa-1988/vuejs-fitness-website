<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-link :to="'@/pages/h'">
    wlcome to the home page

    </router-link>
    <HomeCurrent greeting="Welcome ABIGAIL"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HomeCurrent from './components/HomeCurrent.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    HomeCurrent
  }
}
</script>

<style>
body{
  /* background-color: black; */
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
