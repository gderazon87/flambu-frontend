<template>
  <div>
    <b-row class="blog-detail">
      <b-col md="10" offset-md="1">
        <b-row>
          <b-col md="3">
            <ArticleCaptions></ArticleCaptions>
          </b-col>
          <b-col md="9">
            <b-row class="lastest-news">
              <b-col>
                <p class="landing-small-title pink-color go-back cursor-pointer" @click="goBack()">
                  <i class="far fa-long-arrow-left mr-4"></i>
                  Back
                </p>
                <b-img class="blog-detail-img" :src="blogNewsImg"></b-img>
                <div class="mt-5">{{ news.date }} | {{ news.mins }}</div>
                <p class="landing-small-title bold-text mt-4">
                  {{ news.title }}
                </p>
                <div class="mt-5">{{ news.description }}</div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import ArticleCaptions from "@/components/ArticleCaptions.vue";
import blogNewsImg from "@/assets/img/blogs/blog-news.png";

export default {
  name: "ArticleDetail",
  components: {
    ArticleCaptions,
  },
  props: [],
  methods: {
      goBack() {
          this.$router.push({name: 'Blog'});
      }
  },
  data: function() {
    return {
      blogNewsImg,
      news: {
        id: "lastest",
        title: "This is what’s happening right now",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        mins: "2 MIN",
        date: "2 Jul 2020",
      },
    };
  },
};
</script>

<style lang="scss">
.blog-detail {
  margin: 0px!important;
  .go-back {
    margin-top: 4em;
    margin-bottom: 2em;
  }
  .blog-detail-img {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
  }
}
</style>
