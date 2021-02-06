<template>
  <div class="items-page">
    <div class="transportation-box">
      <b-container>
        <div class="text-center"> 
          <b-img :src="flameLog" class="flame-logo"/> 
        </div>
        <div class="flame-content">
          <p class="landing-big-title">
            Transportation
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
  async mounted() {
    if(this.$route.query.category) this.currentCategory = this.$route.query.category;
    if(this.$route.query.searchKey) this.searchKey = this.$route.query.searchKey;
    await this.searchItems();
  },
  methods: {
    async searchItems() {
      try {
        this.items = await getItemListWithCategory(this.currentCategory,this.searchKey);
        this.loaded = true;
      }catch(e) {
        console.log(e);
      }
    }
  },
  data: function() {
    return {
      currentCategory: 'all',
      searchKey: '',
      items: [],
      flameLog,
      searchIcon,
      loaded: false
    };
  },
}
</script>

<style lang="scss">
  .transportation-box {
    background-image: url("../assets/img/transportation.png");
    min-height: 35vw;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    color: white;
    .container {
      padding-bottom: 30px;
    }
  }
</style>