import { useAuthStore } from "@/stores/auth";

import type { paths } from "@/types/api";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

type ApiResponse<T> = T extends { responses: infer R }
  ? R extends {
      [statusCode: number]: { content: { "application/json": infer C } };
    }
    ? C
    : never
  : never;

type RequestBody<T> = T extends {
  requestBody: { content: { "application/json": infer B } };
}
  ? B
  : never;

type Options<T> = {
  params?: Record<string, string>;
  data?: RequestBody<T>;
  headers?: Record<string, string>;
};

export async function apiRequest<
  TPath extends keyof paths,
  TMethod extends HttpMethod,
  TOperation extends paths[TPath][Lowercase<TMethod>]
>(
  path: TPath,
  method: TMethod,
  options: Options<TOperation> = {}
): Promise<ApiResponse<TOperation>> {
  const { params, data, headers = {} } = options;
  const url = new URL(`${import.meta.env.VITE_BASE_URL}${path}`);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  const token = localStorage.getItem("jwt");

  const response = await fetch(url.toString(), {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
    body: data ? JSON.stringify(data) : undefined,
  });

  if (!response.ok) {
    if (response.status === 401) {
      const authStore = useAuthStore();
      authStore.logout();
    }
    const responseData = await response.json();
    if (responseData) {
      throw new Error(responseData.message);
    }
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

// export const api = {
//   get: <
//     TPath extends keyof paths,
//     TOperation extends paths[TPath][Lowercase<"GET">]
//   >(
//     path: TPath,
//     options?: Options<TOperation>
//   ) => apiRequest(path, "GET", options),
//   post: <
//     TPath extends keyof paths,
//     TOperation extends paths[TPath][Lowercase<"POST">]
//   >(
//     path: TPath,
//     options?: Options<TOperation>
//   ) => apiRequest(path, "POST", options),
// };
