<template>
  <div class="p-8">
    <div class="text-lg">
      <div
        class="
          flex
          md:flex-row
          md:space-x-12
          flex-col
          items-stretch
          md:justify-between
          justify-start
        "
      >
        <div class="py-2 w-full">
          <div
            class="p-2 text-gray-700 dark:text-white font-semibold border-gray-400 border-b-2"
          >
            Patrons:
          </div>
          <div
            class="flex flex-col items-start w-full"
          >
            <MiscArticle
              :news="article"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!--<script>
export default {
  async asyncData({ $content }) {
    const article = await $content("patrons")
      .fetch();
    return {
      article,
    };
  },
};
</script>-->

<script setup lang="ts">
const { data: article } = await useAsyncData("home", () =>
  queryContent("patrons").findOne()
);
useHead({
      title: "Patrons",
      meta: [
        { hid: "title", name: "title", content: "Patrons" },
        { hid: "og:title", name: "og:title", content: "Patrons" },
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
