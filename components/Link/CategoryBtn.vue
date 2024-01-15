<template>
  <button
    class="rounded-3xl bg-stone-100 px-4 py-1"
    :class="linkStore.activeCategory === item && 'bg-stone-200'"
    @click="linkStore.setActiveCategory(item)"
  >
    {{ item }}
  </button>
</template>

<script setup>
const props = defineProps({
  item: String,
});
const linkStore = useLinksStore();
</script>

<style></style>
