import { useAuthStore } from "@/stores/auth";
import { apiRequest } from "./api";
import type { User } from "@/stores/auth";

export async function fetchUserData(token: string) {
  const authStore = useAuthStore();

  try {
    const userData = await apiRequest("/api/auth/me", "GET");
    authStore.setUser(userData);
  } catch (error) {
    console.error("Ошибка при получении данных пользователя:", error);
    throw error;
  }
}
