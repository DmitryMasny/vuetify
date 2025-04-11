/// <reference types="vite/client" />
/// <reference types="unplugin-vue-router/client" />

declare global {
  interface Window {
    Telegram: {
      WebApp: {
        initData: string;
        initDataUnsafe: {
          user?: {
            id: number;
            first_name?: string;
            last_name?: string;
            username?: string;
            language_code?: string;
            is_premium?: boolean;
          };
          query_id?: string;
        };
        version: string;
        platform: string;
        colorScheme: "light" | "dark";
        expand: () => void;
        close: () => void;
        // Добавь другие методы, которые используешь
      };
    };
  }
}

export {};
