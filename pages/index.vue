<template>
  <NuxtLayout name="dashboard">
    <section class="flex flex-col gap-4">
      <div class="flex flex-col gap-3">
        <h1 class="text-2xl font-bold">Links</h1>
        <div class="flex flex-wrap gap-3">
          <LinkCategoryBtn
            v-for="item in linkStore.categories"
            :key="item"
            :item="item"
          />
        </div>

        <div class="flex gap-4 flex-wrap p-2 mx-auto">
          <LinkCard
            v-for="link in linkStore.showLinks"
            :key="link._id"
            :link="link"
            :editBns="false"
          />
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <h1 class="text-2xl font-bold">播放清單</h1>
        <div
          class="w-full mxa-w-[100%] sm:max-w-[75%] mx-auto my-3 h-full"
          v-if="youtubeStore.activeLink"
        >
          <!-- player start -->
          <div class="min-w-[250px] w-full aspect-video mb-3">
            <YoutubePlayer :videoId="youtubeStore.activeLink.videoId" />
          </div>
          <!-- player end  -->
          <!-- youtubeList start -->
          <NuxtLayout name="youtube-list">
            <YoutubeListCard
              v-for="video in youtubeStore.links"
              :key="video._id"
              :video="video"
              :activeYoutubeLink="youtubeStore.activeLink"
              @deleteLink="deleteYoutubeLink"
              @setActiveLink="youtubeStore.setActiveLink"
            />
          </NuxtLayout>
          <!--youtubeList end  -->
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup>
const { getLinks } = useLinks();
const { getYoutubeLinks, deleteYoutubeLink } = useYoutubeLinks();

const [linksRes, youtubeLinksRes] = await Promise.all([
  getLinks(),
  getYoutubeLinks(),
]);

const youtubeStore = useYoutubeStore();
const linkStore = useLinksStore();
</script>

<style></style>
