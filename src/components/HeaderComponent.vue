<template>
  <header>
    <div class="logo">
      <h2>MYFIT</h2>
    </div>
    <nav>
      <ul>
        <li>
          <router-link to="/">HOME</router-link>
        </li>
        <li>
          <router-link to="/Wears">GYM WEAR</router-link>
        </li>
        <!-- <li>
          <router-link to="/Wears/:WearId">GYM WEAR</router-link>
        </li> -->
        <li>
          <router-link to="/Meals">MEAL PLAN</router-link>
        </li>
        <li>
          <router-link to="/Contact">CONTACT</router-link>
        </li>
        <li>
          <router-link to="/Equipment">GYM EQUIPMENT</router-link>
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
.router-link-exact-active {
  color: red;
}
</style>