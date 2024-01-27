<template>
  <div class="p-8">
    <div class="text-lg">
      <div
        class="
          flex
          md:flex-row md:space-x-12
          flex-col
          items-stretch
          md:justify-between
          justify-start
        "
      >
        <div class="py-2 w-full">
          <div
            class="
              p-2
              text-gray-700
              dark:text-white
              font-semibold
              border-gray-400 border-b-2
            "
          >
            Paper Publication:
          </div>
          <div class="flex flex-col items-start w-full text-justify">
            <MiscArticle :news="article" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!--<script>
export default {
  head() {
    return {
      title: "Publication",
      meta: [
        { hid: "title", name: "title", content: "publication" },
        { hid: "og:title", name: "og:title", content: "publication" },
        {
          hid: "description",
          name: "description",
          content: this.article.description,
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.article.description,
        },
      ],
    };
  },
  async asyncData({ $content }) {
    const article = await $content("publication").fetch();
    console.log(article)
    return {
      article,
    };
  },
};
</script> -->

<script setup lang="ts">
const { data: article } = await useAsyncData("home", () =>
  queryContent("publication").findOne()
);
useHead({
      title: "Publication",
      meta: [
        { hid: "title", name: "title", content: "Publication" },
        { hid: "og:title", name: "og:title", content: "Publication" },
        {
          hid: "description",
          name: "description",
          content: "publish",
        },
        {
          hid: "og:description",
          name: "og:description",
          content: "publish",
        },
      ],
    })
</script>
