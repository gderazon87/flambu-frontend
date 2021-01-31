<template>
  <div>
    <div class="transportation-box">
      <b-container>
        <div class="text-center">
          <b-img :src="flameLog" class="flame-logo" />
        </div>
        <div class="flame-content">
          <p class="landing-big-title">
            Transportation
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
    <b-container class="item-detail-box">
      <p
        class="landing-small-title pink-color go-back cursor-pointer"
        @click="goBack()"
      >
        <i class="far fa-long-arrow-left mr-4"></i>
        Back
      </p>
      <b-row class="pt-4 pb-4 item-detail">
        <b-col lg="4">
          <b-img :src="item.imagePath"></b-img>
        </b-col>
        <b-col lg="8">
          <p class="landing-small-title bold-text mb-1">{{ item.title }}</p>
          <div class="align-items-center">
            <b-form-rating
              :value="item.rating"
              color="#FA6F6F"
              class="p-0"
              inline
              no-border
              readonly
            ></b-form-rating>
            <span class="rating-count ml-2">({{ item.ratingCount }})</span>
          </div>
          <p class="item-description mb-5">{{ item.description }}</p>
          <div>
            <div class="float-left">
              <b-button class="pink-round-btn mb-3">Go to the app</b-button>
              <p class="landing-small-title bold-text">
                {{ item.price }} / day
              </p>
              <span>by {{ item.owner }}</span>
            </div>
            <div class="d-flex bold-text float-right item-map-location">
              <p class="mr-3">
                Tel Aviv <br />
                - Israel
              </p>
              <b-img :src="itemMapImg"></b-img>
            </div>
          </div>
        </b-col>
      </b-row>
      <div class="mt-5">
        <b-tabs pills>
          <b-tab title="Item Reviews" active>
            <ItemReviews :data="reviews"></ItemReviews>
          </b-tab>
          <b-tab title="Owner Reviews">
            <ItemReviews :data="reviews"></ItemReviews>
          </b-tab>
        </b-tabs>
      </div>
      <RelatedItems :data="relatedItems"></RelatedItems>
      <div>
        <p class="landing-sub-title bold-text">Didn’t found what you need?</p>
        <b-form class="custom-form">
          <b-form-group class="mt-5">
            <b-form-textarea
              v-model="messageForm.message"
              placeholder="Describe here what you are looking for..."
              rows="5"
            ></b-form-textarea>
          </b-form-group>
          <b-button type="submit" class="pink-round-btn mt-4 float-right"
            >Submit</b-button
          >
        </b-form>
      </div>
    </b-container>
    <TryFlumbuMobile></TryFlumbuMobile>
  </div>
</template>

<script>
import flameLog from "@/assets/img/flame-logo.png";
import searchIcon from "@/assets/img/lupa.png";
import item1Img from "@/assets/img/items/item1.png";
import relatedItem1Img from "@/assets/img/items/relatedItem1.png";
import itemMapImg from "@/assets/img/items/item-map.png";
import reviewAvatarImg from "@/assets/img/review/avatar.png";

import ItemReviews from "../components/ItemReviews.vue";
import RelatedItems from "../components/RelatedItems.vue";
import TryFlumbuMobile from "../components/TryFlumbuMobile.vue";

export default {
  name: "ItemDetail",
  components: {
    TryFlumbuMobile,
    ItemReviews,
    RelatedItems
  },
  props: [],
  methods: {
    goBack() {
      this.$router.push({ name: "Items" });
    },
  },
  mounted() {
    for (var i = 0; i < 200; i++) {
      this.reviews.push({
        name: "Bruce Wayne",
        content:
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally.",
        avatar: reviewAvatarImg,
        rating: 3,
      });
      this.relatedItems.push({
          imagePath: relatedItem1Img
      })
    }
  },
  data: function() {
    return {
      flameLog,
      itemMapImg,
      searchIcon,
      messageForm: {
        message: "",
      },
      reviews: [],
      relatedItems: [],
      item: {
        id: 1,
        title: "But I must put a title here",
        rating: 3.5,
        ratingCount: 162,
        description:
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not.",
        price: 330,
        imagePath: item1Img,
        owner: "Steven Rogers",
      },
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/custom/_variables.scss";
.item-detail-box {
    margin-top: 100px;
}
.item-detail {
  font-size: 14px;
  border-bottom: 1px solid #d4d3d399;

  .rating-count,
  .item-description {
    color: #31313199;
  }
  .item-map-location img {
    max-width: 140px;
  }
}
</style>
