<template>
  <div class="top-bar">
    <b-container>
      <b-row align-h="between" align-v="center">
        <b-img :src="flambuLogImg" class="flambu-logo"/>
        <b-navbar toggleable="lg" type="dark">
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="left-nav-bar">
              <b-nav-item
                @click="goToRouter('Home')"
                :class="{ 'selected-nav-item': isSelectedRoute('Home') }">
                Home
                <div class="selected-bar"></div>
              </b-nav-item>
              <b-nav-item
                @click="goToRouter('Items')"
                :class="{ 'selected-nav-item': isSelectedRoute('Items') }">
                Items
                <div class="selected-bar"></div>
              </b-nav-item>
              <b-nav-item
                @click="goToRouter('About')"
                :class="{ 'selected-nav-item': isSelectedRoute('About') }">
                About
                <div class="selected-bar"></div>
              </b-nav-item>
              <b-nav-item
                @click="goToRouter('Blog')"
                :class="{ 'selected-nav-item': isSelectedRoute('Blog') }">
                Blog
                <div class="selected-bar"></div>
              </b-nav-item>
              <b-nav-item
                @click="goToRouter('ContactUs')"
                :class="{ 'selected-nav-item': isSelectedRoute('ContactUs') }">
                Contact us
                <div class="selected-bar"></div>
              </b-nav-item>
              <b-button class="pink-round-btn">Get the app</b-button>

            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import flambuLogImg from "@/assets/img/flambu-logo.png";

export default {
  name: "TopBar",
  components: {},
  methods: {
    goToRouter(routeName) {
      this.$router.push({ name: routeName });
    },
    isSelectedRoute(routeName) {
      var currentRouteName = this.$route.name;
      return currentRouteName == routeName;
    },
  },
  data: function() {
    return {
      flambuLogImg,
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/custom/_variables.scss";
.top-bar {
  position:relative;
  background-image: url("../assets/img/top-bar-bg.png");
  color: white;
  height: 72px;
  padding: 6px 0px!important;
  z-index:10;
  .flambu-logo {
    height: 100%;
  }
  .left-nav-bar {
    margin-left: 20px;
    .nav-item {
      margin-right: 20px;
      font-weight: bold;
      font-size: 18px;
    }
  }
  .right-nav-bar {
    .nav-item {
      margin-right: 15px;
    }
  }
  .navbar-nav {
    a {
      font-size: 16px;
      color: white !important;
      i {
        font-size: 18px;
      }
    }
  }

  .selected-nav-item {
    color: $highlited-color !important;
    a {
      color: $highlited-color !important;
    }
    .selected-bar {
      height: 3px;
      width: 30px;
      background: $highlited-color !important;
    }
  }
}
</style>
