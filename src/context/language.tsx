import { useQuery } from '@apollo/client';
import { GET_LANGUAGES } from 'api/graphql/query/languages';
import countries from 'pages/countries';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ICountry, ILanguage } from 'utils/interfaces';

const LanguageContext = createContext({
  languages: [] as ILanguage[],
  loadingLanguages: true,
  searchText: '',
  setSearchText: (searchText: string) => {},
});

function LanguageProvider({ children }: { children: ReactNode }) {
  const [searchText, setSearchText] = useState('');
  const [filteredLanguage, setFilteredLanguage] = useState([]);
  const { data: languages, loading: loadingLanguages } = useQuery(
    GET_LANGUAGES,
    {
      onError: (err) => console.log(err),
    }
  );

  useEffect(() => {
    if (searchText) {
      setFilteredLanguage(() =>
        languages?.languages.filter((language: ICountry) =>
          language.name.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    } else {
      setFilteredLanguage([]);
    }
    // eslint-disable-next-line
  }, [searchText]);

  return (
    <LanguageContext.Provider
      value={{
        languages: filteredLanguage.length
          ? filteredLanguage
          : languages?.languages,
        loadingLanguages,
        searchText,
        setSearchText,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

const useLanguage = () => useContext(LanguageContext);

export { LanguageProvider, useLanguage };
