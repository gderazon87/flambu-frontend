<template>
  <div class="items-page">
    <div class="category-search-box" :class="currentCategoryId=='all'? 'category-all': ''" :style="getTransportationBoxStyle()">
      <b-container v-if="loaded">
        <div v-if="category" class="text-center"> 
          <b-img :src="flameLog" class="flame-logo"/> 
        </div>
        <div class="flame-content">
          <p v-if="category" class="landing-big-title">
            {{category.name}}
          </p>
          <div class="d-flex" align-content="between"> 
            <b-input-group class="home-search-group">
              <template #prepend>
                <b-img :src="searchIcon"/> 
              </template>
              <b-form-input placeholder="What are you looking for??" v-on:keyup.enter="searchItems()" v-model="searchKey"></b-form-input>
            </b-input-group>  
            <b-button class="pink-round-btn" @click="searchItems()">Search</b-button>
          </div>
        </div>
      </b-container>
    </div>
    <b-container>
      <ItemsTable :data="items" :loaded="loaded"></ItemsTable>
      <DescribeNeedForm class="mt-5"></DescribeNeedForm>
    </b-container>
    
    <TryFlumbuMobile></TryFlumbuMobile>
  </div>
</template>

<script>
import { getItemListWithCategory } from '@/services/ItemsService';
import { getCategoryWithId } from '@/services/CategoryService';
import TryFlumbuMobile from '../components/TryFlumbuMobile.vue';
import ItemsTable from '../components/Table/ItemsTable.vue';
import DescribeNeedForm from '../components/Form/DescribeNeedForm.vue';

import flameLog from "@/assets/img/flame-logo.png";
import searchIcon from "@/assets/img/lupa.png";

export default {
  name: 'Items',
  components: {
    TryFlumbuMobile,
    ItemsTable,
    DescribeNeedForm
  },
  mounted() {
    this.initData();
  },
  watch:{
    $route (){
      this.category = null;
      this.loaded = false;
      this.currentCategoryId = 'all';
      this.initData();
    }
  }, 
  methods: {
    async initData() {
      if(this.$route.query.category) this.currentCategoryId = this.$route.query.category;
      if(this.$route.query.searchKey) this.searchKey = this.$route.query.searchKey;
      if(this.currentCategoryId!='all') this.category = await getCategoryWithId(this.currentCategoryId)
      await this.searchItems();
    },
    async searchItems() {
      try {
        this.items = await getItemListWithCategory(this.currentCategoryId,this.searchKey);
        this.loaded = true;
      }catch(e) {
        console.log(e);
      }
    },
    getTransportationBoxStyle() {
      let style= {};
      if(this.category) {
        style['background-image'] = 'url(' + this.category.categoryImagePath + ')';
      }
      return style;
    }
  },
  data: function() {
    return {
      currentCategoryId: 'all',
      searchKey: '',
      category: null,
      items: [],
      flameLog,
      searchIcon,
      loaded: false
    };
  },
}
</script>

<style lang="scss">
  .category-search-box {
    min-height: 35vw;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    color: white;
    .container {
      padding-bottom: 30px;
    }
    &.category-all {
      min-height: 10em;
      .container {
        padding-top: 3em;
        .home-search-group {
          border: 1px solid #c7c7c7;
        }
      }
    }
  }
</style>