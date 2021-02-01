<template>
  <div class="home-page">
    <div class="share-flame">
      <b-container>
        <div class="text-center">
          <b-img :src="flameLog" class="flame-logo" />
        </div>
        <div class="flame-content">
          <p class="landing-big-title">
            Share your flame
          </p>
          <div class="d-flex" align-content="between">
            <b-input-group class="home-search-group">
              <template #prepend>
                <b-img :src="searchIcon" />
              </template>
              <b-form-input
                placeholder="What are you looking for??"
              ></b-form-input>
            </b-input-group>
            <b-button class="pink-round-btn">Search</b-button>
          </div>
        </div>
      </b-container>
    </div>
    <b-container>
      <b-row class="why-flambu">
        <b-col lg="7">
          <p class="landing-sub-title bold-text mb-5">Why flambu</p>
          <p class="faint">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness.
          </p>
          <p class="faint mt-4 mb-5">
            No one rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful.
          </p>
          <b-button class="pink-round-btn">Get the App</b-button>
        </b-col>
        <b-col lg="5">
          <b-img :src="flamePhoneImg"></b-img>
        </b-col>
      </b-row>
      <div class="flambu-intro">
        <b-row>
          <b-col lg="5" class="pr-lg-4">
            <b-img :src="enjoyWithoutBuyingImg"></b-img>
          </b-col>
          <b-col lg="7" class="pl-lg-5">
            <p class="landing-sub-title bold-text mb-5">Enjoy without buying</p>
            <p class="faint">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are
              extremely painful.
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="7" class="pr-lg-5">
            <p class="landing-sub-title bold-text mb-5">Travel light</p>
            <p class="faint">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure.
            </p>
          </b-col>
          <b-col lg="5" class="pl-lg-5">
            <b-img :src="travelLightImg"></b-img>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="4" class="pr-lg-5">
            <b-img :src="substainableImg"></b-img>
          </b-col>
          <b-col lg="8" class="pl-lg-5">
            <p class="landing-sub-title bold-text mb-5">Sustainable</p>
            <p class="faint">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. </p>
            <p class="faint mt-4">No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. </p>
          </b-col>
        </b-row>
      </div>
    </b-container>
    <Categories></Categories>
    <TryFlumbuMobile></TryFlumbuMobile>
  </div>
</template>

<script>
import flameLog from "@/assets/img/flame-logo.png";
import searchIcon from "@/assets/img/lupa.png";
import flamePhoneImg from "@/assets/img/flame-phone.png";
import enjoyWithoutBuyingImg from "@/assets/img/enjoy-without-buying.png";
import travelLightImg from "@/assets/img/travel-light.png";
import substainableImg from "@/assets/img/sustainable.png";

import TryFlumbuMobile from "../components/TryFlumbuMobile.vue";
import Categories from "../components/Categories.vue";

export default {
  name: "Home",
  components: {
    TryFlumbuMobile,
    Categories
  },
  data: function() {
    return {
      flameLog,
      searchIcon,
      flamePhoneImg,
      enjoyWithoutBuyingImg,
      travelLightImg,
      substainableImg,
    };
  },
};
</script>
<style lang="scss">
.home-page {
  .share-flame {
    background-image: url("../assets/img/home-share-flame.png");
    min-height: 45vw;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    color: white;
    .container {
      padding-bottom: 30px;
    }
  }
  .why-flambu {
    .landing-sub-title {
      margin-top: 100px;
    }
    img {
      height: calc(100% + 90px);
      margin-top: -90px;
    }
  }
  .flambu-intro {
    margin-top: 120px;
    margin-bottom: 120px;
    .row {
      margin-bottom: 60px;
    }
    img {
      max-width: 100%;
    }
  }
}

.home-search-group {
  background: white;
  padding: 0.375rem 0.75rem;
  margin-right: 20px;
  border-radius: 10px;
  input {
    border: none;
    padding: 0px 0px 0px 15px;
    font-weight: bold;
  }
  .input-group-prepend {
    align-items: center;
    img {
      height: 20px;
    }
  }
}
.flame-logo {
  width: 200px;
  margin-top: 60px;
}
.flame-content {
  width: 45em;
  margin: auto;
}
</style>
