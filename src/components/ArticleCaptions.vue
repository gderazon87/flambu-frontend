<template>
  <div class="cursor-pointer article-captions">
    <div
      v-for="articleCaption in articleCaptions"
      :key="articleCaption.title"
      class="mb-5"
    >
      <div class="article-caption landing-small-title bold-text mb-3">
        <span>{{ articleCaption.title }}</span>
        <hr />
      </div>
      <p
        v-for="(item, index) in articleCaption.items"
        :key="index"
        class="landing-small-caption"
      >
        {{ item.title }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleCaptions",
  components: {},
  props: [],
  methods: {},
  data: function() {
    return {
      articleCaptions: [
        {
          title: "Featured",
          items: [
            { title: "Highlights" },
            { title: "Highlights" },
            { title: "Highlights" },
          ],
        },
        {
          title: "Europe",
          items: [
            { title: "Highlights" },
            { title: "Highlights" },
            { title: "Highlights" },
          ],
        },
        {
          title: "Worldwide",
          items: [
            { title: "Highlights" },
            { title: "Highlights" },
            { title: "Highlights" },
          ],
        },
        {
          title: "Blog",
          items: [
            { title: "Highlights" },
            { title: "Highlights" },
            { title: "Highlights" },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.article-captions {
  margin-top: 10em;
  .article-caption {
    hr {
      max-width: 150px;
      height: 1px;
      margin: 0px;
      background: #707070;
    }
  }
}
</style>
