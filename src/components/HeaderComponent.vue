<template>
  <header>
    <div class="logo">
      <h2>MYFIT</h2>
    </div>
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/Wears">Gym Wear</router-link>
        </li>
        <li>
          <router-link to="/Meals">Meal Plan</router-link>
        </li>
      </ul>
    </nav>
    <!-- <router-view></router-view> -->

    <div class="header-social">
      <a href="#"><i class="fa fa-bell"></i></a>
      <a href="#"><i class="fa fa-podcast"></i></a>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style scoped>
.router-link-active,
.router-link-exact-active {
  color: red;
}
</style>