<template>
  <div>
    <b-row class="blog-content">
      <b-col sm="10" offset-sm="1">
        <b-row>
          <b-col md="3">
            <ArticleCaptions></ArticleCaptions>
          </b-col>
          <b-col md="9">
            <h1 class="landing-big-title">
              Discover the lastest <span class="pink-color">news</span>
            </h1>
            <b-row class="lastest-news">
              <b-col lg="5" class="pl-0 cursor-pointer">
                <b-img
                  :src="blogNewsImg"
                  @click="goToDetail(lastestNews)"
                ></b-img>
              </b-col>
              <b-col lg="5" offset-lg="1">
                <div class="mt-4">
                  {{ lastestNews.date }} | {{ lastestNews.mins }}
                </div>
                <p class="landing-small-title bold-text mt-4">
                  {{ lastestNews.title }}
                </p>
                <div>{{ lastestNews.description }}</div>
              </b-col>
            </b-row>
            <b-row>
              <b-col
                lg="4"
                md="6"
                class="pr-xl-5 pr-lg-4 pr-md-3 mb-5"
                v-for="(article, index) in articleItems"
                :key="index"
              >
                <ArticleItem :data="article"></ArticleItem>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import ArticleItem from "@/components/ArticleItem.vue";
import BlogSampleImg from "@/assets/img/blogs/blog1.png";
import blogNewsImg from "@/assets/img/blogs/blog-news.png";
import ArticleCaptions from "../components/ArticleCaptions.vue";

export default {
  name: "Blog",
  components: {
    ArticleItem,
    ArticleCaptions,
  },
  mounted() {
    for (var i = 0; i < 6; i++) {
      this.articleItems.push({
        id: i + 1,
        title: "Wow! Article",
        description:
          "Openax Corporate customers have an online interface where they …",
        imagePath: BlogSampleImg,
        mins: "2 MIN",
        date: "2 Jul 2020",
      });
    }
  },
  methods: {
    goToDetail(blog) {
      this.$router.push("/blog/" + blog.id);
    },
  },
  data: function() {
    return {
      blogNewsImg,
      articleItems: [],
      lastestNews: {
        id: "lastest",
        title: "Fill the following form and we will contact you very soon.",
        description:
          "Ut odio lacus, pharetra non massa nec, mollis vehicula neque. Morbi ullamcorper laoreet quam, id sagittis purus. Donec iaculis vitae risus et maximus. Suspendisse potenti. Pellentesque turpis lectus, variu… ",
        mins: "2 MIN",
        date: "2 Jul 2020",
      },
    };
  },
};
</script>
<style lang="scss">
.blog-content {
  padding: 7em 0em;
  img {
    width: 100%;
  }
  .lastest-news {
    margin: 5em 0em;
  }
}
</style>
