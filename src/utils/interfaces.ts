export interface IContinent {
  code: string;
  name: string;
  countries: [ICountry];
}

export interface ICountry {
  code: string;
  name: string;
  native: string;
  phone: string;
  continent: IContinent;
  capital: string;
  currency: string;
  languages: ILanguage[];
  emoji: string;
  emojiU: string;
  states: IState[];
}

export interface ILanguage {
  code: string;
  name: String;
  native: String;
  rtl: boolean;
}

export interface IState {
  code: string;
  name: string;
  country: ICountry;
}
