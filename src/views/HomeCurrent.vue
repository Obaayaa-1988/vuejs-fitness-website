<template>
  <div class="hello">
    <div>
      <div class="showcase-image">
        <h1>MAKE YOUR BODY PROUD</h1>
        <button>Get Started</button>
      </div>

      <CardComponent />
      <LandingComponent />
      <!-- <FooterComponent /> -->
    </div>
  </div>
</template>

<script>
import CardComponent from "../components/CardComponent.vue";
import LandingComponent from "../components/LandingComponent.vue";

export default {
  name: "HomeCurrent",
  props: {
    //greeting: String,
  },
  components: {
    CardComponent,
    LandingComponent,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
