<template>
  <div class="related-items">
    <p class="landing-sub-title mt-5">
        Related Items
    </p>
    <b-row class="mb-5">
        <b-col lg="4" v-for="(item,index) in items" :key="index">
          <div class="related-item-div cursor-pointer" @click="goToRelatedItem(item)">
            <b-img :src="item.publicImagePath"></b-img>
          </div>
            
        </b-col> 
    </b-row>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      align="center"    
    ></b-pagination>
  </div>
</template>

<script>

export default {
  name: "ItemReviews",
  components: {},
  props: ["data"],
  methods: {
    goToRelatedItem(item) {
      this.$router.push('/item/' + item.$key);
    }
  },
  data: function() {
    return {
      perPage: 3,
      currentPage: 1
      
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
.related-items {
    margin-top: 60px;
    margin-bottom: 50px;
    .related-item-div {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      height: 100%;
      background: #fafafa;
      padding: 10px;
      border-radius: 10px;
    }
    img {
        max-width: 100%;
    }
}
</style>
