<template>
  <div>
    <div class="container">
      <div class="contact-flex">
        <div class="contact-side">
          <h2>CONTACT US</h2>
          <h3>Take A <span>Chance To Change</span> Your Body</h3>
          <p>
            Activia is a stylish gym and fitness center WordPress theme
            featuring a modern design. The theme comes with multiple homepage
            layouts with various styles of homepage designs The theme comes with
            multiple homepage layouts with various styles of homepage designs
          </p>
          <button>Read More</button>
        </div>
        <div class="card-side">
          <div class="card-background">
            <img src="../assets/images/pic6.jpg" alt="gym wear" />
          </div>
        </div>
      </div>
    </div>
    <div class="contact-showcase">
      <div class="container">
        <div class="form-showcase">
          <div class="form-flex">
            <div class="side-social">
              <div class="social-flex">
                <a href="#"><i class="fab fa-facebook"></i></a><span>|</span>
                <a href="#"><i class="fab fa-twitter"></i></a><span>|</span>
                <a href="#"><i class="fab fa-instagram"></i></a>
              </div>
            </div>

            <div class="contact-form">
              <form>
                <input
                  type="text"
                  class="input1"
                  placeholder="Enter your name"
                />
                <input
                  type="email"
                  class="input2"
                  placeholder="Enter your email"
                />
                <input type="number" class="input2" placeholder="mm/dd/yy" />
                <textarea
                  placeholder="write your message"
                  rows="{5}"
                  cols="{35}"
                ></textarea>
                <div>
                  <button>send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="contact-banner">
      <div class="banner-side">
        <h4>GET IN TOUCH</h4>
      </div>

      <div class="banner-right">
        <h4>GET IN TOUCH</h4>
      </div>
    </div>
    <!-- <FooterComponent /> -->
  </div>
</template>

<script>
// import FooterComponent from "../components/FooterComponent.vue";
export default {
  name: "ContactComponent",

  components: {
    // FooterComponent,
  },
};
</script>

<style>
</style>