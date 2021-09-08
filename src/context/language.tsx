import { useQuery } from '@apollo/client';
import { GET_LANGUAGES } from 'api/graphql/query/languages';
import { createContext, ReactNode, useContext } from 'react';
import { ILanguage } from 'utils/interfaces';

const LanguageContext = createContext({
  languages: [] as ILanguage[],
  loadingLanguages: true,
});

function LanguageProvider({ children }: { children: ReactNode }) {
  const { data: languages, loading: loadingLanguages } = useQuery(
    GET_LANGUAGES,
    {
      onError: (err) => console.log(err),
    }
  );

  return (
    <LanguageContext.Provider
      value={{
        languages: languages?.languages,
        loadingLanguages,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

const useLanguage = () => useContext(LanguageContext);

export { LanguageProvider, useLanguage };
