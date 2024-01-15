<template>
  <NuxtLayout name="dashboard">
    <section>
      <div>
        <h1 class="text-2xl font-bold">播放清單</h1>
        <div
          class="w-full mxa-w-[100%] sm:max-w-[75%] mx-auto my-3 h-full"
          v-if="activeLink"
        >
          <!-- player start -->
          <div class="min-w-[250px] w-full aspect-video mb-3">
            <YoutubePlayer :videoId="activeLink.videoId" />
          </div>
          <!-- player end  -->
          <!-- youtubeList start -->
          <NuxtLayout name="youtube-list">
            <YoutubeListCard
              v-for="video in links"
              :key="video._id"
              :video="video"
              :activeYoutubeLink="activeLink"
              @deleteLink="deleteYoutubeLink"
              @setActiveLink="youtubeStore.setActiveLink"
            />
          </NuxtLayout>
          <!--youtubeList end  -->
        </div>
      </div>

      <div>
        <h1 class="text-2xl font-bold">搜尋</h1>

        <!-- searchInput start -->
        <div class="flex flex-wrap gap-4 my-3">
          <div
            class="min-w-[220px] w-[45%] border-2 relative overflow-hidden rounded-full active:border-black"
          >
            <input
              type="text"
              class="w-full rounded-xl text-base text-slate-600 px-3 py-2 outline-none"
              v-model="searchInput"
              @keydown.enter="handleSearchVideo"
            />
            <button
              class="flex justify-center text-2xl p-2 h-full absolute right-0 top-0 bg-stone-100"
              @click="handleSearchVideo"
            >
              <Icon
                name="material-symbols:search"
                class="flex justify-center h-full"
              />
            </button>
          </div>
          <button
            class="bg-stone-100 px-2 py-1 rounded-xl hover:bg-stone-200"
            @click="clearSearch"
          >
            清除搜尋結果
          </button>
        </div>
        <!-- searchInput end -->
        <!-- searchResult start -->
        <div
          class="w-full min-h-0 max-h-screen overflow-y-scroll flex justify-center flex-wrap gap-2"
        >
          <YoutubeSearchCard
            v-for="video in searchResult"
            :key="video.etag"
            :video="video"
            @addVideo="createYoutubeLink"
          />
        </div>
        <!-- searchResult end -->
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup>
const searchInput = ref("");
const searchResult = ref([]);
const {
  getYoutubeLinks,
  searchYotubeVideo,
  createYoutubeLink,
  deleteYoutubeLink,
} = useYoutubeLinks();
await getYoutubeLinks();

const youtubeStore = useYoutubeStore();
const { activeLink, links } = storeToRefs(youtubeStore);

function clearSearch() {
  searchInput.value = "";
  searchResult.value = [];
}

async function handleSearchVideo() {
  if (!searchInput.value) return;
  const data = await searchYotubeVideo(searchInput.value);
  searchResult.value = data;
}
</script>

<style></style>
