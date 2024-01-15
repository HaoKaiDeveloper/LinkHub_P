<template>
  <div class="w-full h-screen flex justify-center items-center">
    <div
      class="flex flex-col justify-center items-center mt-[-10%] gap-5 p-6 rounded-lg shadow-md"
    >
      <div class="flex items-center gap-1">
        <h1 class="text-2xl">LinkHub</h1>
        <Icon name="material-symbols:lock-open-right" class="text-2xl" />
      </div>
      <ClientOnly>
        <GoogleLogin :callback="callback" />
      </ClientOnly>
    </div>
  </div>
</template>

<script setup>
const userStore = useUserStore();

const callback = async (response) => {
  if (!response.credential) {
    return;
  }

  const { data } = await useFetch("/api/auth/login", {
    method: "POST",
    body: {
      credential: response.credential,
    },
  });
  if (data.value) {
    userStore.setUser(data.value);
    navigateTo("/");
  }
};
</script>

<style></style>
