import { defineStore } from "pinia";

export const useLinksStore = defineStore("links", {
  state: () => ({
    allLinks: [],
    activeCategory: "全部",
  }),
  getters: {
    showLinks(state) {
      if (state.allLinks.length > 0 && state.activeCategory !== "全部") {
        return state.allLinks.filter(
          (item) => item.category === state.activeCategory
        );
      }
      return state.allLinks;
    },
    categories(state) {
      const linksCategories = Array.from(
        new Set(
          state.allLinks.map((item) => {
            return item.category;
          })
        )
      ).filter((category) => category !== "");
      if (linksCategories.length > 0) {
        return ["全部", ...linksCategories];
      }
      return ["全部"];
    },
  },
  actions: {
    setAllLinks(val) {
      this.allLinks = val;
    },
    setActiveCategory(val) {
      this.activeCategory = val;
    },
    editLinks(val) {
      if (val.Fn === "push") {
        this.allLinks.push(val.link);
      } else if (val.Fn === "splice") {
        if (val.link) {
          this.allLinks.splice(val.index, 1, val.link);
        } else {
          this.allLinks.splice(val.index, 1);
        }
      }
    },
  },
});
