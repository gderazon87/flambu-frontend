<template>
  <div>
    <b-container>
      <p class="landing-big-title pink-color">
        CATEGORIES
      </p>
    </b-container>
    <div class="flambu-story caregory-images">
      <b-container>
        <vue-masonry-wall
          :items="categories"
          :options="{ padding: 15 }"
          @append="append"
        >
          <template v-slot:default="{ item }">
            <div class="item">
              <b-img :src="item.src"></b-img>
            </div>
          </template>
        </vue-masonry-wall>
      </b-container>
    </div>
  </div>
</template>

<script>
import category1Img from "@/assets/img/categories/category1.png";
import VueMasonryWall from "vue-masonry-wall";

export default {
  name: "Categories",
  components: {
    VueMasonryWall,
  },
  props: [],
  methods: {
      append() {
          
      }
  },
  mounted() {
    for (var i = 0; i < 9; i++) {
      this.categories.push({
        id: i + 1,
        src: category1Img,
      });
    }
  },
  data: function() {
    return {
      categories: [],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/custom/_variables.scss";
.caregory-images {
    margin-top: 6em;
    padding: 6em 0px!important;
    .masonry-wall {
        flex-wrap: wrap;
        .masonry-column {
            flex-basis:  33.3%;
            img {
                width: 100%;
            }
        }
    }
}
</style>
