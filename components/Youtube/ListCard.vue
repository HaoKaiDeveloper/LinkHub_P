<template>
  <div
    class="card border-2 rounded-xl"
    :class="activeYoutubeLink._id === video._id && 'bg-stone-100'"
    @click="handleSetActive(video)"
  >
    <div class="card_img">
      <img :src="video.thumbnails.url" :alt="video.channelTitle" />
    </div>

    <p class="card_title">{{ video.title }}</p>
    <p class="card_btns">
      {{ video.channelTitle }}
      <button @click.stop="handleDelete(video._id)">
        <Icon
          name="material-symbols:delete-outline"
          class="text-xl text-stone-400"
        />
      </button>
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  video: Object,
  activeYoutubeLink: Object,
});
const emits = defineEmits(["deleteLink", "setActiveLink"]);

function handleDelete(id) {
  emits("deleteLink", id);
}

function handleSetActive(video) {
  emits("setActiveLink", video);
}
</script>

<style scoped lang="scss">
.card {
  padding: 10px;
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: repeat(2, min-content);
  gap: 5px;
  align-items: center;
  &_img {
    width: 100px;
    grid-column: 1/2;
    grid-row: 1/-1;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  &_title {
    grid-column: 2/-1;
    grid-row: 1/2;
  }
  &_btns {
    grid-column: 2/-1;
    grid-row: 2/-1;
    justify-self: end;
  }

  @media screen and (max-width: 560px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, min-content);
    padding: 5px;
    &_img {
      width: 100%;
      grid-column: 1/-1;
      grid-row: 1/2;
    }
    &_title {
      grid-column: 1/-1;
      grid-row: 2/3;
    }
    &_btns {
      grid-column: 1/-1;
      grid-row: 3/-1;
      justify-self: end;
    }
  }
}
</style>
