<template>
  <div class="mt-4">
    <table class="review-table mb-4 mt-4">
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>
            <div class="review-item d-flex mb-3">
              <b-img :src="item.authorUserProfilePicturePath" class="avatar-img mt-3 mr-4"></b-img>
              <div>
                <div>
                  <span class="bold-text mr-3">{{item.authorUserName}}</span>
                  <b-form-rating :value="item.rating" color="#FFC800" class="p-0" inline no-border readonly></b-form-rating>
                </div>
                <p>{{item.content}}</p>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
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

export default {
  name: "ItemReviews",
  components: {},
  props: ["data"],
  methods: {
  },
  data: function() {
    return {
      perPage: 10,
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

.review-table {
  width: 100%;
  .avatar-img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  .review-item {
    border-bottom: 1px solid #d4d3d399;
    font-size: 14px;
    .item-description {
        color: #31313199;
    }
    
  }
}
</style>
