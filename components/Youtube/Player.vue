<template>
  <iframe
    id="existing-iframe-example"
    class="w-full h-full"
    :src="`https://www.youtube.com/embed/${videoId}?&enablejsapi=1`"
    frameborder="0"
    allowfullscreen
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  ></iframe>
</template>

<script setup>
const props = defineProps({
  videoId: String,
});
</script>

<style></style>
