<template>
  <div class="hello">
    <h1>{{ greeting }}</h1>
    <p>Beautiful World</p>
    <h1>Hellloooooooo</h1>
    <img :src="require('@/assets/logo.png')" />

    
    <div class="row">
      <!-- <div class="column">
        <img alt="Vue logo" src="./assets/logo.png">
        <img alt="Vue logo" src="./assets/logo.png">
        <img alt="Vue logo" src="./assets/logo.png">
        <img alt="Vue logo" src="./assets/logo.png">
        <img alt="Vue logo" src="./assets/logo.png">
        <img alt="Vue logo" src="./assets/logo.png">

      </div>

      <div class="column">
        <img alt="Vue logo" src="./assets/logo.png">
        <img alt="Vue logo" src="./assets/logo.png">
        <img alt="Vue logo" src="./assets/logo.png">
        <img alt="Vue logo" src="./assets/logo.png">
        <img alt="Vue logo" src="./assets/logo.png">
        <img alt="Vue logo" src="./assets/logo.png">

      </div>

      <div class="column">
        <img alt="Vue logo" src="./assets/logo.png">
        <img alt="Vue logo" src="./assets/logo.png">
        <img alt="Vue logo" src="./assets/logo.png">
        <img alt="Vue logo" src="./assets/logo.png">
        <img alt="Vue logo" src="./assets/logo.png">
        <img alt="Vue logo" src="./assets/logo.png">

      </div>

      <div class="column">
        <img alt="Vue logo" src="./assets/logo.png">
        <img alt="Vue logo" src="./assets/logo.png">
        <img alt="Vue logo" src="./assets/logo.png">
        <img alt="Vue logo" src="./assets/logo.png">
        <img alt="Vue logo" src="./assets/logo.png">
        <img alt="Vue logo" src="./assets/logo.png">

      </div> -->

    </div>
    </div>
</template>

<script>
export default {
  name: 'HomeCurrent',
  props: {
    greeting: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}

.column {
  flex: 50%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
}

</style>
