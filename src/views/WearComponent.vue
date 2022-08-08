<template>
  <div>
    <div class="container">
      <div class="outfit-image">
        <!-- <div>{{ previewCurrentImage }}</div> -->
        <img :src="previewCurrentImage.image" alt="an img here" />
        <p>
          {{ previewCurrentImage.name }}
          {{ previewCurrentImage.price }}
        </p>
      </div>

      <div class="outfit-grid">
        <div v-for="(latest, index) in latestWear" :key="index">
          <div class="outfit-image1">
            <router-link :to="`/Wears/${latest.number}`">
              <img :src="`${latest.image}`" />
            </router-link>

            <p>{{ latest.name }} {{ latest.price }}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getWears from "../services/wearData.js";
import { singleWear } from "../services/wearData.js";
export default {
  name: "WearComponent",
  computed: {
    latestWear() {
      return getWears;
    },

    getCurrentWearId() {
      return this.$route.params.id;
    },
    // previewCurrentImage() {
    //   return this.latestWear.find(
    //     (item) => item.number === Number(this.getCurrentWearId)
    //   );
    // },
    previewCurrentImage() {
      return singleWear(parseInt(this.getCurrentWearId));
    },
  },
};
</script>

<style>
@import "./style/wear.css";
</style>