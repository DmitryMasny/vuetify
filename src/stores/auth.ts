import { defineStore } from "pinia";

export interface User {
  id: string;
  email: string;
  role: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

export const useAuthStore = defineStore("auth", {
  state: (): AuthState => ({
    user: null,
    isAuthenticated: false,
  }),

  actions: {
    setUser(user: User) {
      this.user = user;
      this.isAuthenticated = true;
    },

    logout() {
      this.user = null;
      this.isAuthenticated = false;
      localStorage.removeItem("jwt");
    },
  },
});
