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
          :ssr="{columns: 1}"
          @append="append"
        >
          <template v-slot:default="{ item }" >
            <div class="item" @click="goToCategory(item.$key)">
              <b-img :src="item.categoryImagePath"></b-img>
            </div>
          </template>
        </vue-masonry-wall>
      </b-container>
    </div>
  </div>
</template>

<script>
import VueMasonryWall from "vue-masonry-wall";
import { getCategoryList } from '@/services/CategoryService';

export default {
  name: "Categories",
  components: {
    VueMasonryWall,
  },
  props: [],
  methods: {
      goToCategory(key) {
        this.$router.push('/items?category=' + key);
      },
      append() {
          
      }
  },
  async mounted() {
    this.categories = await getCategoryList();
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
            cursor: pointer;
            flex-basis:  33.3%;
            img {
                width: 100%;
            }
        }
    }
}
</style>
