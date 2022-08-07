<template>
  <div>
    <div class="gym-showcase">
      <div class="gym-image1">
        <h1>SUMMER 2022 COLLECTION</h1>
        <p>Get Your Body Excited</p>
        <button>Shop Now</button>
      </div>

      <div class="gym-image1">
        <img src="../assets/images/image13.jpg" alt="gym attire" />
      </div>
    </div>

    <!-- <div>{{ latestWear }}</div> -->
    <div class="outfit-showcase">
      <div class="container">
        <div class="outfit-text">
          <h1>New Arrivals</h1>
        </div>

        <div class="outfit-grid">
            <span v-for="(latest, index) in latestWear" :key="index">
              <div class="outfit-image1">
                <img :src="`${latest.image}`" />
                <p>{{ latest.name }} {{ latest.price }}</p>
                <button>Add to Cart</button>
              </div>
            </span>
          
        </div>
        
      </div>
    </div>

  

    <div class="wear-display">
      <div class="wear-linear">
        <h2>SALE IS ON</h2>
        <h1>30% OFF</h1>
        <button>BUY NOW</button>
      </div>

      <div class="display-image">
        <img src="../assets/images/pic5.jpg" alt="gym wear" />
      </div>
    </div>
  </div>
</template>

<script>
import getWears from "../wearData.js";
export default {
  name: "WearsComponent",
  computed: {
    latestWear() {
      return getWears;
    },
  },
};
</script>

<style>
/* @import "./style/wear.css"; */
</style>