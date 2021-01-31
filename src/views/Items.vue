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
              <b-form-input placeholder="What are you looking for??"></b-form-input>
            </b-input-group>  
            <b-button class="pink-round-btn">Search</b-button>
          </div>
        </div>
      </b-container>
    </div>
    <b-container>
      <ItemsTable :data="items"></ItemsTable>
      <DescribeNeedForm class="mt-5"></DescribeNeedForm>
    </b-container>
    
    <TryFlumbuMobile></TryFlumbuMobile>
  </div>
</template>

<script>
import TryFlumbuMobile from '../components/TryFlumbuMobile.vue';
import ItemsTable from '../components/Table/ItemsTable.vue';
import DescribeNeedForm from '../components/Form/DescribeNeedForm.vue';

import flameLog from "@/assets/img/flame-logo.png";
import searchIcon from "@/assets/img/lupa.png";
import item1Img from '@/assets/img/items/item1.png';

export default {
  name: 'Items',
  components: {
    TryFlumbuMobile,
    ItemsTable,
    DescribeNeedForm
  },
  mounted() {
    for(var i=0;i<200;i++) {
      this.items.push({
        id: i+1,
        title: 'But I must put a title here',
        rating: 3.5,
        ratingCount: 162,
        description: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not.',
        price: 330,
        imagePath: item1Img,
        owner: 'Steven Rogers'
      })
    }
  },
  data: function() {
    return {
      items: [],
      flameLog,
      searchIcon
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