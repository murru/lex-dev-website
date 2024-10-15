const lang = ref<string>("ES");

export const useLanguage = () => {
  const toggleLanguage = () => (lang.value = lang.value === "ES" ? "EN" : "ES");

  return {
    lang,
    toggleLanguage,
  };
};
