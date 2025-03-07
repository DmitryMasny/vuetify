/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from "vue-router/auto";
import { routes } from "vue-router/auto-routes";

const toLowercase = (pathName: string): string | undefined => {
  if (!pathName) {
    return pathName;
  }
  const slashPath = ("/" + pathName).replace(/^\/\//, "/");
  const lPath = slashPath.replace(/([A-Z])/g, "-$1").replace(/\/-/, "/");
  return lPath.toLowerCase();
};

const recursiveLowercase = (items: any[]): any[] => {
  return items.map((route) => ({
    ...route,
    name: toLowercase(route.name),
    path: toLowercase(route.path),
    children:
      route.children && Array.isArray(route.children)
        ? recursiveLowercase(route.children)
        : undefined,
  }));
};

// console.log(recursiveLowercase(routes));

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // routes: recursiveLowercase(routes),
});

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.("Failed to fetch dynamically imported module")) {
    if (!localStorage.getItem("vuetify:dynamic-reload")) {
      console.log("Reloading page to fix dynamic import error");
      localStorage.setItem("vuetify:dynamic-reload", "true");
      location.assign(to.fullPath);
    } else {
      console.error("Dynamic import error, reloading page did not fix it", err);
    }
  } else {
    console.error(err);
  }
});

router.isReady().then(() => {
  localStorage.removeItem("vuetify:dynamic-reload");
});

export default router;
