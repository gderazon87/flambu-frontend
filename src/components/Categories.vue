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
          v-if="categories.length>0"
          :items="categories"
          :options="{ padding: 15 }"
        >
          <template v-slot:default="{ item }" >
            <div class="item" @click="goToCategory(item.$key)" @mouseover="currentHoverId = item.$key" @mouseleave="currentHoverId = null">
              <transition name="fade">
                <div v-if="currentHoverId == item.$key" class="overlay">
                  <h4>{{item.name}}</h4>
                </div>
              </transition>
              
              <img :src="item.categoryImagePath" :alt="item.name" />
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
      }
  },
  async mounted() {
    this.categories = await getCategoryList();
  },
  data: function() {
    return {
      categories: [],
      currentHoverId: null
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
            .item {
              position: relative;
            }
            img {
                width: 100%;
                border-radius: 8px;
            }
        }
    }
    .overlay {
			background: rgba(#000, .65);
			display: flex;
			height: 100%;
			position: absolute;
			width: 100%;
      align-items: center;
      h4 {
        color: white;
        opacity: 0.8;
        width: 100%;
        text-align: center;
      }
    }
}
</style>
