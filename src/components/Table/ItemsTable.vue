<template>
  <div>
    <table class="items-table mb-4 mt-4">
      <tbody>
        <tr v-for="item in items" :key="item.$key">
          <td>
            <b-row class="pt-4 pb-4" >
              <b-col lg="4">
                <b-img :src="item.publicImagePath" class="cursor-pointer" @click="goToDetail(item.$key)"></b-img>
              </b-col>
              <b-col lg="8">
                <p class="landing-small-title bold-text cursor-pointer mb-1" @click="goToDetail(item.$key)">{{ item.title }}</p>
                <div class="align-items-center">
                    <b-form-rating :value="item.rating" color="#FA6F6F" class="p-0" inline no-border readonly></b-form-rating>
                    <span class="rating-count ml-2">({{item.numberOfReviews}})</span>
                </div>
                <p class="item-description mb-5">{{ item.description }}</p>
                <div>
                    <div class="float-left pt-5">
                        <p class="landing-small-title bold-text">{{item.dailyRentalPriceWithCurrencySymbol}} / day </p>
                        <span>by {{item.ownerUserName}}</span>
                    </div>
                    <div class="d-flex bold-text item-map-location">
                        <p class="mr-3">{{item.locationAddress}}</p>
                        <GmapMap
                          :center="{lat:item.location.lat, lng:item.location.lon}"
                          :zoom="10"
                          map-type-id="terrain"
                        ></GmapMap>
                    </div>
                    
                </div>
              </b-col>
            </b-row>
          </td>
        </tr>
      </tbody>
    </table>
    <h5 v-if="loaded" class="text-center">There is no data for items. </h5>
    <b-pagination
      v-if="rows>0"
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      align="center"    
    ></b-pagination>
  </div>
</template>

<script>
import itemMapImg from '@/assets/img/items/item-map.png';

export default {
  name: "ItemsTable",
  components: {},
  props: ["data","loaded"],
  methods: {
      goToDetail(id) {
          this.$router.push('/item/' + id);
      }
  },
  data: function() {
    return {
      perPage: 10,
      currentPage: 1,
      itemMapImg
    };
  },
  computed: {
    rows() {
      return this.data.length;
    },
    items() {
      let startIndex = (this.currentPage - 1) * this.perPage;
      let endIndex = startIndex + this.perPage;
      if (this.rows < endIndex) endIndex = this.rows;
      return this.data.slice(startIndex, endIndex);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/custom/_variables.scss";

.items-table {
  width: 100%;
  img {
    width: 100%;
  }
  .row {
    border-bottom: 1px solid #d4d3d399;
    font-size: 14px;
    .rating-count,.item-description {
        color: #31313199;
    }
  }
}
</style>
