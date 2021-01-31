<template>
  <div class="related-items">
    <p class="landing-sub-title mt-5">
        Related Items
    </p>
    <b-row class="mb-5">
        <b-col v-for="(item,index) in items" :key="index">
            <b-img :src="item.imagePath"></b-img>
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
    img {
        width: 100%;
    }
}
</style>
