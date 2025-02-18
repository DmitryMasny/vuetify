import { useAuthStore } from "@/stores/auth";

export async function fetchUserData(token: string) {
  const authStore = useAuthStore();

  try {
    const response = await fetch("http://localhost:7007/api/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const userData = await response.json();
    authStore.setUser(userData);
  } catch (error) {
    console.error("Ошибка при получении данных пользователя:", error);
    throw error;
  }
}
