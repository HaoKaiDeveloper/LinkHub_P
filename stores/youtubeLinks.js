import { defineStore } from "pinia";

export const useYoutubeStore = defineStore("youtube", {
  state: () => ({
    links: [],
    activeLink: {},
  }),
  getters: {},
  actions: {
    setActiveLink(val) {
      this.activeLink = val;
    },
  },
});
