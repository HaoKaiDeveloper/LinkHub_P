<template>
  <div
    class="border-2 w-[200px] h-screen fixed left-0 top-0 hidden lg:flex flex-col justify-between"
  >
    <div class="flex items-center gap-1 p-3">
      <h1 class="text-2xl">LinkHub</h1>
      <Icon name="material-symbols:lock-open-right" class="text-2xl" />
    </div>

    <ul class="flex flex-col gap-1 flex-1">
      <li class="hover:bg-orange-50">
        <NuxtLink to="/" class="p-4 flex items-center gap-1 text-base">
          <Icon name="material-symbols:house-outline" />
          Home</NuxtLink
        >
      </li>
      <li class="hover:bg-orange-50">
        <NuxtLink to="/youtube" class="p-4 flex items-center gap-1 text-base">
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

    <ul class="flex flex-col gep-1">
      <li class="hover:bg-orange-50">
        <NuxtLink to="/" class="p-4 flex items-center gap-1 text-base">
          <Icon name="material-symbols:settings-outline" />
          Setting
        </NuxtLink>
      </li>
      <li class="hover:bg-orange-50" @click="logout">
        <NuxtLink class="p-4 flex items-center gap-1 text-base">
          <Icon name="material-symbols:logout-rounded" />
          Logout
        </NuxtLink>
      </li>
    </ul>
  </div>

  <ReLoginModal v-if="showModal" />
</template>

<script setup>
const { logout } = useUserFn();
const userStore = useUserStore();
const showModal = computed(() => {
  return userStore.showReLoginPop;
});
</script>

<style></style>
