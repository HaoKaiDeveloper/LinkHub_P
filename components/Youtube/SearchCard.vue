<template>
  <div class="w-full border-2 rounded-xl gap-1 card">
    <div class="aspect-video card_video">
      <YoutubePlayer :videoId="video.id.videoId" />
    </div>

    <div class="card_title">
      <p class="text-sm font-bold">
        {{ video.snippet.title }}
      </p>
      <p class="text-xs">
        {{ video.snippet.description }}
      </p>
    </div>
    <div class="flex items-center gap-2 card_btns">
      <p class="text-sm text-stone-400 self-end">
        {{ video.snippet.channelTitle }}
      </p>
      <button
        class="bg-stone-100 rounded-2xl py-1 px-2 text-base flex items-center text-stone-700 hover:bg-stone-200"
        @click="handleClick(video)"
      >
        <Icon name="material-symbols:add" class="text-3xl" />
        新增
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  video: Object,
});
const emit = defineEmits(["addVideo"]);

function handleClick(video) {
  emit("addVideo", video);
}
</script>

<style scoped lang="scss">
.card {
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: repeat(2, min-content);
  align-items: center;
  padding: 10px;
  &_video {
    grid-column: 1/2;
    grid-row: 1/-1;
    width: 250px;
    height: 100%;
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
    grid-template-rows: 1fr min-content min-content;
    padding: 5px;

    &_video {
      width: 100%;
      grid-column: 1/-1;
      grid-row: 1/2;
    }
    &_title {
      grid-column: 1/-1;
      grid-row: 2/3;
      & p:nth-child(2) {
        display: none;
      }
    }
    &_btns {
      grid-column: 1/-1;
      grid-row: 3/4;
      justify-self: end;
    }
  }
}
</style>
