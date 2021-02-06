<template>
  <div>
    <div class="category-search-box category-all">
      <b-container>
        <div class="flame-content">
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
    <b-container v-if="item" class="item-detail-box">
      <p
        class="landing-small-title pink-color go-back cursor-pointer"
        @click="goBack()"
      >
        <i class="far fa-long-arrow-left mr-4"></i>
        Back
      </p>
      <b-row class="pt-4 pb-4 item-detail">
        <b-col lg="4">
          <b-img :src="item.publicImagePath" class="item-detail-image"></b-img>
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
            <span class="rating-count ml-2">({{ item.numberOfReviews }})</span>
          </div>
          <p class="item-description mb-5">{{ item.description }}</p>
          <div>
            <div class="float-left">
              <b-button class="pink-round-btn mb-3">Go to the app</b-button>
              <p class="landing-small-title bold-text">
                {{item.dailyRentalPriceWithCurrencySymbol}} / day
              </p>
              <span>by {{item.ownerUserName}}</span>
            </div>
            <div class="d-flex bold-text item-map-location">
              <p class="mr-3">
                {{item.locationAddress}}
              </p>
              <GmapMap
                :center="{lat:item.location.lat, lng:item.location.lon}"
                :zoom="10"
                map-type-id="terrain"
              >
                 <GmapMarker ref="myMarker"
                    :position="{lat:item.location.lat, lng:item.location.lon}" />
              </GmapMap>
            </div>
          </div>
        </b-col>
      </b-row>
      <div class="mt-5">
        <b-tabs pills>
          <b-tab title="Item Reviews" active>
            <ItemReviews :data="reviews"></ItemReviews>
            <h5 v-if="reviews.length==0 && loaded" class="text-center no-review-yet">There are no reviews yet for this item, be the first to rent and give a review. <b-button class="pink-round-btn ml-4">Get the App</b-button></h5>
          </b-tab>
          <b-tab title="Owner Reviews">
            <ItemReviews :data="ownerReviews"></ItemReviews>
            <h5 v-if="ownerReviews.length==0 && loaded" class="text-center">There are no owner reviews yet for this item.</h5>
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

import ItemReviews from "../components/ItemReviews.vue";
import RelatedItems from "../components/RelatedItems.vue";
import TryFlumbuMobile from "../components/TryFlumbuMobile.vue";

import { getItemWithId, getRelatedItemsWithInCategory } from '@/services/ItemsService';
import { getItemReviews, getOwnerItemReviews } from '@/services/ReviewService';

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
    searchItems() {
      this.$router.push('/items?searchKey=' + this.searchKey);
    },
    async initData() {
      this.itemId = this.$route.params.id;
      this.item = await getItemWithId(this.itemId);
      this.relatedItems = await getRelatedItemsWithInCategory(this.item.categoryIds,this.item.$key);
      this.reviews = await getItemReviews(this.itemId);
      if(this.item.userRef && this.item.userRef.id) this.ownerReviews = await getOwnerItemReviews(this.item.userRef.id);
      this.loaded = true;
    }
  },
  watch:{
    $route (){
      this.show = false;
      this.initData();
    }
  }, 
  async mounted() {
    this.initData();
  },
  data: function() {
    return {
      flameLog,
      searchIcon,
      searchKey: '',
      messageForm: {
        message: "",
      },
      reviews: [],
      ownerReviews: [],
      relatedItems: [],
      itemId: null,
      item: null,
      loaded: false
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/custom/_variables.scss";
.item-detail-box {
    margin-top: 60px;
}
.item-detail {
  font-size: 14px;
  border-bottom: 1px solid #d4d3d399;

  .rating-count,
  .item-description {
    color: #31313199;
  }
  .item-detail-image {
    max-width :100%;
  }
}
</style>
