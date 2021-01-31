<template>
    <b-container class="try-flumbu-box">
      <div class="try-flumbu-title">
        Try <b-img :src="flambuLogImg" class="flambu-logo"></b-img> yourself and share your own flame
      </div>
      <b-img :src="tryFlambuMobile" class="try-flambu-mobile"></b-img>
      <div class="text-center mt-5">
        <b-img :src="appStoreImg" class="mr-lg-5 app-link"></b-img>
        <b-img :src="googlePlayStoreImg" class="app-link"></b-img> 
      </div>
    </b-container>
</template>

<script>

import tryFlambuMobile from "@/assets/img/try-flambu-mobile.png";
import flambuLogImg from "@/assets/img/flambu-logo.png";
import googlePlayStoreImg from '@/assets/img/google-playstore.png';
import appStoreImg from '@/assets/img/app-store.png';

export default {
  name: "TryFlumbuMobile",
  components: {},
  methods: {
  },
  data: function() {
    return {
        tryFlambuMobile,
        flambuLogImg,
        googlePlayStoreImg,
        appStoreImg
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/custom/_variables.scss";

.try-flumbu-box {
    margin-top: 5em;
    margin-bottom: 7em;
    .flambu-logo {
        max-height: 32px;
        margin: 0px 8px;
    }
    .try-flumbu-title {
        font-size: 38px;
        font-weight: bold;
        color: #313131;
        align-items: center;
    }
    .try-flambu-mobile {
        max-width: 60%;
    }
    .app-link {
        max-width: 300px;
    }
}

</style>
