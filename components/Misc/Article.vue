<template>
  <div class="p-2 flex flex-col justify-start items-start space-y-2 w-full">
      <article class="prose dark:prose-dark prose-sm w-full">
        <content-renderer
        :value="news"
      >
  <template #empty>
        <p>No content found.</p>
      </template>
      <content-renderer-markdown :value="news"/>
      </content-renderer>
      </article>
  </div>
</template>
<script>
export default {
  props: {
    news: {
      type: Object,
      default: null,
    },
  },
};
</script>