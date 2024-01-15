<script setup></script>

<template>
  <div class="w-full min-h-screen h-full">
    <Sidebar />
    <div class="border-2 py-5 px-2 ml-0 sm:px-5 lg:ml-[200px]">
      <Navbar />
      <slot />
    </div>
  </div>
</template>

<style></style>
