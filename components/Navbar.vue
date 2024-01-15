<template>
  <section
    class="flex justify-between items-center relative mb-3 p-2 shadow-md rounded-xl"
  >
    <div class="flex items-center gap-2">
      <img
        v-if="userStore.avatar"
        :src="userStore.avatar"
        alt=""
        class="w-10 h-10 object-cover rounded-full overflow-hidden"
      />

      <div
        v-else
        class="w-10 h-10 rounded-full bg-stone-200 flex justify-center items-center"
      >
        <Icon name="material-symbols:person-2-rounded" class="text-2xl" />
      </div>
      <p class="font-semibold invisible lg:visible">{{ userStore.name }}</p>
    </div>
    <div
      class="flex items-center gap-1 absolute top-2 left-1/2 translate-x-[-50%] lg:invisible"
    >
      <h1 class="text-2xl">LinkHub</h1>
      <Icon name="material-symbols:lock-open-right" class="text-2xl" />
    </div>
    <button
      class="flex justify-center items-center lg:invisible"
      @click="() => (showNav = true)"
    >
      <Icon name="material-symbols:menu-rounded" class="text-3xl" />
    </button>

    <!-- nav popup -->
    <div class="w-full h-full fixed top-0 left-0 z-20 lg:hidden" v-if="showNav">
      <div
        class="w-full h-full absolute top-0 left-0 bg-stone-900/50"
        @click="() => (showNav = false)"
      ></div>
      <div
        class="w-full max-w-[300px] bg-white p-4 absolute top-[10%] left-1/2 translate-x-[-50%] z-10 flex flex-col gap-2 rounded-lg"
      >
        <div class="flex items-center gap-1 p-3">
          <h1 class="text-2xl">LinkHub</h1>
          <Icon name="material-symbols:lock-open-right" class="text-2xl" />
        </div>

        <ul>
          <li class="hover:bg-orange-50">
            <NuxtLink to="/" class="p-4 flex items-center gap-1 text-base">
              <Icon name="material-symbols:house-outline" />
              Home</NuxtLink
            >
          </li>
          <li class="hover:bg-orange-50">
            <NuxtLink
              to="/youtube"
              class="p-4 flex items-center gap-1 text-base"
            >
              <Icon name="material-symbols:youtube-tv-outline" />
              Youtube</NuxtLink
            >
          </li>
          <li class="hover:bg-orange-50">
            <NuxtLink to="/links" class="p-4 flex items-center gap-1 text-base">
              <Icon name="material-symbols:link" />
              Links</NuxtLink
            >
          </li>
        </ul>

        <ul>
          <li class="hover:bg-orange-50">
            <NuxtLink to="/" class="p-4 flex items-center gap-1 text-base">
              <Icon name="material-symbols:settings-outline" />
              Setting
            </NuxtLink>
          </li>
          <li class="hover:bg-orange-50" @click="handleLogout">
            <NuxtLink class="p-4 flex items-center gap-1 text-base">
              <Icon name="material-symbols:logout-rounded" />
              Logout
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <!-- nav popup -->
  </section>
</template>

<script setup>
const userStore = useUserStore();
const showNav = ref(false);
</script>

<style></style>
