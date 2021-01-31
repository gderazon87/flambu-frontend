<template>
  <b-container class="flambu-anlytics-box">
    <div
      class="align-items-center text-center landing-big-title flambu-analytics-title"
    >
      <b-img :src="flameLogo" class="flame-logo"></b-img> This is Flambu
    </div>
    <div class="text-center">
      <div class="flambu-analytics-content">
        <div>
          <p class="pink-color landing-big-title">12.3M</p>
          <p class="landing-sub-title">Funds Raised</p>
        </div>
        <div>
          <p class="pink-color landing-big-title">11K</p>
          <p class="landing-sub-title">Items</p>
        </div>
        <div>
          <p class="pink-color landing-big-title">9K</p>
          <p class="landing-sub-title">Users</p>
        </div>
        <div>
          <p class="pink-color landing-big-title">300</p>
          <p class="landing-sub-title">Partners</p>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
import flameLogo from "@/assets/img/flame-logo.png";

export default {
  name: "FlambuAnalytics",
  components: {},
  methods: {},
  data: function() {
    return {
      flameLogo,
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/custom/_variables.scss";
.flambu-anlytics-box {
  padding: 90px 0px 120px 0px;
  .flambu-analytics-title {
    margin-bottom: 110px;

    .flame-logo {
      margin: 0px;
      margin-right: 30px;
    }
  }

  .flambu-analytics-content {
    display: inline-flex;
    div:not(:last-child) {
      margin-right: 5em;
    }
  }
}
</style>
