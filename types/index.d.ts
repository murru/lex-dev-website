interface ILanguageItem {
  es: string;
  en: string;
}

export interface IAbout {
  title?: ILanguageItem;
  content?: ILanguageItem;
}

export interface IHome {
  title?: string;
  subtitle?: ILanguageItem;
  webProfiles?: IWebProfile[];
  about?: IAbout;
}

export interface INavOption extends ILanguageItem {
  slug: string;
}

export interface IWebProfile {
  url: string;
  color: string;
  icon: string;
  name: string;
}
