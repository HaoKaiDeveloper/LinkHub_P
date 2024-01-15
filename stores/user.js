import { defineStore } from "pinia";

const maxAge = 60 * 60 * 24;
const currentData = new Date();
const expirationDate = new Date(currentData.getTime() + 1000 * 60 * 60 * 24);

export const useUserStore = defineStore("user", {
  state: () => ({
    name: "",
    avatar: "",
    showReLoginPop: false,
  }),
  persist: {
    key: "user",
    storage: persistedState.cookiesWithOptions({
      sameSite: "strict",
      maxAge: maxAge,
      expires: expirationDate,
    }),
  },
  getters: {
    isLogin() {
      if (this.name && this.avatar) {
        return true;
      }
      return false;
    },
  },
  actions: {
    setUser(value) {
      this.name = value.name;
      this.avatar = value.avatar;
    },
    setShowReLoginPop(val) {
      val ? (this.showReLoginPop = false) : (this.showReLoginPop = true);
    },
  },
});
