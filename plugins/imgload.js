export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("imgload", {
    mounted(el, binding) {
      el.onerror = () => {
        if (binding.value && binding.value.fallback) {
          el.src = binding.value.fallback;
        }
      };
    },
  });
});
