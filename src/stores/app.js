// Utilities
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    user: {
      login: "",
      password: "",
    },
  }),
  actions: {
    login(user) {
      this.user = user;
    },
    logout() {
      this.user.login = "";
      this.user.password = "";
    },
  },
});
