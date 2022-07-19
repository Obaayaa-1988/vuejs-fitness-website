<template>
  <div class="hello">
    <header-component />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from "./HeaderComponent.vue";

export default {
  name: "HomeCurrent",
  props: {
    // greeting: String,
  },
  components: {
    HeaderComponent,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import "../assets/css/main.css";
</style>
