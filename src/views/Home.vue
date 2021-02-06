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
                 v-on:keyup.enter="searchItems()" v-model="searchKey"
              ></b-form-input>
            </b-input-group>
            <b-button class="pink-round-btn" @click="searchItems()">Search</b-button>
          </div>
        </div>
      </b-container>
    </div>
    <b-container>
      <b-row class="why-flambu">
        <b-col lg="7">
          <p class="landing-sub-title bold-text mb-5">Why flambu?</p>
          <p class="faint">
            Think about all the experiences you had, or think to have, and all the tasks you had or have to do. Let’s say you want to start playing the guitar as a new hobby, or want to record your skiing experience with a GoPro, or just want to open a hole on your wall and need a power drill.  
          </p>
          <p class="faint mt-4">
            For all those experiences, or tasks, you need to have the relevant products. Maybe buying all these products is too expensive for you, or even if you buy, you just use them just a few times and then forget them at a corner of your home to gather dust  right?
          </p>
          <p class="faint mt-4 mb-5">
            So exactly for those reasons we have created Flambu, so that you won’t need to compromise on having the best experiences anymore. Have access to the best products just for your need at a specific moment, from people around you, use them and then return when you don’t need them anymore. And all this by renting instead of buying, for a fraction of the price of the products that you need!
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
            <p class="landing-sub-title bold-text mb-5">Try before buying</p>
            <p class="faint">
              In today’s world, we have so many options of different products, brands, versions and more, and when it comes to the decision of buying something it can be overwhelming. We are all flooded with commercials and ads all the time, and sometimes we just buy something that we don’t really need in an impulse, and then regret.
            </p>  
            <p class="faint mt-4"> 
              We offer a new way of living, getting away from the consumerist lifestyle that we were all raised to be in, and instead to become more informed about the things we want to buy. Even the informed consumers amongst us, find themselves in endless research of reading and watching reviews - many times biased opinions of other strangers. 
            </p>
            <p class="faint mt-4"> 
              What if you just had the chance to try it by yourself before coming to any decision? We encourage everyone in the Flambu community to share their unused items with their fellow neighbors, so that others can try different products and versions, to feel them personally before making any decision.
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
            <p class="landing-sub-title bold-text mb-5">Sustainability</p>
            <p class="faint">Above all, think about all the products we are buying and not using. How much potential is lying all around us that we could unlock. Instead, we keep those items unused and even forget about them, while other people are also keeping buying the same things we have and don’t use.  </p>
            <p class="faint mt-4">Think about how much of the production we could reduce by sharing our items with others, and in turn how much waste we could reduce. Join Flambu today, be part of our community. Share what you have and rent what you need, to keep our planet clean and green. </p>
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
  methods: {
    async searchItems() {
      this.$router.push('/items?searchKey=' + this.searchKey);
    }
  },
  mounted() {

  },
  data: function() {
    return {
      flameLog,
      searchIcon,
      flamePhoneImg,
      enjoyWithoutBuyingImg,
      travelLightImg,
      substainableImg,
      searchKey: ''
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
