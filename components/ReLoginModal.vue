<template>
  <section class="fixed top-0 left-0 z-50 w-full h-full">
    <div class="fixed top-0 left-0 w-full h-full bg-gray-950/40"></div>
    <div
      class="absolute top-[20%] left-[50%] translate-x-[-50%] z-50 p-4 w-[200px] h-[120px] bg-white rounded-lg flex flex-col justify-center items-center gap-2"
    >
      <h1>登入逾時，請重新登入</h1>
      <button class="shadow-md px-2 py-1 rounded-md" @click="logout">
        確認
      </button>
    </div>
  </section>
</template>

<script setup>
const { logout } = useUserFn();
</script>

<style></style>
