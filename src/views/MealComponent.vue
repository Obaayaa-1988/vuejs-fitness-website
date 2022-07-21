<template>
  <div>
    <div class="meal-showcase">
      <h1>ABS ARE MADE IN THE KITCHEN</h1>
      <svg
        class="waves"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,32L40,53.3C80,75,160,117,240,133.3C320,149,400,139,480,160C560,181,640,235,720,240C800,245,880,203,960,160C1040,117,1120,75,1200,74.7C1280,75,1360,117,1400,138.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div>

    <div class="container">
      <div class="break-text">
        <h1>MEAL PLAN FOR A DAY</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
      </div>
      <div class="break-ideas">
        <div class="break-card">
          <i class="fa fa-coffee"></i>
          <h2>Breakfast Ideas</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
          <button>View More</button>
        </div>

        <div>
          <img src="../assets/images/image23.jpg" alt="picture" />
          <h3>Oat, Banana and Granola</h3>
        </div>
        <div>
          <img src="../assets/images/image28.jpg" alt="picture" />
          <h3>Fried Egg and Salad</h3>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="lunch-ideas">
        <div>
          <img src="../assets/images/image20.jpg" alt="picture" />
          <h3>Tuna Salad and Potatoes</h3>
        </div>

        <div class="break-card2">
          <i class="fa fa-cutlery"></i>
          <h2>Lunch Ideas</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
          <button>View More</button>
        </div>
        <div>
          <img src="../assets/images/image27.jpg" alt="picture" />
          <h3>Raw Salad</h3>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="break-ideas">
        <div>
          <img src="../assets/images/image29.jpg" alt="picture" />
          <h3>Steak and Asparagus</h3>
        </div>
        <div>
          <img src="../assets/images/image30.jpg" alt="picture" />
          <h3>Beef with Roasted Mushroom and Peas</h3>
        </div>

        <div class="break-card">
          <i class="fa fa-cutlery"></i>
          <h2>Dinner Ideas</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
          <button>View More</button>
        </div>
      </div>
    </div>
    <div class="menu-consult">
      <h1>BOOK FOR A CONSULTATION</h1>
    </div>

    <div class="menu">
      <div class="outer-form">
        <form>
          <h4>BOOK</h4>
          <i class="fa fa-user"></i>
          <input type="text" class="input1" placeholder="Username" />
          <input type="email" class="input2" placeholder="Email" />
          <input type="password" class="input2" placeholder="Password" />
          <textarea
            placeholder="write your message"
            rows="{5}"
            cols="{35}"
          ></textarea>
          <button>Submit</button>
        </form>
      </div>
    </div>
    <!-- <FooterComponent /> -->
  </div>
</template>

<script>
// import FooterComponent from "../components/FooterComponent.vue";

export default {
  name: "MealComponent",
  props: {
    //greeting: String,
  },
  components: {
    // FooterComponent,
  },
};
</script>

<style>
</style>