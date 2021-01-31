<template>
  <div>
    <table class="items-table mb-4 mt-4">
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>
            <b-row class="pt-4 pb-4 cursor-pointer" @click="goToDetail(item.id)">
              <b-col lg="4">
                <b-img :src="item.imagePath"></b-img>
              </b-col>
              <b-col lg="8">
                <p class="landing-small-title bold-text mb-1">{{ item.title }}</p>
                <div class="align-items-center">
                    <b-form-rating :value="item.rating" color="#FA6F6F" class="p-0" inline no-border readonly></b-form-rating>
                    <span class="rating-count ml-2">({{item.ratingCount}})</span>
                </div>
                <p class="item-description mb-5">{{ item.description }}</p>
                <div>
                    <div class="float-left pt-5">
                        <p class="landing-small-title bold-text">{{item.price}} / day </p>
                        <span>by {{item.owner}}</span>
                    </div>
                    <div class="d-flex bold-text float-right item-map-location">
                        <p class="mr-3">Tel Aviv <br> - Israel</p>
                        <b-img :src="itemMapImg"></b-img>
                    </div>
                    
                </div>
              </b-col>
            </b-row>
          </td>
        </tr>
      </tbody>
    </table>
    <b-pagination
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
  props: ["data"],
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
    .item-map-location img{
        max-width: 140px;
    }
  }
}
</style>
