export default function () {
  const userStore = useUserStore();

  async function logout() {
    await $fetch("/api/auth/logout", {
      method: "POST",
    });
    userStore.setUser({ name: "", avatar: "" });
    userStore.showReLoginPop = false;
    navigateTo("/login");
  }

  return {
    logout,
  };
}
