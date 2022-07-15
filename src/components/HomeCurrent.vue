<template>
  <div class="hello">
    <h1>{{ greeting }}</h1>
    <nav class="navbar">
      <ul>
        <li>Home</li>
        <li>About</li>
          <li>Contact</li>
      </ul>


    </nav>
    <p>Beautiful World</p>
    <h1>Hellloooooooo</h1>
    <div class="image-block">
      <img :src="require('@/assets/logo.png')" />
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
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

.image-block{
  margin-left: 50px;
  margin-top: 60px;
}


</style>
