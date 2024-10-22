import type { IHome, IWebProfile } from "~/types";

export const useHomePage = () => {
  const config = useRuntimeConfig();
  const { databases } = useAppwrite();

  const parseWebProfiles = (data: any): IWebProfile[] => {
    const parsed = data.map((d: any) => {
      const json = JSON.parse(d);
      return {
        url: json.url,
        color: json.color,
        icon: json.icon,
        name: json.name,
      };
    });

    return parsed;
  };

  const parseHomePageData = (data: any): IHome => {
    const parsed = data.map((d: any) => {
      return {
        title: d.title,
        subtitle: JSON.parse(d.subtitle),
        webProfiles: parseWebProfiles(d["web-profiles"]),
        intro: JSON.parse(d.intro),
        about: JSON.parse(d.about),
      };
    });

    return parsed[0];
  };

  const getHomeData = async () => {
    const data = await databases.listDocuments(
      config.public.database,
      config.public.homepage
    );

    return parseHomePageData(data.documents);
  };

  return {
    getHomeData,
  };
};
