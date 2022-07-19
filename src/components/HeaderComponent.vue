<template>
  <header>
    <div class="logo">
      <h2>MYFIT</h2>
    </div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/Wears">Gym Wear</router-link>
      <router-link to="/Meal">Meal Plan</router-link>
      <ul>
        <!-- <li> <Link to ="/">HOME</Link></li>
                    <li><Link to = "/Wears">GYM WEAR</Link></li>
                    <li><Link to = "/Meal">MEAL PLAN</Link></li>
                    <li><Link to = "/Contact">CONTACT</Link></li>
                    <li><Link to ="/Gym ">GYM EQUIPMENT</Link></li> -->
      </ul>
    </nav>
    <router-view></router-view>

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

<style>
</style>