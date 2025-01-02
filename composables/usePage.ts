interface IPage {
  name: ILanguageItem;
  url: string;
}

const pages: IPage[] = [
  {
    name: {
      es: "principal",
      en: "home",
    },
    url: "/",
  },
  {
    name: {
      es: "sobre mí",
      en: "about",
    },
    url: "/about",
  },
];
export const usePage = () => {
  return {
    pages,
  };
};
