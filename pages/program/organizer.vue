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
            Conference Organizer:
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
      title: "Organizer: Easwari Engineering College",
      meta: [
        {
          hid: "title",
          name: "title",
          content: "Organizer: Easwari Engineering College",
        },
        {
          hid: "og:title",
          name: "og:title",
          content: "Organizer: Easwari Engineering College",
        },
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
    const article = await $content("organizer").fetch();
    return {
      article,
    };
  },
};
</script>-->

<script setup lang="ts">
const { data: article } = await useAsyncData("home", () =>
  queryContent("organizer").findOne()
);
useHead({
      title: "Organizer",
      meta: [
        { hid: "title", name: "title", content: "Organizer" },
        { hid: "og:title", name: "og:title", content: "Organizer" },
        {
          hid: "description",
          name: "description",
          content: "Submission goes",
        },
        {
          hid: "og:description",
          name: "og:description",
          content: "Submission goes",
        },
      ],
    })
</script>
