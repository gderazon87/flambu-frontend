<template>
  <div class="cursor-pointer" @click="goToDetail()">
    <b-img :src="data.imagePath" class="article-img"></b-img>
    <div class="text-right mt-2">
        {{data.date}}   |   {{data.mins}}
    </div>
    <p class="bold-text mt-2">{{data.title}}</p>
    <div>{{data.description}}</div>
    <span class="pink-color bold-text float-right">Read More</span>
  </div>
</template>

<script>
export default {
  name: "ArticleItem",
  components: {},
  props: ["data"],
  methods: {
    goToDetail() {
      this.$router.push("/blog/" + this.data.id);
    },
  },
  data: function() {
    return {};
  },
};
</script>

<style lang="scss">
@import "@/assets/custom/_variables.scss";
.article-img {
    width:100%;
}
</style>
