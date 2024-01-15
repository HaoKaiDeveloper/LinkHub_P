export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore();
  if (to.path === "/login") {
    if (userStore.isLogin) {
      return navigateTo("/");
    }
  } else if (!userStore.isLogin) {
    return navigateTo("/login");
  }
});
