import { Query } from "appwrite";
import type { INavOption } from "~/types";

const sidebarState = ref<boolean>(false);

export const useSidebar = () => {
  const config = useRuntimeConfig();
  const { databases } = useAppwrite();

  const parseNavData = (data: any): INavOption[] => {
    const parsed = data.map((d: any) => {
      return {
        slug: d.slug,
        es: d.es,
        en: d.en,
      };
    });

    return parsed;
  };

  const getNav = async () => {
    const res = await databases.listDocuments(
      config.public.database,
      config.public.navOptions,
      [Query.orderAsc("order")]
    );

    return parseNavData(res.documents);
  };

  const toggleSidebar = () => {
    sidebarState.value = !sidebarState.value;
  };

  return {
    getNav,
    sidebarState,
    toggleSidebar,
  };
};
